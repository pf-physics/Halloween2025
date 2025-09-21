import "./code-handler.css";
import { useEffect, useState } from "react";
// firebase subscribe to value done here
import { getDatabase, ref, onValue, get } from "firebase/database";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setIndex } from "../store/indexSlice";
import { Button, CircularProgress } from "@mui/material";
import getDialogue from "../dialogue/dialogue-list";
import {
  initializePlayerIndex,
  setPlayerIndex,
} from "../store/playerIndexSlice";
import { localCode, localIndex, teamAccess } from "../constants"; //LOCAL TODO this probably shouldn't be a constant, should be in the DB? (If local mode is enabled)
import AudioControl from "../dialogue/audio-control";
import { useInitComponentIdx } from "../hooks/componentIndexHooks";
import { setTeams } from "../store/teamSlice";
import { defaultTeam } from "../constants";

// https://firebase.google.com/docs/database/web/read-and-write
// https://firebase.google.com/docs/app-check/web/recaptcha-provider

// This component should wrap the rest of the app
const CodeHandler = () => {
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("");
  const team = defaultTeam;
  const playerIndex = useAppSelector((state) => state.playerIndex.value);
  const dispatch = useAppDispatch();
  const [codeValid, setCodeValid] = useState(false);
  const db = getDatabase();
  const [err, setErr] = useState("");
  const [tries, setTries] = useState(0);
  // const [teams, updateTeams] = useState<string[]>([])
  const initComponentIdx = useInitComponentIdx();

  useEffect(() => {
    if (codeValid && team) {
      initComponentIdx();
    }
  }, [team, code]);

  const trySetCode = async (code: string) => {
    setLoading(true);
    const res = (await get(ref(db, code))).val();

    if (res) {
      setCode(code);
      setCodeValid(true);
      const team = localStorage.getItem("team");
      const teamsObj = (await get(ref(db, code + "/" + teamAccess))).val();
      const teamList = Object.keys(teamsObj);
      dispatch(setTeams(teamList));

      getData();
    }
    if (code === localCode) {
      setCode(code);
      setCodeValid(true);
      getData();
    } else {
      // code invalid err
      setLoading(false);
      return false;
    }
  };

  // on load of page
  useEffect(() => {
    const key = localStorage.getItem("code") as string;

    // No key so don't need to show loading while checking the code
    if (!key) {
      setLoading(false);
    } else {
      trySetCode(key);
    }
  }, []);

  // When the code is input, then the query is made with the access code + team name to find the index the player should be at
  const getData = async () => {
    const dbCode = localStorage.getItem("code") as string;
    const localIdx = localStorage.getItem(localIndex) as string;

    if (dbCode === localCode) {
      const idx = parseInt(localIdx) || 0;
      dispatch(setIndex(idx));
      dispatch(setPlayerIndex(idx));
      setLoading(false);
      return;
    }

    const q = ref(db, dbCode + "/" + teamAccess + "/" + team + "/index");

    onValue(q, async (snapshot) => {
      setLoading(false);
      const data = await snapshot.val();
      if (typeof data === "number") {
        const autoSync = localStorage.getItem("autoSync") === "true";
        dispatch(setIndex(data));

        if (autoSync) {
          dispatch(setPlayerIndex(data));
        } else if (!playerIndex) {
          dispatch(initializePlayerIndex(data));
        }
      } else {
        console.log("There was an error fetching the code");
      }
      setLoading(false);
    });
  };

  const EnterCode = () => {
    const [inputCode, setInputCode] = useState("");
    const jokeCode = "goose";
    const jokeCode2 = "wenis";

    const submitCode = () => {
      if (inputCode.length === 0) {
        return;
      }

      setErr("");
      if (inputCode.toLocaleLowerCase() === "halloween") {
        setTries(tries + 1);
        setErr("nice try, but no");
        return;
      } else if (inputCode.toLocaleLowerCase() === jokeCode) {
        setErr("honk");
        return;
      } else if (inputCode.toLocaleLowerCase() === jokeCode2) {
        setErr("Nice try. It will now be confiscated.");
        return;
      }
      setTries(tries + 1);
      if (tries > 6) {
        setErr("🎃");
      } else if (tries > 5) {
        setErr("Try the code " + jokeCode);
      } else if (tries > 2) {
        setErr("stop trying to hack the app :/");
      }

      localStorage.setItem("code", inputCode);
      trySetCode(inputCode);
    };

    const chooseLocal = () => {
      localStorage.setItem("code", localCode);
      setCode(localCode);
      setCodeValid(true);
      getData(); // TODO - I'm calling this a lot of places
    };

    return (
      <div className="code-input">
        <div className="title">Enter code</div>
        <input
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
        />
        <Button
          className="button"
          color="primary"
          variant="contained"
          onClick={submitCode}
        >
          <b>Submit Code</b>
        </Button>
        OR
        <Button
          className="button"
          style={{ background: "#2a2a2a" }}
          color="secondary"
          variant="contained"
          //disabled TODO DCDCDC
          onClick={chooseLocal}
        >
          <b>Play local version (alone)</b>
        </Button>
        <div className="error">{err}</div>
      </div>
    );
  };

  const DisplayApp = () => {
    const dialogueList = getDialogue(team);

    if (playerIndex !== undefined && playerIndex < dialogueList.length) {
      return dialogueList[playerIndex];
    } else {
      return dialogueList[dialogueList.length - 1];
    }
  };

  return (
    <div>
      {loading ? (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      ) : codeValid ? (
        <div>
          <>{DisplayApp()}</>
          <AudioControl />
        </div>
      ) : (
        <EnterCode />
      )}
    </div>
  );
};

export default CodeHandler;
