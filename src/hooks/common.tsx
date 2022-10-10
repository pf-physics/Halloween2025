import { Database, ref, get } from "firebase/database";


export const getTeamIndex = async (db: Database, team: string, indexUrl: string) => {
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