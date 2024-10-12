import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button, Slide } from "@mui/material";
import { ref, onValue, getDatabase, set } from "firebase/database";
import { Fade } from "@mui/material";
import { setAudio, setLoop } from "../../store/audioSlice";
import {
  useIncAllIndices,
  useIncIndex,
  useDecIndex,
} from "../../hooks/indexHooks";

import bloodSFX from "../../assets/audio/death_bell.mp3";
import death from "../../assets/imgs/skeleton_hand.jpg";
import Dialogue from "../templates/dialogue";

const fullTime = 15 * 60000;

// TODO if playerIndex < index, then use a local component index
const TimerGame = ({ audio }: { audio?: any }) => {
  const incIdx = useIncIndex();
  const decIdx = useDecIndex();
  const playerIndex = useAppSelector((state) => state.playerIndex.value);
  const dispatch = useAppDispatch();
  const db = getDatabase();
  const [start, setStart] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>();
  const [deathTime, setDeathTime] = useState(false);
  const [treeTime, setTreeTime] = useState(false);
  const [continueTime, setContinueTime] = useState(false);
  const globalIncIdx = useIncAllIndices();
  const [alreadyDone, setAlreadyDone] = useState<Boolean | undefined>(
    undefined
  );

  const updateTimeLeft = () => {
    setTimeout(() => {
      if (!alreadyDone && timeLeft && timeLeft <= 0) {
        setDeathTime(true);
        setTimeout(() => {
          setTreeTime(true);
          dispatch(setLoop(false));
          dispatch(setAudio(bloodSFX));
        }, 400);

        setTimeout(() => {
          setContinueTime(true);
        }, 3000);
      } else {
        if (start > 0) {
          const time = fullTime + start - Date.now();
          setTimeLeft(time);
          if (alreadyDone === undefined) {
            if (time <= 0) {
              setAlreadyDone(true);
            } else {
              setAlreadyDone(false);
            }
          }
        }
      }
    }, 1000);
  };

  const getTime = async () => {
    const dbCode = localStorage.getItem("code") as string;
    const time = ref(db, dbCode + "/middleTimer");

    onValue(time, async (snapshot) => {
      const data = await snapshot.val();
      console.log(data);
      if (typeof data === "number") {
        if (data === 0) {
          const time = Date.now();
          setStart(time);
          set(ref(db, dbCode + "/middleTimer"), time);
        } else {
          setStart(data);
        }
      } else {
        set(ref(db, dbCode + "/middleTimer"), 0);
      }
    });
  };

  useEffect(() => {
    getTime();
  }, [playerIndex]);

  useEffect(() => {
    if (!continueTime) {
      dispatch(setLoop(true));
      dispatch(setAudio(audio));
    }
  }, [continueTime]);

  useEffect(() => {
    updateTimeLeft();
  }, [timeLeft, start]);

  const DisplayTime = () => {
    if (timeLeft && timeLeft > 0) {
      const minutes = Math.floor(timeLeft / 60000);
      const seconds = Math.floor((timeLeft % 60000) / 1000);

      return (
        <div>
          {minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </div>
      );
    }
    return <div></div>;
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
      {deathTime && (
        <Fade in timeout={{ enter: 1000, exit: 2000 }}>
          <div
            style={{
              position: "absolute",
              height: "100vh",
              zIndex: 10,
              marginTop: "-100px",
              width: "90%",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <div className="black-out" />
            {
              <Slide
                direction="down"
                in={treeTime}
                timeout={{ enter: 3000, exit: 2000 }}
              >
                <div
                  style={{
                    position: "absolute",
                    height: "200vh",
                    zIndex: 20,
                    marginTop: "-100px",
                    width: "90%",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <img className="tree-cover" src={death} />
                </div>
              </Slide>
            }
          </div>
        </Fade>
      )}
      {continueTime && (
        <Fade in={continueTime} timeout={{ enter: 1000, exit: 2000 }}>
          <div
            style={{
              zIndex: 30,
              position: "absolute",
              background: "black",
              padding: "20px",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          >
            <p>Are you ready to continue?</p>
            <Button color="primary" variant="contained" onClick={globalIncIdx}>
              Yes
            </Button>
          </div>
        </Fade>
      )}
      <DisplayTime />
      <Dialogue
        text={
          alreadyDone
            ? "Hold on! It's not break time! Get back to doing stuff!"
            : "Enjoy the break..."
        }
      />
      {alreadyDone && (
        <div className="buttons-row">
          <Button color="primary" variant="contained" onClick={handleBack}>
            Back
          </Button>
          <Button color="primary" variant="contained" onClick={handleNext}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default TimerGame;
