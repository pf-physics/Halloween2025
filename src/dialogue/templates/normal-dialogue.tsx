import "./dialogue.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button } from "@mui/material";
import Dialogue from "./dialogue";
import {
  useIncIndex,
  useDecIndex,
  useIncAllIndices,
  useJumpToCurrent,
} from "../../hooks/indexHooks";
import { setAudio } from "../../store/audioSlice";
import { useSetGlobalScene } from "../../hooks/common";

export type DialogueProps = {
  text: string | string[];
  image?: string;
  answers?: string[];
  audio?: any;
  isGlobal?: boolean;
  globalScene?: string;
  header?: string;
};

const NormalDialogue = ({
  text,
  image,
  answers = [],
  audio,
  isGlobal = true, // DEFAULT FOR HALLOWEEN 2024!
  globalScene,
  header,
}: DialogueProps) => {
  const index = useAppSelector((state) => state.index.value);
  const playerIndex = useAppSelector((state) => state.playerIndex.value);
  const incIdx = useIncIndex();
  const globalIncIdx = useIncAllIndices();
  const decIdx = useDecIndex();
  const jumpToCurrent = useJumpToCurrent();
  const ansRequired =
    playerIndex !== undefined &&
    index !== undefined &&
    !(playerIndex < index) &&
    answers.length > 0;
  const dispatch = useAppDispatch();
  const setGlobalScene = useSetGlobalScene();

  useEffect(() => {
    if (globalScene !== undefined) {
      setGlobalScene(globalScene);
    }
  }, [index]);

  useEffect(() => {
    if (audio !== undefined) {
      dispatch(setAudio(audio));
    }
  }, [playerIndex]);

  const [ans, setAns] = useState<string>("");

  const handleNext = () => {
    if (ansRequired) {
      if (answers.map((a) => a.toLowerCase()).includes(ans.toLowerCase())) {
        setAns("");
        isGlobal ? globalIncIdx() : incIdx();
      }
    } else {
      isGlobal ? globalIncIdx() : incIdx();
    }
  };

  const handleBack = () => {
    decIdx();
  };

  const handleReset = () => {
    jumpToCurrent();
  };

  return (
    <div>
      <Dialogue header={header} text={text} image={image} />
      {answers.length > 0 && ansRequired && (
        <input value={ans} onChange={(e) => setAns(e.target.value)} />
      )}
      <div className="buttons-row">
        <Button color="primary" variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={handleNext}>
          Next
        </Button>
      </div>
      <div className="reset-index-row">
        <Button color="primary" variant="contained" onClick={handleReset}>
          Jump to current
        </Button>
      </div>
    </div>
  );
};

export default NormalDialogue;
