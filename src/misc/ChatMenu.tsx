import { useState } from "react";
import Dialogue from "../dialogue/templates/dialogue";
import { Button, List, ListItem } from "@mui/material";
import { graveDiggerImg } from "../dialogue/dialogue-list";

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
  "Where do you sleep?": [
    "I dig myself up a new grave every night.",
    "Not a fan of coffins, myself. I prefer the nice soft dirt.",
  ],
  "Why are you trying to attract lost souls?": ["idk"],
  "What do lost souls do to help?": ["idk"],
  "What are lost souls?": ["idk"],
  "What do lost souls gain by helping?": ["idk"],
};

const ChatMenu = () => {
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
    // code for dark purple background: background: '#3f51b5'
    <div>
      <Dialogue
        header={"Chat with Mortimer"}
        text={textKey ? dialogueOptions[textKey][idx] : defaultText}
        image={graveDiggerImg}
      />
      {!textKey && (
        <div>
          {Object.keys(dialogueOptions).map((option) => (
            <div>
              <Button key={option} onClick={() => setTextKey(option)}>
                {option}
              </Button>
              <div />
            </div>
          ))}
        </div>
      )}
      {textKey && (
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
      )}
    </div>
  );
};

export default ChatMenu;
