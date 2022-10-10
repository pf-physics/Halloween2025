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
import { useSetGlobalScene } from '../../hooks/common';

const dialogue =
    [ {text: "When everyone is ready, press next"}
    , {text: "This year's Halloween party is all about remembering what Halloween is really about."}
    , {nextLocked: true, doorTime: true, text: "Halloween originated with the Celtic Festival of Samhain. The Celts belief was that the dead returned to earth on Samhain, October 31st. On this night, people gathered to light bonfires, offer sacrifices and pay homage to the dead."}
    , {text: "", doorOpen: true, nextLocked: true}
    ];

// TODO if playerIndex < index, then use a local component index
const Intro = ({}: {}) => {
    const componentIndex = useAppSelector((state) => state.componentIndex.value)
    const dispatch = useAppDispatch()
    const [playerComponentIndex, setPlayerComponentIndex] = useState(componentIndex)
    const [el, setEl] = useState(dialogue[playerComponentIndex])
    const [doorTime, setDoorTime] = useState(false)
    const [opening, setOpening] = useState(false)
    const [open, setOpen] = useState(false)
    const setGlobalScene = useSetGlobalScene();

    useEffect(() => {
        setGlobalScene("intro")
    },[])

    useEffect(() => {
        if (componentIndex === 1) {
            dispatch(setAudio(music))
        }
        if (el.doorTime) {
            setTimeout(() => setDoorTime(true), 4000)
            setTimeout(() => dispatch(setAudio(undefined)), 4000)
            setTimeout(() => dispatch(setAudio(knock)), 6000)
        }
        if (el.doorOpen) {
            dispatch(setAudio(openSound))
            setTimeout(() => setOpen(true), 1000)
        }
    }, [el])

    // if playerIndex < appIndex, set index = 0

    useEffect(() => {
        if (componentIndex-1 === playerComponentIndex) {
            setPlayerComponentIndex(componentIndex)
        }
    }, [componentIndex])

    useEffect(() => {
        setEl(dialogue[playerComponentIndex])
    }, [playerComponentIndex])

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

        if (playerComponentIndex < componentIndex) {
            setPlayerComponentIndex(playerComponentIndex+1)
            return
        }

        if (playerComponentIndex === componentIndex && componentIndex >= dialogue.length - 1) {
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
        // can maybe be optimized
        if (el.nextLocked) {
            return
        }

        if (playerComponentIndex === 0) {
            decIdx();
        } else {
            setPlayerComponentIndex(playerComponentIndex-1)
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
         {playerComponentIndex === 0 &&
            <div className='title'>
                Welcome to Halloween 2022
            </div>}
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