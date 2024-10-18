import { Database, ref, get, getDatabase, set } from "firebase/database";
import { StringDecoder } from "string_decoder";
import { teamAccess } from "../constants";
import { setComponentIndex } from "../store/componentIndexSlice";

const pointsUrl = "/points";
const pointsLog = "/pointslog";

export const getTeamIndex = async (
  db: Database,
  team: string,
  indexUrl: string
) => {
  const dbCode = localStorage.getItem("code") as string;
  const q = ref(db, dbCode + "/" + teamAccess + "/" + team + indexUrl);

  // TODO get in the other file too!
  const data = (await get(q)).val();

  if (typeof data === "number") {
    return data;
  } else {
    console.log("error");
    return 0;
  }
};

export const getTeamScore = async (db: Database, team: string) => {
  const dbCode = localStorage.getItem("code") as string;
  const q = ref(db, dbCode + "/" + teamAccess + "/" + team + pointsUrl);

  // TODO get in the other file too!
  const data = (await get(q)).val();

  if (typeof data === "number") {
    return data;
  } else {
    console.log("error");
    return 0;
  }
};

export const addTeamScore = async (
  db: Database,
  team: string,
  points: number
  //reason: string
) => {
  const dbCode = localStorage.getItem("code") as string;
  const q = ref(db, dbCode + "/" + teamAccess + "/" + team + pointsUrl);
  const allPointsQ = ref(
    db,
    dbCode + "/" + teamAccess + "/" + team + pointsLog
  );

  get(q).then((currentPoints) => {
    set(
      ref(db, dbCode + "/" + teamAccess + "/" + team + pointsUrl),
      currentPoints.val() + points
    );
    set(
      ref(
        db,
        dbCode + "/" + teamAccess + "/" + team + pointsLog + "/" // + reason
      ),
      points
    );
  });

  // Update then check data
  const data = (await get(q)).val();

  const allPoints = (await get(allPointsQ)).val();
  console.log(allPoints);

  if (typeof data === "number") {
    return data;
  } else {
    console.log("error");
    return 0;
  }
};

export const getTeamScene = async (db: Database, team: string) => {
  const dbCode = localStorage.getItem("code") as string;
  const q = ref(db, dbCode + "/" + teamAccess + "/" + team + "/globalScene");

  const data = (await get(q)).val();
  return data as string;
};

export const useSetGlobalScene = () => {
  const db = getDatabase();

  const setGlobalScene = (scene: string) => {
    const team = localStorage.getItem("team") as string;
    const code = localStorage.getItem("code") as string;

    set(ref(db, code + "/" + teamAccess + "/" + team + "/globalScene"), scene);
  };

  return setGlobalScene;
};
