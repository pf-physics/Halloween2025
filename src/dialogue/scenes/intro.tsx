import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Button } from '@mui/material';
import Dialogue from "../templates/dialogue";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";
import door from "../../assets/imgs/black_door.png"
import music from "../../assets/audio/intro1.mp3"
import knock from "../../assets/audio/knock.wav"
import openSound from "../../assets/audio/door_open.mp3"
import { useIncComponentIndex } from "../../hooks/componentIndexHooks";
import { ref, onValue, getDatabase } from 'firebase/database';
import { setPlayerIndex } from '../../store/playerIndexSlice';
import { Fade } from '@mui/material';
import { setAudio, setLoop } from "../../store/audioSlice";

const dialogue =
    [ {text: "Welcome to Halloween 2022! When everyone is ready, press next"}
    , {text: "This year's Halloween party is all about remembering what Halloween is really about."}
    , {nextLocked: true, doorTime: true, text: "Halloween originated with the Celtic Festival of Samhain. The Celts belief was that the dead returned to earth on Samhain, October 31st. On this night, people gathered to light bonfires, offer sacrifices and pay homage to the dead."}
    , {text: "", doorOpen: true, nextLocked: true}
    ];


// TODO if player index < index, then use a local component index
const Intro = ({}: {}) => {
    const appIndex = useAppSelector((state) => state.index.value)
    const playerIndex = useAppSelector((state) => state.playerIndex.value)
    const [index, setIndex] = useState(0)
    const db = getDatabase();
    const el = dialogue[index]
    const [opening, setOpening] = useState(false)
    const [open, setOpen] = useState(false)
    const [doorTime, setDoorTime] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setAudio(music))
    }, [])

    useEffect(() => {
        if (el.doorTime) {
            setTimeout(() => setDoorTime(true), 4000)
            setTimeout(() => setAudio(knock), 6000)
        }
        if (el.doorOpen) {
            dispatch(setAudio(openSound))
            setTimeout(() => setOpen(true), 1000)
        }
    }, [el])

    // if playerIndex < appIndex, set index = 0

    const getComponentIndex = async () => {
        const team = (localStorage.getItem("team") as string)
        const dbCode = (localStorage.getItem("code") as string)
        const q = ref(db, dbCode + "/" + team + "/componentIndex");

        onValue(q, async (snapshot) => {
          const data = await snapshot.val();
          if (typeof(data) === "number") {
            setIndex(data)
          } else {
            console.log("There was an error fetching the component code")
          }
        });
    }

    useEffect(() => {
        // kind of works but kind of doesn't
        if (appIndex && playerIndex && playerIndex < appIndex) {
            //return
        }

        getComponentIndex()

    }, [])

    const incIdx = useIncComponentIndex()
    const incAppIndex = useIncIndex()
    const decIdx = useDecIndex()
    const answers: string[] = []
    const ansRequired = false

    // timer, get timer - if = 0, then set to user's time, else return the value

    const [ans, setAns] = useState<string>("")

    const handleNext = async () => {

        if (el.nextLocked || el.doorOpen) {
            return
        }

        // always returns up to date and incs by one, can handle this later
        if (appIndex && playerIndex && playerIndex < appIndex) {
            // setIndex(index+1)
            // return
        }

        if (index >= dialogue.length - 1) {
            incAppIndex()
            return
        }

        if (ansRequired) {
            if (answers.map(a => a.toLowerCase()).includes(ans.toLowerCase())) {
                setAns("")
                incIdx();
            }
        } else {
            incIdx();
        }

    }

    const handleBack = async () => {
        if (index === 0) {
            decIdx();
        } else {
            setIndex(index-1)
        }
    }

    const handleOpenDoor = () => {
        if (!opening) {
            setOpening(true)
            incIdx()
            setTimeout(incAppIndex, 4000)
        }
    }

    return <div>
        {doorTime && <Fade in={!open} timeout={{enter: 2000, exit: 2000}}>
        <div style={{position: 'absolute', height: "100vh", zIndex: 10, marginTop: "-100px", width: "90%", justifyContent: "center", display: "flex"}}
        onClick={handleOpenDoor}
        >
         <img src={door} style={{height: "100%", width: "100vw", objectFit: "cover", objectPosition: "top"}} />
         </div>
         </Fade>}
        {!open && <Dialogue text={el.text} image={""}/>}
        {answers.length > 0 && ansRequired && <input value={ans} onChange={(e) => setAns(e.target.value)}/>}
        {!open && <div className="buttons-row">
            <Button
                color="primary"
                variant="contained"
                onClick={handleBack}>
                Back
            </Button>
            <Button
                color="primary"
                variant="contained"
                onClick={handleNext}>
                Next
            </Button>
        </div>}
    </div>
}

export default Intro