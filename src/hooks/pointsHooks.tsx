import { getDatabase, onValue, ref } from "firebase/database";
import { useAppDispatch } from "../store/hooks";
import { setPoints } from "../store/pointsSlice";
import { addTeamScore, pointsUrl, pointsLog } from "./common";
import { teamAccess } from "../constants";

// TODO - include history
export const useIncPoints = () => {
  const dispatch = useAppDispatch();
  const db = getDatabase();

  const incPoints = async (pts: number, reason: string) => {
    const team = localStorage.getItem("team") as string;
    const newPoints = await addTeamScore(db, team, pts, reason);

    dispatch(setPoints(newPoints));
  };

  return incPoints;
};

export const useGetPoints = () => {
  const dispatch = useAppDispatch();
  const db = getDatabase();
  const team = localStorage.getItem("team") as string;
  const dbCode = localStorage.getItem("code") as string;

  const allPointsQ = ref(
    db,
    dbCode + "/" + teamAccess + "/" + team + pointsLog
  );

  onValue(allPointsQ, (snapshot) => {
    const data = snapshot.val();
    if (typeof data === "object") {
      const keys = Object.keys(data);
      // sum all the points
      const sum = keys.reduce((acc, key) => {
        return acc + data[key];
      }, 0);
      dispatch(setPoints(sum));
    }
  });

  /*
  const q = ref(db, dbCode + "/" + teamAccess + "/" + team + pointsUrl);
  onValue(q, (snapshot) => {
    const data = snapshot.val();
    dispatch(setPoints(data));
  });
  */
};
