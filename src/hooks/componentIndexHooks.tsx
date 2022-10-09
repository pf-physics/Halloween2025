import { getDatabase, ref, onValue, set, get, Database} from "firebase/database";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import dialogueList from "../dialogue/dialogue-list";
import { setIndex } from "../store/indexSlice";
import { setPlayerIndex } from "../store/playerIndexSlice";
import { team1, team2 } from "../constants";

const indexUrl = "/componentIndex"

const getTeamIndex = async (db: Database, team: string) => {
    const dbCode = (localStorage.getItem("code") as string)
    const q = ref(db, dbCode + "/" + team + indexUrl);

    // TODO get in the other file too! (make this common...)
    const data = (await get(q)).val()

    if (typeof(data) === "number") {
        return data;
      } else {
        console.log("error")
        return 0;
      }
}


// DOES NOT WORK
// Either make component slice, or handle in component itself
const useGetComponentIdx = () => {
    const team = (localStorage.getItem("team") as string);
    const db = getDatabase();

    return getTeamIndex(db, team)
}

export const useIncComponentIndex = () => {
    const team = (localStorage.getItem("team") as string);
    const db = getDatabase();

    const incComponentIndex = async () => {
        const team = (localStorage.getItem("team") as string)
        const code = (localStorage.getItem("code") as string)
        const componentIndex = getTeamIndex(db, team)

        componentIndex.then(i => set(ref(db, code + "/" + team + indexUrl), i + 1))
    }

    return incComponentIndex

}

export const useResetComponentIdx = () => {
    const db = getDatabase();

    const resetComponentIndex = async () => {
        const team = (localStorage.getItem("team") as string)
        const code = (localStorage.getItem("code") as string)

        set(ref(db, code + "/" + team + indexUrl), 0);
    }

    return resetComponentIndex
}

// might not need
export const resetAllComponentIndices = () => {
    
}

export const useIncAllComponentIndices = () => {
    const index = useAppSelector((state) => state.index.value)
    const playerIdx = useAppSelector((state) => state.playerIndex.value)
    const dispatch = useAppDispatch()
    const db = getDatabase();

    const incIndices = (newIndex: number) => {
        const code = (localStorage.getItem("code") as string)
        set(ref(db, code + "/" + team1 + indexUrl), newIndex);
        set(ref(db, code + "/" + team2 + indexUrl), newIndex);
    }

    const incGlobalIndex = async () => {
        const idx1 = await getTeamIndex(db, team1)
        const idx2 = await getTeamIndex(db, team2)

        if (playerIdx === undefined || index === undefined) {
            return;
        }

        if (playerIdx < index) {
            dispatch(setPlayerIndex(playerIdx+1))
        }

        // TODO this is wrong
        if (idx1 !== idx2) {
            console.log("Indices do not match")
        } else if (idx1 < dialogueList.length-1) {
            // TODO test multiple people pressing at same time?
            incIndices(idx1+1)
        }
    }

    return incGlobalIndex;
}