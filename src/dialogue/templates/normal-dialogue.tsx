import "./dialogue.css"
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set, get} from "firebase/database";
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setIndex } from '../../store/indexSlice';
import { Button } from '@mui/material';
import Dialogue from "./dialogue";
import dialogueList from "../dialogue-list";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";


const NormalDialogue = ({text, image, answers}: {text: string, image: string, answers: string[]}) => {
    // DCDCDC
    const index = useAppSelector((state) => state.playerIndex.value)
    const incIdx = useIncIndex()
    const decIdx = useDecIndex()

    const [ans, setAns] = useState<string>("")

    const handleNext = () => {
        // CHECK
        if (answers.length > 0) {
            if (answers.map(a => a.toLowerCase()).includes(ans.toLowerCase())) {
                incIdx();
            }
        } else {
            incIdx();
        }

    }

    const handleBack = () => {
        console.log("back")
        decIdx();
    }

    // Probably have to provide as a child to dialogue, since the design color has to wrap them both, or whatever just make a css class
    // might put buttons in common class with "handleNext" field

    // TODO - only show input if playerIdx == index
    return <div>
        <Dialogue text={text} image={image}/>
        {answers.length > 0 && <input value={ans} onChange={(e) => setAns(e.target.value)}/>}
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