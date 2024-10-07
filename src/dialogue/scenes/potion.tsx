import "../templates/dialogue.css";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Dialogue from "../templates/dialogue";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";
import candlesImg from "../../assets/imgs/candles.jpg";
import { teamAccess } from "../../constants";
import { Database, ref, get, getDatabase, set } from "firebase/database";

const potionUrl = "/potionScore";

const goodRecipe = [
  `Procure a big cauldron/receptacle`,
  `Pour in ½ cup of breath of death`,
  `Add 10 drops of spider venom`,
  `Wait 20 seconds then mix 3 times`,
  `Add 1 cup of liquid lightning`,
  `Add 1 tbsp of crystallized banshee tears`,
  `Mix 5 times`,
  `Add 3 spider webs`,
];

const mediumRecipe = [
  `Procure a big cauldron/receptacle`,
  `Pour in ½ cup of breath of death`,
  `Add 10 drops of spider venom`,
  `Wait 20 seconds then mix 3 times`,
  `Add ¼ cup of pumpkin juice`,
  `Add 1/2 cup of swamp water `,
  `Add 1 tbsp of crystallized banshee tears`,
  `Mix 5 times`,
];

const okayRecipe = [
  `Procure a big cauldron/receptacle`,
  `Pour in ½ cup of breath of death`,
  `Add 10 drops of spider venom`,
  `Wait 20 seconds then mix 3 times`,
  `Add ½ cup of liquid lightning`,
  `Add ½ cup of demon tears`,
  `Mix 5 times`,
  `Add 3 spider webs`,
];

const badRecipe = [
  `Procure a big cauldron/receptacle`,
  `Pour in ½ cup of breath of death`,
  `Add 10 drops of spider venom`,
  `Wait 20 seconds then mix 3 times`,
  `Add 1 cup of demon tears`,
  `Add 2 tbsp of squid ink`,
  `Add 1 tbsp of ground bone`,
  `Mix 5 times`,
];

const bonusPoints = [
  `For three extra points, you can add 1 cup of essence of nightmares (alcoholic). If not everyone wants essence of nightmare, select people can add a shot of essence of nightmares to their own drink. To get the points, everyone else on the team must take 5 penalties`,
];

const question1 = [
  "On Halloween, what did scottish women hang to see their future husbands?",
  "a. A blank canvas",
  "b. A bed sheet in front of a fire",
  "c. Mistletoe",
  "d. Lanterns",
  "b",
];

const question2 = [
  'Instead of "Trick-or-Treat", children in some parts of Mexico say this to ask for candy.',
  "a. Open up!",
  "b. I've scared away the mosnters!",
  "c. I'll cast a spell on you!",
  "d. Can you give me my little skull?",
  "d",
];

const question3 = [
  "What Monster is pictured on the flag of Sicily?",
  "a. The Lochness Monster",
  "b. Medusa",
  "c. Big Foot",
  "d. A minotaur",
  "b",
];

const question4 = [
  "Which story originated the Headless Horseman?",
  "a. The Raven",
  "b. Dracula",
  "c. The Legend of Sleepy Hollow",
  "d. The Tell-Tale Heart",
  "c",
];

const question5 = [
  "Which Jewish holiday, where people dress up in costume, is similar to Halloween?",
  "a. Tu Bshevat",
  "b. Simchat Torah",
  "c. Purim",
  "d. Suckot",
  "c",
];

const question6 = [
  '"Halloween" was orginally a contraction for...',
  "a. The Hallowed Event",
  "b. The Hallowed Entrance",
  "c. The Evening of Howls",
  "d. All Hallows' Evening",
  "d",
];

const question7 = [
  "What is the night before Halloween called in Cincinnati?",
  "a. Devil's Night",
  "b. Mischief Night",
  "c. Cabage Night",
  "d. Day of the Dead",
  "c",
];

const question8 = [
  "What is the Hindu holiday that is analogous to Halloween called?",
  "a. Pitru Paksha",
  "b. Mahemet",
  "c. Sigi Hama",
  "d. Hallomana",
  "a",
];

const question9 = [
  "What is the most popular Halloween costume of all time?",
  "a. Ghost",
  "b. Witch",
  "c. Skeleton",
  "d. Pumpkin",
  "b",
];

const question10 = [
  "Jack-o'-lanterns were originally named after this character in Irish mythology.",
  "a. Smiling Jack",
  "b. Simple Jack",
  "c. Stingy Jack",
  "d. Jack from Jack and the Beanstalk",
  "c",
];

