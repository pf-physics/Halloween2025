import { getDatabase, ref, onValue, set, get, Database } from "firebase/database";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import getDialogue from "../dialogue/dialogue-list";
import { setPlayerIndex } from "../store/playerIndexSlice";
import { team1, team2 } from "../constants";
import { useState } from "react";
import { getTeamIndex, getTeamScene } from "./common";
import { setComponentIndex } from "../store/componentIndexSlice";
import { setIndex } from "../store/indexSlice";
import { setGlobalSceneValid } from "../store/globalSceneSlice";

const indexUrl = "/componentIndex"

const useGetComponentIdx = () => {
    const db = getDatabase();

    const getComponentIdx = (callback: (t: number) => void) => {
        const team = (localStorage.getItem("team") as string);
        const dbCode = (localStorage.getItem("code") as string)
        const q = ref(db, dbCode + "/" + team + indexUrl);

        onValue(q, async (snapshot) => {
            const data = await snapshot.val();
            if (typeof (data) === "number") {
                callback(data)
            } else {
                console.log("There was an error fetching the component data")
            }
        });
    }

    return getComponentIdx;
}

export const useInitComponentIdx = () => {
    const db = getDatabase();
    const dispatch = useAppDispatch()

    const getComponentIdx = () => {
        const team = (localStorage.getItem("team") as string);
        const dbCode = (localStorage.getItem("code") as string)
        const q = ref(db, dbCode + "/" + team + indexUrl);

        onValue(q, async (snapshot) => {
            const data = await snapshot.val();
            if (typeof (data) === "number") {
                dispatch(setComponentIndex(data))
            } else {
                console.log("There was an error fetching the component data")
            }
        });
    }

    return getComponentIdx;
}

export const useIncComponentIndex = () => {
    const componentIndex = useAppSelector((state) => state.componentIndex.value)
    const dispatch = useAppDispatch()
    const db = getDatabase();

    const incComponentIndex = () => {
        const team = (localStorage.getItem("team") as string)
        const code = (localStorage.getItem("code") as string)

        if (componentIndex !== undefined) {
            set(ref(db, code + "/" + team + indexUrl), componentIndex + 1);
            dispatch(setComponentIndex(componentIndex + 1))
        }
    }

    return incComponentIndex;
}

export const useIncComponentIndexOld = () => {
    const team = (localStorage.getItem("team") as string);
    const db = getDatabase();

    const incComponentIndex = async () => {
        const team = (localStorage.getItem("team") as string)
        const code = (localStorage.getItem("code") as string)
        const componentIndex = getTeamIndex(db, team, indexUrl)

        componentIndex.then(i => set(ref(db, code + "/" + team + indexUrl), i + 1))
    }

    return incComponentIndex

}

export const useResetComponentIdx = () => {
    const db = getDatabase();
    const dispatch = useAppDispatch();

    const resetComponentIndex = async () => {
        const team = (localStorage.getItem("team") as string)
        const code = (localStorage.getItem("code") as string)

        set(ref(db, code + "/" + team + indexUrl), 0);
        dispatch(setComponentIndex(0));
        dispatch(setGlobalSceneValid(false))
    }

    return resetComponentIndex
}

export const useIncAllComponentIndices = () => {
    const db = getDatabase();
    const globalScene = useAppSelector((state) => state.globalScene.value)
    const cpIndex = useAppSelector((state) => state.componentIndex.value)
    const dispatch = useAppDispatch()

    const incAllComponenentIndex = async () => {
        if (globalScene && cpIndex) {
            dispatch(setComponentIndex(cpIndex + 1))
        }

        // For component index, they must both match
        const idx1 = await getTeamIndex(db, team1, indexUrl)
        const scene1 = await getTeamScene(db, team1)
        const scene2 = await getTeamScene(db, team2)

        if (scene1 !== scene2) {
            console.log("Wait until both teams are ready")
        } else if (idx1 < getDialogue(team1).length - 1) {

            // TODO test multiple people pressing at same time?
            const code = (localStorage.getItem("code") as string)
            set(ref(db, code + "/" + team1 + indexUrl), idx1 + 1);
            set(ref(db, code + "/" + team2 + indexUrl), idx1 + 1);
        }
    }

    return incAllComponenentIndex;
}