import "./code-handler.css"
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set, get} from "firebase/database";
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setIndex } from '../store/indexSlice';
import { Button, CircularProgress, TextField } from '@mui/material';
import pumpkin from "../assets/imgs/pumpkin.png"
import pumpkinHead from "../assets/imgs/pumpkin_head.png"
import skeleton from "../assets/imgs/skeleton.png"
import Dialogue from "../dialogue/templates/dialogue";
import dialogueList from "../dialogue/dialogue-list";
import { setPlayerIndex } from "../store/playerIndexSlice";

// https://firebase.google.com/docs/database/web/read-and-write
// https://firebase.google.com/docs/app-check/web/recaptcha-provider

type pumpkins = "pumpkins"
type skeletons = "skeletons"

// This component should wrap the rest of the app
const CodeHandler = () => {
    const [loading, setLoading] = useState(true)
    const [code, setCode] = useState("") // need to store also? yes. and team
    const [team, setTeam] = useState<pumpkins | skeletons | undefined>()
    const index = useAppSelector((state) => state.index.value)
    const playerIndex = useAppSelector((state) => state.playerIndex.value)
    const dispatch = useAppDispatch()
    const [codeValid, setCodeValid] = useState(false)
    const db = getDatabase();
    const [err, setErr] = useState("")
    const [tries, setTries] = useState(0)

    const chooseTeam = (team: skeletons | pumpkins) => {
        localStorage.setItem("team", team)
        setTeam(team)
        getData()
    }

    const trySetCode = async (code: string) => {
        setLoading(true)
        const res = (await get(ref(db, code))).val()

        if (res) {
            setCode(code)
            setCodeValid(true)
            const team = localStorage.getItem("team")

            // TODO hardcoded
            if (team === "pumpkins" || team === "skeletons") {
                setTeam(team)

                getData()
            } else {
                setLoading(false)
            }
        } else {
            // code invalid err
            setLoading(false)
            return false
        }
    }

    useEffect(() => {
        const key = (localStorage.getItem("code") as string)
        if (!key) {
            setLoading(false)
        } else {
            trySetCode(key)
        }
    },[])

    const getData = async () => {
        const team = (localStorage.getItem("team") as string)
        const dbCode = (localStorage.getItem("code") as string)
        const q = ref(db, dbCode + "/" + team + "/index");

        onValue(q, async (snapshot) => {
          setLoading(false)
          const data = await snapshot.val();
          if (typeof(data) === "number") {
            dispatch(setIndex(data))
            dispatch(setPlayerIndex(data))
          } else {
            // error
          }
          setLoading(false)
        });
    }

    const TeamChoice = () => {
        return <div>
            <div className="title">Choose your team</div>
            <div className="team-choice">
            <img style={{cursor: "pointer"}} src={pumpkin} onClick={() => chooseTeam("pumpkins")}/>
            <img style={{width: "100px", height: "100px", cursor: "pointer"}} src={skeleton} onClick={() => chooseTeam("skeletons")}/>
        </div>
        </div>
    }

    const ugleCode = () => {
        return <TextField
        sx={{"& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: "lime"
              }
            },
            "& .MuiOutlinedInput-root": {
                "& > fieldset": {
          borderColor: "lime"
                }
              }
          }}
    />
    }

    const EnterCode = () => {
        const [inputCode, setInputCode] = useState("")
        const jokeCode = "goose"

        const submitCode = () => {
            if (inputCode.length === 0) {
                return
            }

            setErr("")
            if (inputCode.toLocaleLowerCase() === "halloween") {
                setTries(tries+1)
                setErr("nice try, but no")
                return
            } else if(inputCode.toLocaleLowerCase() === jokeCode) {
                setErr("honk")
                return
            }
            setTries(tries+1)
            if (tries > 6) {
                setErr("🎃")
            } else if (tries > 5) {
                setErr("Try the code " + jokeCode)
            } else if (tries > 2) {
                setErr("stop trying to hack the app :/")
            }

            localStorage.setItem("code", inputCode)
            trySetCode(inputCode)
        }
    
        return <div className="code-input">
            <div className="title">Enter code</div>
            <input value={inputCode}
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
            <div className="error">{err}</div>
        </div>
    }

    const DisplayApp = () => {
        if (playerIndex !== undefined && playerIndex < dialogueList.length) {
            return dialogueList[playerIndex]
        } else {
            return dialogueList[dialogueList.length - 1]
        }
    }

    return <div>
        {loading ? 
        <div className='loading'>
            <CircularProgress color='primary'/>
        </div>
         : codeValid ? team ? DisplayApp()
         : <TeamChoice/>
         : <EnterCode/>}
    </div>
}

export default CodeHandler;
