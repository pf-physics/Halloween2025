import "./dialogue.css"
import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks'
import { Button } from '@mui/material';
import Dialogue from "./dialogue";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";


const NormalDialogue = ({text, image, answers}: {text: string, image: string, answers: string[]}) => {
    const index = useAppSelector((state) => state.index.value)
    const playerIndex = useAppSelector((state) => state.playerIndex.value)
    const incIdx = useIncIndex()
    const decIdx = useDecIndex()
    const ansRequired = playerIndex !== undefined && index != undefined && !(playerIndex < index) && answers.length > 0

    const [ans, setAns] = useState<string>("")

    const handleNext = () => {
        // CHECK
        if (ansRequired) {
            if (answers.map(a => a.toLowerCase()).includes(ans.toLowerCase())) {
                setAns("")
                incIdx();
            }
        } else {
            incIdx();
        }

    }

    const handleBack = () => {
        decIdx();
    }

    // Probably have to provide as a child to dialogue, since the design color has to wrap them both, or whatever just make a css class
    // might put buttons in common class with "handleNext" field

    return <div>
        <Dialogue text={text} image={image}/>
        {answers.length > 0 && ansRequired && <input value={ans} onChange={(e) => setAns(e.target.value)}/>}
        <div className="buttons-row">
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
        </div>
    </div>
}

export default NormalDialogue