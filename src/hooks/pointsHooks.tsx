import { getDatabase, onValue, ref } from "firebase/database";
import { useAppDispatch } from "../store/hooks";
import { setPoints } from "../store/pointsSlice";
import { addTeamScore } from "./common";
import { teamAccess } from "../constants";

const pointsUrl = "/points";

// TODO - include history
export const useIncPoints = () => {
  const dispatch = useAppDispatch();
  const db = getDatabase();

  const incPoints = async (pts: number) => {
    const team = localStorage.getItem("team") as string;
    const newPoints = await addTeamScore(db, team, pts);

    dispatch(setPoints(newPoints));
  };

  return incPoints;
};

export const useGetPoints = () => {
  const dispatch = useAppDispatch();
  const db = getDatabase();
  const team = localStorage.getItem("team") as string;
  const dbCode = localStorage.getItem("code") as string;
  const q = ref(db, dbCode + "/" + teamAccess + "/" + team + pointsUrl);

  onValue(q, (snapshot) => {
    const data = snapshot.val();
    dispatch(setPoints(data));
  });
};
