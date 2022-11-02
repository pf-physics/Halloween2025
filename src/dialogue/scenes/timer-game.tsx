import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Button, Slide } from '@mui/material';
import Dialogue from "../templates/dialogue";
import { useIncIndex, useDecIndex, useIncAllIndices } from "../../hooks/indexHooks";
import { useIncAllComponentIndices, useIncComponentIndex, useInitComponentIdx } from "../../hooks/componentIndexHooks";
import { ref, onValue, getDatabase, set, get } from 'firebase/database';
import { setPlayerIndex } from '../../store/playerIndexSlice';
import { Fade } from '@mui/material';
import { setAudio, setLoop } from "../../store/audioSlice";
import { useSetGlobalScene } from '../../hooks/common';
import cauldronImg from "../../assets/imgs/cauldron.jpg"

import song from "../../assets/audio/merchant2.mp3"
import bloodSFX from "../../assets/audio/blood.wav"
import pumpkinHeadMusic from "../../assets/audio/pumpkinHead.mp3"
import pumpkinHead from "../../assets/imgs/pumpkin_head.png"
import death from "../../assets/imgs/death2.png"
import Timer from './timer';

type Dialogue = {
    text: string,
    image: string | undefined,
    audio?: string,
    optionTime?: boolean
}

const dialogue: Dialogue[] =
    [ {text: "Now that the party is ready, you are free to do whatever until the guests arrive. Make sure you stay in this area though, just in case", image: pumpkinHead, audio: pumpkinHeadMusic}
    , {text: "I'm sure that timer at the top means absolutely nothing and there is nothing to worry about!", image:"", audio: song}
    , {text: "...", image:""}
    , {text: "Maybe it'd be a good idea to ask him some questions now. Be warned, if you ask aimless questions, your time will run out faster...", image:""}
    , {text: "Huh? What do you want?", image: pumpkinHead, optionTime: true}
    ];

// TODO if playerIndex < index, then use a local component index
const TimerGame = ({}: {}) => {
    const componentIndex = useAppSelector((state) => state.componentIndex.value)
    const playerIndex = useAppSelector((state) => state.playerIndex.value)
    const dispatch = useAppDispatch()
    const db = getDatabase();
    const [playerComponentIndex, setPlayerComponentIndex] = useState(componentIndex)
    const [el, setEl] = useState(dialogue[playerComponentIndex])

    const [showOptions, setShowOptions] = useState(false)


    useEffect(() => {
        if (el.audio) {
            dispatch(setLoop(true))
            dispatch(setAudio(el.audio))
        }
        if (el.optionTime) {
            setShowOptions(true)
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

    const incIdx = useIncAllComponentIndices()
    const incAppIndex = useIncAllIndices()
    const decIdx = useDecIndex()
    const answers: string[] = []
    const ansRequired = false

    // timer, get timer - if = 0, then set to user's time, else return the value

    const handleNext = async () => {

        if (playerComponentIndex < componentIndex) {
            setPlayerComponentIndex(playerComponentIndex+1)
            return
        }

        if (playerComponentIndex === componentIndex && componentIndex >= dialogue.length - 1) {
            incAppIndex()
            return
        }

        incIdx();

    }

    const handleBack = async () => {

        if (playerComponentIndex === 0) {
            decIdx();
        } else {
            setPlayerComponentIndex(playerComponentIndex-1)
        }
    }


    const ShowOptions = () => {
        const defaultText = el.text
        const [text, setText] = useState(defaultText)
        const [showInput, setShowInput] = useState(false)
        const [wrongAns, setWrongAns] = useState(false)
        const [ans, setAns] = useState<string>("")
        // keeps getting rerendered...

        const handleWrongAnswer = async () => {
            const dbCode = (localStorage.getItem("code") as string)
            setText("I don't know what you're talking about...")
            setWrongAns(true)
            const start = await (await get(ref(db, dbCode + "/" + "/middleTimer"))).val();
            if (start) {
                set(ref(db, dbCode + "/" + "/middleTimer"), start - 60000);
            }
        }

        const handleCurse = () => {
            setShowInput(true)
            setText("Curse?! What curse?!")
        }

        const back = () => {
            setShowInput(false)
            setWrongAns(false)
            setText(defaultText)
        }

        // TODO - real curse and lowercase MAKE SURE THE TIMER IS SET TO 0!!!!
        const inputCurse = () => {
            const realAns = ["sealing", "spell of sealing", "sealing spell"]
            if (realAns.includes(ans.toLocaleLowerCase())) {
                incAppIndex()
            } else {
                handleWrongAnswer()
                setAns("")
            }
        }

        // TODO put timer somewhere else! (in its own component!)
        return <div>
            <Dialogue text={text} image={el.image}/>
            {wrongAns &&
            <div>
                <p>(You've wasted some time...)</p>
                <Button onClick={back}
                    color="secondary"
                    variant="contained">
                    Back
                </Button>
            </div>}
            {showInput && !wrongAns ? <div>
                <input value={ans} onChange={(e) => setAns(e.target.value)}/>
                <Button color="primary"
                    variant="contained" onClick={inputCurse}>Submit</Button>
            </div> :
            !wrongAns && <div style={{display: "flex", flexDirection: "column", gap:"10px"}}>
                <p>What do you want to ask about?</p>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleWrongAnswer}>
                    The scientist
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleCurse}>
                    The curse
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleWrongAnswer}>
                    The fountain
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleWrongAnswer}>
                    The elixir
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={handleWrongAnswer}>
                    The poison
                </Button>
            </div>}
        </div>
    }

    return <div>
        <Timer audio={song}/>
       {showOptions ? <ShowOptions/> : <Dialogue text={el.text} image={el.image}/>}
        {showOptions ? <div>

        </div> : <div className="buttons-row">
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

export default TimerGame