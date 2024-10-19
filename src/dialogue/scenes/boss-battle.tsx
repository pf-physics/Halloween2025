import "../templates/dialogue.css";
import NormalDialogue from "../templates/normal-dialogue";
import { useIncIndex } from "../../hooks/indexHooks";
import { setFullScreen } from "../../store/miscSlice";
import { setAudio } from "../../store/audioSlice";
import bossFight from "../../assets/videos/test_video.mp4";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";

const BossRules = () => {
  const incIdx = useIncIndex();
  const dispatch = useAppDispatch();
  const index = useAppSelector((state) => state.index.value);
  const playerIdx = useAppSelector((state) => state.playerIndex.value);
  const [battleOver, setBattleOver] = useState(false);

  // const decIdx = useDecIndex()

  useEffect(() => {
    if (playerIdx && index && playerIdx < index) {
      setBattleOver(true);
    } else {
      dispatch(setFullScreen(true));
      dispatch(setAudio(undefined));
    }
  }, [playerIdx, index]);

  const handleNext = () => {
    incIdx();
    dispatch(setFullScreen(false));
  };

  if (battleOver) {
    return (
      <NormalDialogue text="The souls are free now... nothing left to fight" />
    );
  }

  return (
    <div>
      <video
        src={"https://storage.googleapis.com/halloween2024/test_video.mp4"}
        autoPlay={true}
        controls
        onEnded={handleNext}
        width="100%"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BossRules;
