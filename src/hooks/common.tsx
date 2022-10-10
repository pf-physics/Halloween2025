import { Database, ref, get, getDatabase, set } from "firebase/database";
import { StringDecoder } from "string_decoder";
import { setComponentIndex } from "../store/componentIndexSlice";


export const getTeamIndex = async (db: Database, team: string, indexUrl: string) => {
    const dbCode = (localStorage.getItem("code") as string)
    const q = ref(db, dbCode + "/" + team + indexUrl);

    // TODO get in the other file too!
    const data = (await get(q)).val()

    if (typeof(data) === "number") {
        return data;
      } else {
        console.log("error")
        return 0;
      }
}

export const getTeamScene = async (db: Database, team: string) => {
    const dbCode = (localStorage.getItem("code") as string)
    const q = ref(db, dbCode + "/" + team + "/globalScene");

    const data = (await get(q)).val()
    return data as string
}

export const useSetGlobalScene = () => {
    const db = getDatabase();

    const setGlobalScene = (scene: string) => {
        const team = (localStorage.getItem("team") as string)
        const code = (localStorage.getItem("code") as string)

        set(ref(db, code + "/" + team + "/globalScene"), scene);
    }

    return setGlobalScene
}