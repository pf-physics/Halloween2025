import "../templates/dialogue.css";
import { Button } from "@mui/material";
import Dialogue from "../templates/dialogue";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";

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
