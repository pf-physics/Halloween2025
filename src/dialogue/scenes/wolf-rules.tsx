import "../templates/dialogue.css";
import React from "react";
import { Button } from "@mui/material";
import Dialogue from "../templates/dialogue";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";
import moonImage from "../../assets/imgs/moon.jpg";
import howl1 from "../../assets/imgs/howl1.png";
import howl2 from "../../assets/imgs/howl2.png";
import howl3 from "../../assets/imgs/howl3.png";

const WolfRules = () => {
  const incIdx = useIncIndex();
  const decIdx = useDecIndex();

  const handleNext = () => {
    incIdx();
  };

  const handleBack = () => {
    decIdx();
  };

  return (
    <div>
      <Dialogue
        header={"HOWL LIKE A WOLF"}
        text={[
          "Use the pitch app (download or use another member's phone) to use your voice to make the patterns shown below. Choose one of the patterns. You have three tries to make it.",
          "handicap: get only two tries",
        ]}
        image={moonImage}
      />
      <img className="howl" src={howl1} />
      <p>Regular Wolf Howl - 1 points</p>
      <img className="howl" src={howl2} />
      <p>Wobbly Wolf Howl - 3 points</p>
      <img className="howl" src={howl3} />
      <p>{"=) - 5 points"}</p>
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

export default WolfRules;
