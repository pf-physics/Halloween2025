import { Database, ref, get, getDatabase, set } from "firebase/database";
import { StringDecoder } from "string_decoder";
import { teamAccess } from "../constants";
import { setComponentIndex } from "../store/componentIndexSlice";

const pointsUrl = "/points"

export const getTeamIndex = async (db: Database, team: string, indexUrl: string) => {
    const dbCode = (localStorage.getItem("code") as string)
    const q = ref(db, dbCode + "/" + teamAccess + "/" + team + indexUrl);

    // TODO get in the other file too!
    const data = (await get(q)).val()

    if (typeof(data) === "number") {
        return data;
      } else {
        console.log("error")
        return 0;
      }
}

export const getTeamScore = async (db: Database, team: string) => {
    const dbCode = (localStorage.getItem("code") as string)
    const q = ref(db, dbCode + "/" + teamAccess + "/" + team + pointsUrl);

    // TODO get in the other file too!
    const data = (await get(q)).val()

    if (typeof(data) === "number") {
        return data;
      } else {
        console.log("error")
        return 0;
      }
}

// TODO - add history and names
export const addTeamScore = async (db: Database, team: string, points: number) => {
    const dbCode = (localStorage.getItem("code") as string)
    const q = ref(db, dbCode + "/" + teamAccess + "/" + team + pointsUrl);

    get(q).then((currentPoints) => {
        set(ref(db, dbCode + "/" + teamAccess + "/" + team + pointsUrl), currentPoints.val() + points);
    })

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
    const q = ref(db, dbCode + "/" + teamAccess + "/" + team + "/globalScene");

    console.log(dbCode + "/" + team + "/globalScene")

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