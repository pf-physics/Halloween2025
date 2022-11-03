import { getDatabase, ref, onValue, set } from "firebase/database";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import getDialogue from "../dialogue/dialogue-list";
import { setIndex } from "../store/indexSlice";
import { setPlayerIndex } from "../store/playerIndexSlice";
import { team1, team2 } from "../constants";
import { useResetComponentIdx } from "./componentIndexHooks";
import { getTeamIndex, getTeamScene, useSetGlobalScene } from "./common";
import { setGlobalSceneValid } from "../store/globalSceneSlice";

// in custom components, handle update local index/global index, proceeding to next thing
// set local index to 0, in the common increase index, always set it to 0
// incLocalIdx in component
// incIdx in shared func
// incGlobalIdx in shared fun (incs idx for both teams, also set local to 0)
// make one for updating both at the same time
// a door randomly appears in front of the text, with a knocking sound?

// componentIdx: when the component has its own special behaviour and subset of dialogue indices (ie - first scene, door)
// index: the index for the current team
// incIndex: increases the index for the current team
// playerIdx = index on current phone, can be decreased/increased at will, or brought to current index. Cannot be higher than idx
// -- incIdx - check if index === playerIdx, if yes inc both else inc index
// incGlobalIndex: increases index for both teams

// customIdx components handle inc/dec themselves 

// sometimes BOTH teams need to be at a certain index to continue, different component or just boolean?

const indexUrl = "/index"

export const useIncIndex = () => {
    const index = useAppSelector((state) => state.index.value)
    const playerIdx = useAppSelector((state) => state.playerIndex.value)
    const resetComponentIndex = useResetComponentIdx();

    const dispatch = useAppDispatch()
    const db = getDatabase();

    const incIndex = () => {
        const team = (localStorage.getItem("team") as string)
        const code = (localStorage.getItem("code") as string)
        const dialogueList = getDialogue(team)

        if (playerIdx === undefined || index === undefined) {
            return
        }

        if (playerIdx < index) {
            dispatch(setPlayerIndex(playerIdx + 1))
        } else if (index !== undefined && index < dialogueList.length - 1) {
            set(ref(db, code + "/" + team + "/index"), index + 1);
            dispatch(setIndex(index + 1))
            dispatch(setPlayerIndex(index + 1))

            // might be overkill to do every time, but it's safe
            resetComponentIndex()
        }

    }

    return incIndex;
}


export const useSetUpToDate = () => {
    const index = useAppSelector((state) => state.index.value)
    const playerIdx = useAppSelector((state) => state.playerIndex.value)
    const dispatch = useAppDispatch()

    const setUpToDate = () => {
        // if it's zero... then yeah
        index && dispatch(setPlayerIndex(index))
    }

    return setUpToDate;
}

// Only affects player's phone
export const useDecIndex = () => {
    const playerIdx = useAppSelector((state) => state.playerIndex.value)
    const dispatch = useAppDispatch()

    const decIndex = () => {
        // if 0 or undefined, don't decrease
        if (playerIdx) {
            dispatch(setPlayerIndex(playerIdx - 1))
        }
    }

    return decIndex;
}

export const useIncAllIndices = () => {
    const db = getDatabase();
    const index = useAppSelector((state) => state.index.value)
    const playerIdx = useAppSelector((state) => state.playerIndex.value)
    const globalScene = useAppSelector((state) => state.globalScene.value)

    const dispatch = useAppDispatch()

    const incAllIndices = async () => {
        if (playerIdx === undefined || index === undefined) {
            return;
        }

        if (playerIdx < index) {
            dispatch(setPlayerIndex(playerIdx + 1))
            return
        }

        if (globalScene) {
            dispatch(setPlayerIndex(playerIdx + 1))
            dispatch(setIndex(playerIdx + 1))
        }

        // For component index, they must both match
        const idx1 = await getTeamIndex(db, team1, indexUrl)
        const idx2 = await getTeamIndex(db, team2, indexUrl)
        const scene1 = await getTeamScene(db, team1)
        const scene2 = await getTeamScene(db, team2)

        if (scene1 !== scene2) {
            console.log("Wait until both teams are ready")
        } else if (idx1 < getDialogue(team1).length - 1) {
            dispatch(setPlayerIndex(playerIdx + 1))
            dispatch(setIndex(index + 1))

            const code = (localStorage.getItem("code") as string)

            set(ref(db, code + "/" + team1 + indexUrl), idx1 + 1);
            set(ref(db, code + "/" + team2 + indexUrl), idx2 + 1);
            dispatch(setGlobalSceneValid(true))

            // TODO
            // resetGlobalComponentIdx
        }
    }

    return incAllIndices;
}
