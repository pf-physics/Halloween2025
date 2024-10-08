import { useState } from "react";
import Dialogue from "../dialogue/templates/dialogue";
import { Button } from "@mui/material";
import { graveDiggerImg } from "../dialogue/dialogue-list";

type DialogueOptions = { [key: string]: string[] };
const dialogueOptions: DialogueOptions = {
  "How long have you been dead?": [
    "Whaddaya mean dead? I was born a skeleton!",
  ],
  "What do gravekeepers do?": [
    "Diggin' lots of graves, keepin' things clean, listenin' to the resident's complaints,",
    "Cursin' humans who vandalize",
    "We keep busy.",
  ],
  "What's up?": ["Some bats, I reckon"],
  "Where do you sleep?": [
    "I dig myself up a new grave every night.",
    "Not a fan of coffins, myself. I prefer the nice soft dirt.",
  ],
  "Why are you trying to attract lost souls?": [
    "Lost souls need a place to rest every now an' then. We do our best to keep the place nice and welcoming.",
    "When they're here, they help us out with the upkeep of the graveyard.",
    "Then on Halloween, we throw em a party to thank em' for all they've done, and to showcase our graveyard to new lost souls.",
    "Well, we're in charge of settin' up, but it's a party for the whole graveyard.",
  ],
  "What do lost souls do to help?": [
    "Lost souls help with the upkeep of the graveyard.",
    "The regulars often bring me supplies from the outside, seein' as none of us can leave.",
    "The residents also like to hear their stories of the ouside world. There's only so much we can eavesdrop from the living.",
    "If we're ever really in a bind, we can call on em' for a bit of help.",
  ],
  "What are lost souls?": [
    "Lost souls are souls that ain't tethered.",
    "Most souls are tethered to their body, or home, or an object. They got some poltergeist powers near their tether.",
    "Without a tether, lost souls are polergeists everywhere, and are free to wander the earth.",
    "These souls are free, but they got no home. Without a home, it's easy to lose yourself.",
  ],
  "What do lost souls gain by helping?": [
    "We give em' a place to rest, when they're tired, or if it's a new moon.",
    "With no tether, lost souls can forget emselves. If they been alone for too long, or if they're alone on a new moon, they lose emselves fully, and become corrupted souls.",
    "Corrupted souls have forgotten who they are, and wander the earth to find themselves. They absorb other lost souls to borrow their sense of self, but it gets more and more diluted with each soul.",
    "These things're dangerous. They can even split off into lil souls that obey the main body. Like zombies, but ghosts.",
    "I gotta be careful not to let any of those in. If it absorbs 1000 souls, it becomes strong enough to absorb souls right outta humans.",
  ],
  "Does everyone become a ghost when they die?": [
    "Some do. Some don't.",
    "Sometimes ghosts disappear from the graveyard. I dunno where they go, but the residents always seem happy for em.",
  ],
  "Can I live here when I die?": [
    "I like you getting yer affairs in order well ahead of time.",
    "I'll be sure to get you some nice soft dirt.",
  ],
  "Do you ever run out of space for graves?": [
    "Space expands with the graveyard.",
    "You ever get lost in a graveyard? It can go on forever if it needs to.",
  ],
  "Trick or treat!": [
    "Diggin' in the dirt all day, all I got are jawbreakers.",
  ],
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
              <Button
                style={{ textAlign: "justify" }}
                key={option}
                onClick={() => setTextKey(option)}
              >
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