const question11 = [
  "Though a popular image in movies and art, a full moon on Halloween only occurs roughly once every...",
  "a. 6 years",
  "b. 10 years",
  "c. 15 years",
  "d. 19 years",
  "d",
];

const question12 = [
  "Before pumpkins what was used to make jack-o'-lanterns?",
  "a. Human skulls",
  "b. Potatoes",
  "c. Hollowed Logs",
  "d. Apples",
  "b",
];

const question13 = [
  "If you are born on Halloween, what is your zodiac sign?",
  "a. Aquarius",
  "b. Scorpio",
  "c. Gemini",
  "d. Capricorn",
  "b",
];

const question14 = [
  "Instead of candy, what did Charlie Brown get while Trick-or-Treating?",
  "a. A sandwich",
  "b. A rock",
  "c. Nothing",
  "d. A penny",
  "b",
];

const question15 = [
  "What have children been known to wrap houses in as a typical Halloween prank?",
  "a. Paper towel",
  "b. Toilet paper",
  "c. Duct tape",
  "d. Yarn",
  "b",
];

const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
];

export const getTeamPotionScore = async (db: Database) => {
  const team = localStorage.getItem("team") as string;
  const dbCode = localStorage.getItem("code") as string;
  const q = ref(db, dbCode + "/" + teamAccess + "/" + team + potionUrl);

  const data = (await get(q)).val();

  if (typeof data === "number") {
    return data;
  } else {
    console.log("negative");
    return -1;
  }
};

export const setTeamPotionScore = async (db: Database, score: number) => {
  const dbCode = localStorage.getItem("code") as string;
  const team = localStorage.getItem("team") as string;

  set(ref(db, dbCode + "/" + teamAccess + "/" + team + potionUrl), score);
};

const PotionRules = () => {
  const incIdx = useIncIndex();
  const decIdx = useDecIndex();
  const [inp, setInp] = useState("");
  const [totalPoints, setTotalPoints] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [ready, setReady] = useState(false);
  const [potionRecipe, setPotionRecipe] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);

  const setRecipe = (pts: number) => {
    if (pts >= 12) {
      setPotionRecipe(goodRecipe);
    } else if (pts >= 8) {
      setPotionRecipe(mediumRecipe);
    } else if (pts >= 5) {
      setPotionRecipe(okayRecipe);
    } else {
      setPotionRecipe(badRecipe);
    }

    setTeamPotionScore(getDatabase(), pts);
    setDone(true);
  };

  useEffect(() => {
    getTeamPotionScore(getDatabase()).then((score) => {
      if (score > 0) {
        setTotalPoints(score);
        setQIdx(questions.length);
        setRecipe(score);
        setLoading(false);
      }
    });
  }, []);

  const submit = () => {
    if (!ready) {
      if (inp.toLowerCase() === "okay") {
        setReady(true);
        setTotalPoints(1);
      }
      setInp("");
      return;
    }

    const ans = inp.toLowerCase();
    if (!["a", "b", "c", "d"].includes(ans)) {
      setInp("");
      return;
    }
    var newTotal = totalPoints;
    var newIdx = qIdx + 1;
    if (ans === questions[qIdx][5]) {
      newTotal += 1;
      setTotalPoints(newTotal);
    }
    setQIdx(newIdx);

    if (newIdx >= questions.length) {
      setRecipe(newTotal);
    }
    setInp("");
  };

  const handleNext = () => {
    // TODO - add points from potion game to total points
    incIdx();
  };

  const handleBack = () => {
    decIdx();
  };

  return (
    <div>
      {loading ? (
        <Dialogue header={"Find the Potion Recipe"} text={[]} />
      ) : done ? (
        <Dialogue
          header={"Find the Potion Recipe"}
          text={potionRecipe.concat(bonusPoints)}
          image={candlesImg}
        />
      ) : !ready ? (
        <Dialogue
          header={"Find the Potion Recipe"}
          text={[
            `Answer the "Riddles" to receive the potion recipe. Write "Okay" when ready`,
          ]}
          image={candlesImg}
        />
      ) : (
        <Dialogue
          header={"Find the Potion Recipe"}
          text={questions[qIdx].slice(0, 5)}
          image={candlesImg}
        />
      )}
      {!done && !loading && (
        <input value={inp} onChange={(e) => setInp(e.target.value)} />
      )}
      {!done && !loading && (
        <div className="middle">
          <Button color="secondary" variant="contained" onClick={submit}>
            Submit
          </Button>
        </div>
      )}
      <div className="buttons-row">
        <Button color="primary" variant="contained" onClick={handleBack}>
          Back
        </Button>
        <Button
          color="primary"
          variant="contained"
          disabled={!done}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PotionRules;
