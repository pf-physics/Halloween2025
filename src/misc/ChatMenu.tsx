import { useState } from "react";
import Dialogue from "../dialogue/templates/dialogue";
import { Button } from "@mui/material";

type DialogueOptions = { [key: string]: string[] };
const dialogueOptions: DialogueOptions = {
  "How long have you been dead?": [
    "Whaddaya mean dead? I was born a skeleton!",
  ],
  "What do gravekeepers do?": [
    "So many things",
    "Seriously",
    "Soooo many things!",
  ],
  "What's up?": ["Some bats, I reckon"],
};

const ChatMenu = ({ image }: { image?: string }) => {
  const [textKey, setTextKey] = useState<string | undefined>(undefined);
  const defaultText = "What d'ya wanna know?";
  const [idx, setIdx] = useState(0);

  const handleNext = () => {
    if (
      textKey &&
      dialogueOptions[textKey] &&
      idx < dialogueOptions[textKey].length - 1
    ) {
      setIdx((idx) => idx + 1);
    } else {
      setTextKey(undefined);
      setIdx(0);
    }
  };

  const handleBack = () => {
    if (idx > 0) {
      setIdx((idx) => idx - 1);
    }
  };

  return (
    <div>
      <Dialogue
        header={"Chat with Mortimer"}
        text={textKey ? dialogueOptions[textKey][idx] : defaultText}
        image={image}
      />
      {Object.keys(dialogueOptions).map((option) => (
        <Button key={option} onClick={() => setTextKey(option)}>
          {option}
        </Button>
      ))}
      <div className="buttons-row">
        <Button
          disabled={idx === 0}
          color="primary"
          variant="contained"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          disabled={!textKey}
          color="primary"
          variant="contained"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ChatMenu;
