import { getDatabase, ref, onValue, set, get} from "firebase/database";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import dialogueList from "../dialogue/dialogue-list";
import { setIndex } from "../store/indexSlice";
import { setPlayerIndex } from "../store/playerIndexSlice";

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

// put teams in constants? just v
const team1 = "pumpkins"
const team2 = "skeletons"

export const useIncIndex = () => {
    const index = useAppSelector((state) => state.index.value)
    const playerIdx = useAppSelector((state) => state.playerIndex.value)

    const dispatch = useAppDispatch()
    const db = getDatabase();

    const incIndex = () => {
        const team = (localStorage.getItem("team") as string)
        const code = (localStorage.getItem("code") as string)

        if (playerIdx === undefined || index === undefined) {
            return
        }

        if (playerIdx < index) {
            dispatch(setPlayerIndex(playerIdx+1))
        } else if (index !== undefined && index < dialogueList.length-1) {
            set(ref(db, code + "/" + team + "/index"), index+1);
            dispatch(setIndex(index+1))
            dispatch(setPlayerIndex(index+1))
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
            dispatch(setPlayerIndex(playerIdx-1))
        }
    }

    return decIndex;
}

export const useIncAllIndices = () => {
    const index = useAppSelector((state) => state.index.value)
    const playerIdx = useAppSelector((state) => state.playerIndex.value)
    const dispatch = useAppDispatch()
    const db = getDatabase();

    const getTeamIndex = async (team: string) => {
        const dbCode = (localStorage.getItem("code") as string)
        const q = ref(db, dbCode + "/" + team + "/index");
        var vIdx = 0;

        onValue(q, async (snapshot) => {
          const data = await snapshot.val();
          if (typeof(data) === "number") {
            vIdx =  data;
          } else {
            console.log("error")
          }
        });
        return vIdx;
    }

    // TODO hardcoded teams
    const incIndices = (newIndex: number) => {
        const code = (localStorage.getItem("code") as string)
        set(ref(db, code + "/" + "pumpkins" + "/index"), newIndex);
        set(ref(db, code + "/" + "skeletons" + "/index"), newIndex);
    }

    const incGlobalIndex = async () => {
        // TODO hardcoded teams
        const idx1 = await getTeamIndex("pumpkins")
        const idx2 = await getTeamIndex("skeletons")

        if (playerIdx === undefined || index === undefined) {
            return;
        }

        if (playerIdx < index) {
            dispatch(setPlayerIndex(playerIdx+1))
        }

        if (idx1 !== idx2) {
            console.log("Indices do not match")
        } else if (idx1 < dialogueList.length-1) {
            // TODO test multiple people pressing at same time?
            incIndices(idx1+1)
        }
    }

    return incGlobalIndex;
}