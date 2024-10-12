import "../templates/dialogue.css";
import { Button } from "@mui/material";
import Dialogue from "../templates/dialogue";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";
import symbol from "../../assets/imgs/symbol.png";

// draw on a leaf and crush it u[]

const RitualRules = () => {
  const incIdx = useIncIndex();
  const decIdx = useDecIndex();

  const handleNext = () => {
    incIdx();
  };

  const handleBack = () => {
    decIdx();
  };

  // TODO - write the ritual

  // Put up the summoning sheet on a vertical surface so the summoned can easily pass through

  return (
    <div>
      <Dialogue header={"THE RITUAL"} text={[]} />
      <div className="dialogue-text">
        <div className="regular-text">
          1. Using Any writing instruments (ie - a pen, brush) each participant
          must write the summoning symbol on a dead leaf
        </div>
        <img src={symbol} />
        <div className="regular-text">
          2. Crush the leaves into the ritual bowl
        </div>
        <div className="regular-text">
          3. Pour goat's blood on the leaves so they are covered
        </div>
        <div className="regular-text">
          4. Line the bones around inside the bowl so one end sticks out.
        </div>
        <div className="regular-text">
          5. Hang a summoning mat from the ceiling
        </div>
        <div className="regular-text">
          6. Place the ritual bowl under the mat
        </div>
        <div className="regular-text">
          7. Light incense. Wave the incense in a figure-8 motion in front of
          the the mat, and speak the words
        </div>
        <div className="ritual-text">
          omnes vulnerant, postuma necat omnes feriunt, ultima necat
        </div>
        <div className="regular-text">
          8. When ready to summon, ░░░░░░░░░░ the incense in the ░░░░
        </div>
      </div>
      <div className="buttons-row">
        <Button color="primary" variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default RitualRules;
