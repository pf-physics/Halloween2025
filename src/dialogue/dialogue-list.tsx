import NormalDialogue from "./templates/normal-dialogue"
import pumpkinHead from "../assets/imgs/pumpkin_head.png"
import ratsImg from "../assets/imgs/rats.png"
import ratMusic from "../assets/audio/ratMusic.mp3"
import pumpkinIntro from "../assets/audio/pumpkinIntro.mp3"
import pumpkinHeadMusic from "../assets/audio/pumpkinHead.mp3"
import pumpkinHeadMusic2 from "../assets/audio/pumpkinHead2.mp3"
import { team1, team2 } from "../constants"
import Intro from "./scenes/intro"

// import GlobalDialogue from "./templates/normal-dialogue", basically the same...?

// THE INDICES MIGHT NOT BE THE SAME! ahhh, okay think about it
// globalDialogueScene = "lounge1", if both equal then okay lol
// globalDialogue = true

// don't forget the compooonnneeeent indices stuff

const magicPower = "Halloween power"

// Add pausing ability?
const pumpkinIntroDialogue = [
    <NormalDialogue text="It's not kind to keep a guest waiting at the door." image={pumpkinHead} answers={[]} audio={pumpkinIntro} isGlobal={true}/>,
    <NormalDialogue text="I can sense a Halloween party from miles away. Of course, you don't mind me joining the fun." image={pumpkinHead} answers={[]} audio={pumpkinIntro} isGlobal={true}/>,
    <NormalDialogue text="You know the history of trick or treating don't you? And the deal we made with humans?" image={pumpkinHead} answers={[]} isGlobal={true}/>,
    <NormalDialogue text='You treat us. Or else we "Trick" you.' image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text="Halloween has been lackluster this year. So few houses giving out treats, and always the tiniest chocolate" image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text="You lot seem to be brimming with Halloween spirit so I'll give you another chance. If you help me throw a grand Halloween party, I will spare you my tricks." image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text="Every great Halloween needs music, food and decorations. I can see you've made an effort here but it needs work before it is suitable for my friends." image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text={`We won't find everything we need in the human realm. I will open a portal to the Halloween realm using my ${magicPower}.`} image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text={`Hhhhhhhhhhhhnnnnnnnnnnnnnnnnnn`} image={pumpkinHead} isGlobal={true}/>,
    // TODO - label on my door?
    <NormalDialogue text={`There! I put a portal at the end of this basement.`} image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text={`You'll need ${magicPower} to survive there. I will lend you some of mine. Everyone take a pouch, there should be enough ${magicPower} in there to last.`} image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text={`This ${magicPower} acts as a sort of currency in our realm, as well as our lifeforce. You can spend it as you please, but be warned, if you spend all of it, you will die.`} image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text={`You need to split up into two groups. While one group does errands, the rest of us will decorate. then we'll switch.`} image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text={`You'll need to pick up supplies from the merchant. He never gives good deals so it's better to trade him.`} image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text={`Luckily, I happen to know that he's been collecting winning rat race tickets. Before we split up, we must go to the races!`} image={pumpkinHead} isGlobal={true}/>,
    // each member place a seed
    // TODO - change rules maybe
    <NormalDialogue header={"RAT RACES"}
    image={ratsImg}
    text={`Choose one of three rats to bet on: Ferdinand, Westley or Sproot.
            Make sure there is approximately the same number of people on each team.
            (Groups of both ${team1} and ${team2} must have at least one member supporting each of the rats)
            In the dollhouse, each rat team place a tomato. When everyone is ready, release the rats on the first floor. The team whose rat finds a tomato first, gains 3 ${magicPower}. Teams gain 2 points for each tomato found which belongs to another team.
            (If you want to make this a drinking game, ask about raceh̶o̶r̶s̶erat rules)
            `} audio={ratMusic} isGlobal={true}/>,
    <NormalDialogue text={`Take the two winning tickets to share among the winners on each team.`} image={pumpkinHead} isGlobal={true}/>,
    <NormalDialogue text={`It is now time for us to split up.`} image={pumpkinHead} isGlobal={true}/>,
]

// Wolf - I'm so excited for next week!
// Oh dear, she thinks it's next week. Someone will have to tell her the truth...

// TODO make for both teams!
const dialogueListTest = [
    <Intro/>,
    ...pumpkinIntroDialogue,
    <NormalDialogue text="QUIET!" image={pumpkinHead} answers={[]} audio={"nothing"}/>,
    <NormalDialogue text="okay haha let's listen" image={pumpkinHead} answers={[]} audio={pumpkinHeadMusic}/>,
    <NormalDialogue text="nvm..." image={pumpkinHead} answers={[]} audio={"nothing"}/>,
    <NormalDialogue text="test4" image={pumpkinHead} answers={["spooky","pumpkin"]}/>,
    <NormalDialogue text="test5" image={pumpkinHead} answers={[]}/>,
]

// its lagging! Make async!

const team1Dialogue = [
    <Intro/>,
    ...pumpkinIntroDialogue,
    // TODO what to get from the guy
    <NormalDialogue text="Into the portal you go! Off on your errands. Your first stop is to get ghost tears from the merchant."/>,
]

// might have to make isGlobal a string, and set globalRoom to it, or just make another "in between" component which does that
const team2Dialogue = [
    <Intro/>,
    ...pumpkinIntroDialogue,
    <NormalDialogue text="You lot are staying here with me. The rest will go into the portal." image={pumpkinHead}/>,
    <NormalDialogue text="It's time to make this place look like a real Halloween party!" image={pumpkinHead} audio={pumpkinHeadMusic2}/>,

]

export const getDialogue = (team: string) => {
    if (team === team1) {
        return team1Dialogue
    } else if (team === team2) {
        return team2Dialogue
    } else {
        return ([])
    }

}

export default getDialogue