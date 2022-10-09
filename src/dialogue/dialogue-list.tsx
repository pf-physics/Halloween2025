import NormalDialogue from "./templates/normal-dialogue"
import pumpkinHead from "../assets/imgs/pumpkin_head.png"
import { team1, team2 } from "../constants"

// import GlobalDialogue from "./templates/normal-dialogue", basically the same...?

// THE INDICES MIGHT NOT BE THE SAME! ahhh, okay think about it
// globalDialogueScene = "lounge1", if both equal then okay lol
// globalDialogue = true

// don't forget the compooonnneeeent indices stuff


// TODO make for both teams!
const dialogueListTest = [
    <NormalDialogue text="test" image={pumpkinHead} answers={[]}/>,
    <NormalDialogue text="test2" image={pumpkinHead} answers={[]}/>,
    <NormalDialogue text="test3" image={pumpkinHead} answers={["TeSt"]}/>,
    <NormalDialogue text="test4" image={pumpkinHead} answers={["spooky","pumpkin"]}/>,
    <NormalDialogue text="test5" image={pumpkinHead} answers={[]}/>,
]


const team1Dialogue = [<NormalDialogue text="test" image={pumpkinHead} answers={[]}/>]

const team2Dialogue = [<NormalDialogue text="test" image={pumpkinHead} answers={[]}/>]

export const getDialogue = (team: string) => {
    if (team === team1) {
        return team1Dialogue
    } else if (team === team2) {
        return team2Dialogue
    }

}

export default dialogueListTest