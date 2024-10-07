import "../templates/dialogue.css";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Dialogue from "../templates/dialogue";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";
import cauldronImg from "../../assets/imgs/cauldron.jpg";
import soupMusic from "../../assets/audio/chemist.mp3";
import { setAudio } from "../../store/audioSlice";
import { useAppDispatch } from "../../store/hooks";

const SoupGame = () => {
  const dispatch = useAppDispatch();
  const [ans, setAns] = useState("");
  const [warn, setWarn] = useState<string>();

  useEffect(() => {
    dispatch(setAudio(soupMusic));
  }, []);

  const incIdx = useIncIndex();
  const decIdx = useDecIndex();

  const handleNext = () => {
    incIdx();
  };

  const handleBack = () => {
    decIdx();
  };

  const exampleCode = "dfcba";

  const handleSubmit = () => {
    // DCDC - real code
    if (ans.toLocaleLowerCase() === "faedc") {
      console.log("yay");
      handleNext();
    } else {
      if (ans === exampleCode) {
        setWarn(
          "You really thought the answer would be the example I gave?! Take two penalties :/",
        );
      } else {
        setWarn("That's not right... everyone take a penalty");
      }
    }
  };

  return (
    <div>
      <Dialogue header={"TIME FOR SOUP"} text={[""]} image={cauldronImg} />
      <p>
        Every good party needs Witch's Brew! Look at the recipe on the table and
        try to match it to the potions on the table (do not write on the recipe)
      </p>
      <p>
        When you think you've solved the riddle, enter the number/letter of the
        potion in order in the input field. For example, {exampleCode}
      </p>
      {warn && <p className="warn">{warn}</p>}
      <input value={ans} onChange={(e) => setAns(e.target.value)} />
      <div className="buttons-row">
        <Button color="primary" variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          Submit Potion Recipe
        </Button>
      </div>
    </div>
  );
};

export default SoupGame;
