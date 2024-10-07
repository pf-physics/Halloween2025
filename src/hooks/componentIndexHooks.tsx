import { getDatabase, ref, onValue, set } from "firebase/database";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import getDialogue from "../dialogue/dialogue-list";
import { localCode, localComponentIdx, teamAccess } from "../constants";
import { getTeamIndex, getTeamScene } from "./common";
import { setComponentIndex } from "../store/componentIndexSlice";
import { setGlobalSceneValid } from "../store/globalSceneSlice";

const indexUrl = "/componentIndex";

export const useInitComponentIdx = () => {
  const db = getDatabase();
  const dispatch = useAppDispatch();

  const getComponentIdx = () => {
    const team = localStorage.getItem("team") as string;
    const dbCode = localStorage.getItem("code") as string;
    const localIdx = localStorage.getItem(localComponentIdx) as string;

    if (dbCode === localCode) {
      dispatch(setComponentIndex(parseInt(localIdx) || 0));
      return;
    }

    const q = ref(db, dbCode + "/" + teamAccess + "/" + team + indexUrl);

    onValue(q, async (snapshot) => {
      const data = await snapshot.val();
      if (typeof data === "number") {
        dispatch(setComponentIndex(data));
      } else {
        console.log("There was an error fetching the component data");
      }
    });
  };

  return getComponentIdx;
};

export const useIncComponentIndex = () => {
  const componentIndex = useAppSelector((state) => state.componentIndex.value);
  const dispatch = useAppDispatch();
  const db = getDatabase();

  const incComponentIndex = () => {
    const team = localStorage.getItem("team") as string;
    const code = localStorage.getItem("code") as string;

    if (componentIndex !== undefined) {
      if (code !== localCode) {
        set(
          ref(db, code + "/" + teamAccess + "/" + team + indexUrl),
          componentIndex + 1,
        );
      }
      dispatch(setComponentIndex(componentIndex + 1));
    }
  };

  return incComponentIndex;
};

export const useResetComponentIdx = () => {
  const db = getDatabase();
  const dispatch = useAppDispatch();

  const resetComponentIndex = async () => {
    const team = localStorage.getItem("team") as string;
    const code = localStorage.getItem("code") as string;

    set(ref(db, code + "/" + teamAccess + "/" + team + indexUrl), 0);
    dispatch(setComponentIndex(0));
    dispatch(setGlobalSceneValid(false));
  };

  return resetComponentIndex;
};

// Still need this... maybe not since I'm not using component indices anymore
export const useIncAllComponentIndices = () => {
  const db = getDatabase();
  const globalSceneValid = useAppSelector(
    (state) => state.globalSceneValid.value,
  );
  const cpIndex = useAppSelector((state) => state.componentIndex.value);
  const teams = useAppSelector((state) => state.teams.value);
  const dispatch = useAppDispatch();

  const incAllComponenentIndex = async () => {
    if (globalSceneValid && cpIndex) {
      dispatch(setComponentIndex(cpIndex + 1));
    }

    const indices = await Promise.all(
      teams.map(async (t) => getTeamIndex(db, t, indexUrl)),
    );
    const scenes = await Promise.all(
      teams.map(async (t) => getTeamScene(db, t)),
    );

    if (scenes && scenes.every((v) => v === scenes[0])) {
      console.log("Wait until both teams are ready");
    } else if (indices[0] < getDialogue(teams[0]).length - 1) {
      const code = localStorage.getItem("code") as string;
      indices.forEach((index, listIndex) =>
        set(
          ref(db, code + "/" + teamAccess + "/" + teams[listIndex] + indexUrl),
          index + 1,
        ),
      );
    }
  };

  return incAllComponenentIndex;
};
