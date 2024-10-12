import { getDatabase, ref, onValue, set } from "firebase/database";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import getDialogue from "../dialogue/dialogue-list";
import { setIndex } from "../store/indexSlice";
import { setPlayerIndex } from "../store/playerIndexSlice";
import { localCode, teamAccess } from "../constants";
import { useResetComponentIdx } from "./componentIndexHooks";
import { getTeamIndex, getTeamScene } from "./common";
import { setGlobalSceneValid } from "../store/globalSceneSlice";

// in custom components, handle update local index/global index, proceeding to next thing
// set local index to 0, in the common increase index, always set it to 0
// incLocalIdx in component
// incIdx in shared func
// incGlobalIdx in shared fun (incs idx for both teams, also set local to 0)
// make one for updating both at the same time

// componentIdx: when the component has its own special behaviour and subset of dialogue indices (ie - first scene, door)
// index: the index for the current team
// incIndex: increases the index for the current team
// playerIdx = index on current phone, can be decreased/increased at will, or brought to current index. Cannot be higher than idx
// -- incIdx - check if index === playerIdx, if yes inc both else inc index
// incGlobalIndex: increases index for both teams

// customIdx components handle inc/dec themselves (but should still use these, right?)

const indexUrl = "/index";

export const useIncIndex = () => {
  const index = useAppSelector((state) => state.index.value);
  const playerIdx = useAppSelector((state) => state.playerIndex.value);
  const resetComponentIndex = useResetComponentIdx();

  const dispatch = useAppDispatch();
  const db = getDatabase();

  const incIndex = () => {
    const team = localStorage.getItem("team") as string;
    const code = localStorage.getItem("code") as string;
    const dialogueList = getDialogue(team);

    if (playerIdx === undefined || index === undefined) {
      return;
    }

    if (playerIdx < index) {
      dispatch(setPlayerIndex(playerIdx + 1));
    } else if (index !== undefined && index < dialogueList.length - 1) {
      if (code !== localCode) {
        set(
          ref(db, code + "/" + teamAccess + "/" + team + "/index"),
          index + 1
        );
      }
      dispatch(setIndex(index + 1));
      dispatch(setPlayerIndex(index + 1));

      // might be overkill to do every time, but it's safe
      // This also sets globalSceneValid false, so also required still for 2023
      resetComponentIndex();
    }
  };

  return incIndex;
};

export const useJumpToCurrent = () => {
  const index = useAppSelector((state) => state.index.value);
  const dispatch = useAppDispatch();

  return () => index && dispatch(setPlayerIndex(index));
};

// Only affects player's phone
export const useDecIndex = () => {
  const playerIdx = useAppSelector((state) => state.playerIndex.value);
  const dispatch = useAppDispatch();

  const decIndex = () => {
    // if 0 or undefined, don't decrease
    if (playerIdx) {
      dispatch(setPlayerIndex(playerIdx - 1));
    }
  };

  return decIndex;
};

// TODO - rather than inc all indices, will have a list of teams with indices that need to be updated
// There will be a globalScene that will have a queue of teams that want to keep going, check team length % 3 (or however many teams are needed) and allow if team index in correct spot
export const useIncAllIndices = () => {
  const db = getDatabase();
  const index = useAppSelector((state) => state.index.value);
  const playerIdx = useAppSelector((state) => state.playerIndex.value);
  const globalSceneValid = useAppSelector(
    (state) => state.globalSceneValid.value
  );
  const teams = useAppSelector((state) => state.teams.value);

  const dispatch = useAppDispatch();

  const incAllIndices = async () => {
    if (playerIdx === undefined || index === undefined) {
      return;
    }

    if (playerIdx < index) {
      dispatch(setPlayerIndex(playerIdx + 1));
      return;
    }

    // If global scene is valid set, then don't have to check that both teams are present, it has already been checked
    // So increase index for player immediately, but still make the checks so the global indices are changed properly
    if (globalSceneValid) {
      dispatch(setPlayerIndex(playerIdx + 1));
      dispatch(setIndex(playerIdx + 1));
    }

    if (!teams) {
      return;
    }

    const indices = await Promise.all(
      teams.map(async (t) => getTeamIndex(db, t, indexUrl))
    );
    const scenes = await Promise.all(
      teams.map(async (t) => getTeamScene(db, t))
    );

    // Check all scenes match the first scene
    if (!scenes || !scenes.every((v) => v === scenes[0])) {
      console.log("Wait until both teams are ready");
    } else if (indices && indices[0] < getDialogue(teams[0]).length - 1) {
      dispatch(setPlayerIndex(playerIdx + 1));
      dispatch(setIndex(index + 1));

      const code = localStorage.getItem("code") as string;

      indices.forEach((index, listIndex) =>
        set(
          ref(db, code + "/" + teamAccess + "/" + teams[listIndex] + indexUrl),
          index + 1
        )
      );

      dispatch(setGlobalSceneValid(true));
    }
  };

  return incAllIndices;
};
