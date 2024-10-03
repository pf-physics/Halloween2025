import NormalDialogue from "./templates/normal-dialogue"
import pumpkinHead from "../assets/imgs/pumpkin_head.png"
import ratsImg from "../assets/imgs/rats.png"
import ratMusic from "../assets/audio/ratMusic.mp3"
import merchantImg from "../assets/imgs/skeleton-temp.jpg"
import merchantMusic from "../assets/audio/merchant.mp3"
import spiderMusic from "../assets/audio/spiderRune.mp3"
import spiderImg from "../assets/imgs/spider6.jpg"
import ghostsImg from "../assets/imgs/ghosts.png"
import evilGuyImg from "../assets/imgs/evilGuy.png"
import pumpkinIntro from "../assets/audio/pumpkinIntro.mp3"
import pumpkinHeadMusic from "../assets/audio/pumpkinHead.mp3"
import pumpkinHeadMusic2 from "../assets/audio/pumpkinHead2.mp3"
import backstory from "../assets/audio/backstory.mp3"
import backstory2 from "../assets/audio/backstory2.mp3"
import fakeParty from "../assets/audio/fakeParty3.mp3"
import realParty from "../assets/audio/fakeParty.mp3"
import evilGuy from "../assets/audio/badGuy.mp3"
import witchImg from "../assets/imgs/witch3.jpg"
import witchMusic from "../assets/audio/witches.mp3"
import witch2Music from "../assets/audio/witches2.mp3"
import wolfImg from "../assets/imgs/wolf.jpg"
import ghostCraft from "../assets/imgs/ghost_craft.png"
import itsy from "../assets/audio/itsy.mp3"
import relayMusic from "../assets/audio/fast.mp3";
import bossFight from "../assets/audio/bossFight.mp3";
import summoning from "../assets/audio/summoning.mp3"
import trickMusic from "../assets/audio/tricktreat.mp3"
import trickImg from "../assets/imgs/candy.jpg"
import pepperImg from "../assets/imgs/pepper.png"
import endImg from "../assets/imgs/endImg.jpg"

import Intro from "./scenes/intro"
import WolfRules from "./scenes/wolf-rules"
import SoupGame from "./scenes/soup-game"
import TimerGame from "./scenes/timer-game"
import Timer from "./scenes/timer"
import DivinationRules from "./scenes/divination"
import PotionRules from "./scenes/potion"
import BossBattle from "./scenes/boss-battle"

const graveDiggerImg = ghostsImg
const tiredCorpseImage = ghostsImg
const lostSoulsImg = ghostsImg

// import GlobalDialogue from "./templates/normal-dialogue", basically the same...?

// THE INDICES MIGHT NOT BE THE SAME! ahhh, okay think about it
// globalDialogueScene = "lounge1", if both equal then okay lol
// globalDialogue = true

// don't forget the compooonnneeeent indices stuff

// FUTURE - multiple endings

const magicPower = "Halloween power"
// Delete
const merchantItem1 = "Liquid Lightning"
const merchantItem2 = "Spider Venom"
const rules = `First place winner gets 4 ${magicPower}, second gets 3, third gets 2, fourth gets 1. In case of ties, both players get the same number`

// TODO remove all audio I guess

// TODO tombstone shapes
const tombstoneRules = <NormalDialogue header={"TOMBSTONE ARCHITECTURE"}
    text={[`Everyone take a sheet of tombstone material (tin foil)`,
        `When everyone is ready, start a timer for 3 minutes`,
        `Make a tombstone by ripping the tin foil`,
        `An angel tombstone gets 10 points`,
        `A cross tombstone gets 4 points`,
        `A regular tombstone gets 2 point`,
        `If the lines are very wiggly, get half the points`,
        `The best tombstone gets 7 points, second gets 5, third gets 3`,
        rules,
    ]} />

// TODO DCDCDC the rules here
const graveDiggingRules = <NormalDialogue header={"GRAVE DIGGING"}
    audio={pumpkinIntro}
    text={[`Each team take a grave (cup) and line up`,
        `TODO - decide on rules`,
        `Winning team gets 10 points`,
        rules,
    ]} />

const corpseFindingRules = <NormalDialogue header={"CORPSE SEARCH"}
    text={[`Everyone grab an EMF (one person gets the real one). Use the emf to locate corpses. You can each find a maximum of 2 corpses`, // TODO DCDCDC this
        `You have two minutes to find and dig up the corpses (a demonstration will be made)`,
        `Each corpse is worth 2 points`,
        // `-1 points if you start on an odd number`,
        //rules,
    ]} />

    const callLostSoulsRules = <NormalDialogue header={"BOBBING FOR LOST SOULS"}
    text={[`Take turns using the chopsticks to remove a lost soul from the water.`,
        `Unwrap the lost soul and takes the number of penalties written.`,
        `The number on the lost soul is also the row from which you must hit to get the number of points.`, // TODO - paper airplanes instead?
        `(ie - 1 = first row onwards, 2 = second row onwards, etc.)`,
        //rules,
    ]} />

    const potionIngredientsGame = <NormalDialogue header={"POTION RECIPE"}
    text={[`A member from one team picks a question from the deck of trivia questions`,
        `They read the question for the other team to guess`,
        `Then switch roles until 7 questions have been asked of each team`,
        `Keep track of the number of correct answers each team has`,
        //rules,
    ]} />


const dialogue2024 =
    [<NormalDialogue text="Halloween 2024 >:)" image={ghostsImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Another day... another empty grave to fill... *mumble mumble*" image={graveDiggerImg} answers={[]} isGlobal={true} audio={backstory} />,
    <NormalDialogue text="Well, hello there! Welcome to my graveyard, I hope you'll choose to-" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Ah. You're alive. Then have you perhaps come to reserve your future tombstone?" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Oh you're here for the party... Well, this is a little awkward. You see, the party is actually for lost souls, and yours seem pretty at home in your body so..." image={evilGuyImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Though I suppose you technically could be future customers *mumble mumble*" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <BossBattle/>,
    <NormalDialogue text="Tell you what. If you help me get things ready, you can join in on the fun! Do we got a deal?" image={graveDiggerImg} answers={["yes", "of course", "i guess", "sure", "okay", "ok", "k", "kk", "yeah", "ya", "ye", "deal", "We have a deal", "sounds good"]} isGlobal={true} />,
    // DCDC - you receive info about lost souls
    <NormalDialogue text="Good on ya!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <TimerGame/>,
    // DCDC lost humans, wayward humans?
    <NormalDialogue text="So you see, this here's a party for lost souls, real ones, not just lost humans. We wanna thank em for all they do for us an' try to show em that our graveyard is a nice place to take a rest. Every graveyard does the same thing around Halloween." image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="I've dug some new comfy graves, but we need some tombstones to go with them." image={graveDiggerImg} answers={[]} isGlobal={true} />,
        tombstoneRules,
    <NormalDialogue text="Hm. Those sure are some... intersting tombstones. Well you did your best." image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="You know, the corpses that live here are supposed to help, but they've been keeping to themselves recently... I'm sure once the music gets pumping, they'll come out! I hope... *mumble mumble*" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="You know what?! Let's wake 'em up! I'm not letting em get away with snoozing at the most important time of the year!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
        graveDiggingRules,
    <NormalDialogue text="The graves are empty... they all left!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="boo hoo hoo... my graveyard is a failure! Why did they leave meeeee?! Are the tombstones not shiny enough? Graves not deep enough?!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Hold on a tic! Ghosts can't move their own bodies? How did they leave?!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="There's gotta be some corpses around here somewhere... I need you lot to go find them!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
        corpseFindingRules,
    <NormalDialogue text="I knew there were some left! Oi! Wake up!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="*yawn* What's all the ruckus?" image={tiredCorpseImage} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Halloween is soon! I need you lot" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="You're not pulling one over me again! Lost souls might help the other souls keep their plots clean, but I live in an unmarked grave! Why should I care about them when my plots overrun by weeds and trash!" image={tiredCorpseImage} answers={[]} isGlobal={true} />,
    <NormalDialogue text="..." image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Er, my mistake. Would you care for one of these tombs?" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Those are tombs?" image={tiredCorpseImage} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Ahem. Never mind. Before you go back to sleep... you got any idea where everyone else is...?" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="The other corpses? They're in the graveyard next door." image={tiredCorpseImage} answers={[]} isGlobal={true} />,
    <NormalDialogue text="..." image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="They really did abandon me!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Don't be silly. They were all taken by some lost souls! We corpses can't move ourselves!" image={tiredCorpseImage} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Oh. Right! Well we gotta get over there and bring em' back!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="You do that. I'm going back to sleep. zzzzzzzZZZZZzzzzzz..." image={tiredCorpseImage} answers={[]} isGlobal={true} />,
    <NormalDialogue text="No time to waste! Let's go get em!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    // DCDCDC - change the name probably
    <NormalDialogue text="What's this other graveyard called anyways?!" image={graveDiggerImg} answers={["Cool Guy Cemetery"]} isGlobal={true} />,
    <NormalDialogue text="They got some crazy security over there... I guess we gotta fight fire with fire!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="I don't like havin' to call em up so close to Halloween but we got no choice! We gotta get help from the lost souls!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    callLostSoulsRules,
    // TODO - change the CSS
    <NormalDialogue text="How can we be... how can we be... of service?" image={lostSoulsImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="That cemetery over there's gone and stolen all our corpses! We need your help gettin' em back" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="................" image={lostSoulsImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="some lost souls have gone to the cemetery..." image={lostSoulsImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="those lost souls... they come back... different... changed... wrong..." image={lostSoulsImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="we cannot go... we will not go..." image={lostSoulsImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Well aint that fantastic! What're we supposed to do then?" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Hold on... I'm bound to this graveyard so I can't leave... but YOU lot can go anywhere!" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="But their security is real tight" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="we know a way... we know a secret..." image={lostSoulsImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="*whisper whisper*" image={lostSoulsImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Hm. A potion eh? That should do the trick! So how do we make this thing?" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Answer our riddles and we shall tell you the answer" image={lostSoulsImg} answers={[]} isGlobal={true} />,
    <PotionRules/>,
    <NormalDialogue text="Did ya drink the potion? If not, ya better hurry up and do it! (write done when everyone has drank the potion)" audio={witchMusic} answers={["done"]} isGlobal={true} />,
    // dissection
    // in the graveyard game - a chain of ppl? (spoon in mouth or something) chopsticks in mouth? moving rings (souls) from one side to the other. Bones is better tho

    // "I didn't want to disturb them since this is the one time a year they get to let loose"
    // "Lost souls help with upkeep and security"

    <NormalDialogue text="oooo there's a bunch of dialogue missing don't even worry :> " audio={trickMusic} answers={[]} isGlobal={true} />,
    <NormalDialogue text="This potion will allow your soul to leave your body to secretly infiltrate the other cemetery." audio={witch2Music} image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="So it is effectively poison" image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="Don't worry! The souls here will inhabit your body while you're gone so it doesn't 'Die'. The potion also removes the tether to your body, so you can move freel." image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="In case some of you are captured, I recommend you go in pairs." image={graveDiggerImg} answers={[]} isGlobal={true} />,
    <NormalDialogue text="nothing to see here... " answers={["k"]} isGlobal={true} />,
    <NormalDialogue text="STILL nothing to see here... " isGlobal={true} />,
    <NormalDialogue text="STILL nothing to see here... " isGlobal={true} />,
    <BossBattle/>, // TODO - make going back SKIP the boss battle!
    <NormalDialogue text="YAY" audio={realParty} image={graveDiggerImg} isGlobal={true} />,
    ]

// the page says something like,
// Mix up groups again
// "Gourd(s)", "Treat(s)", "Trick(s)", "Bats", "Spider", "Cats"
const breakCurse1 = <NormalDialogue header={"BREAK THE CURSE - PART 1"} isGlobal
    text={[`Using the wands and a long exposure photograph where each person draws a pumpkin. (Try to fit a few people in each picture)`,
        `In one photograph, write all together "Free Gourds"`,
        //, write: Free Gourd(s) or Free Pumpkin (depending on how many people there are)`,
        `Look at the pictures and vote on the best drawing. The winner gets 3 ${magicPower}, second place gets 2, third gets 1.`
    ]} />

// maybe just add timer to normal dialogue?
const breakCurse2 = <NormalDialogue header={"BREAK THE CURSE - PART 2"} isGlobal
    text={[`The Pumpkin's souls have been freed! But they need a new vessel before it's too late!`,
        `Everyone grab a bell pepper and a knife. When everyone is ready, you have 5 minutes to carve out the pepper with a face.`,
        `Each take a cursed plate, and draw the symbol on it. Put the pepper on top.`,
        `Vote on the best pumpkin, er, pepper. The winner gets 3 ${magicPower}, second place gets 2, third gets 1.`
    ]} />

const finalFight = <NormalDialogue header={`"Water" the Tree`}
    text={[`Take the pot of cursed soil from amongst the plants`,
        `Saturate the middle of the soil with fermented toad blood`,
        `Mix together 4 tsp of crystallized banshee tears and 1 tsp of ground tombstone, put them on top of the fermented blood.`,
        `Set it all ablaze`,
        `Wait for the growing roots to settle, then cut off a piece and grind it in a bowl with water`,
        `On another plate, write the sealing symbol and place the ugliest carved pepper on top`,
        `Remove the rest of the root and dig until you find the seed.`]} />

/*
The flesh and blood of humans are the soil, souls of the dead provide the water. 
The seeds of the tree lie in wait 
“The farmer” an immortal being tasked with the upkeep of the tree. 
(Why needs help? Too weak. Trying to shirk responsibilities. He was awoken recently) 
The roots of the tree extend into the human world, eating humans (and animals) to sustain itself. The tree grows in the afterlife world. Ghosts eat its apples (berries?). (berries part of race?) These apples absorb the undead energy (life force, death force) to awaken the seeds in the apples, erasing the spirit from existence and creating new trees. 
The farmer promises that plant kind will be spared 
The farmer will also farm humans to keep a steady source of human meat for 
The farmer is the opposite of the reaper, who collects and protects souls (raises souls) 
The farmer destroys souls 
When consumed by the roots 


Entice the roots out with a bit of spirit energy, then feed poisoned blood? Seal with spell 
The farmer seeks to rid the world of humans and ghosts, to be replaced with plants 
*/

//     <NormalDialogue text={`If we are to fight the Gardener, we must make it appear as though everything is going according to plan. So you all must pretend to be Halloween creatures`} image={pumpkinHead} isGlobal={true}/>,

const stickerRules = `First place winner gets 4 ${magicPower}, second gets 3, third gets 2, fourth gets 1. In case of ties, both players get the same number`

const spiderPongRules = <NormalDialogue header={"FEED THE SPIDERS"}
    text={[`Your goal is to, as a team, get one prey in each bucket on the wall.`,
        "Retrieve the container of spider prey. One at a time, stand behind the middle of the coffee table and retrieve 3 prey from the container.",
        "If you get a prey into a bucket, award yourself that number of points, and keep track of which buckets have been filled",
        "If you accidentally get prey in an already filled bucket, get one point. You can switch the order of who goes first each rotation.",
        "Once all the buckets have been filled, the winner is the player with the most points.",
        "Handicap: Stand behind the pole",
        stickerRules,
        "If you run out of prey, make more with foil"]} image={spiderImg} />

const decorationRules = <NormalDialogue header={"WEB DECORATION"}
    text={["Take some spider silk from the wall.",
        "Everyone stand around the pole in the room and attempt to swing the silk into the circle.",
        "When the silk is attached, use tape to tape the other end to another part of the ceiling/room",
        `The person to attach their string first gets 4 ${magicPower}, second gets 2, and third gets 1`
    ]} image={spiderImg} />


const summoningRules = <NormalDialogue header={"GHOST SUMMONING"}
    audio={summoning}
    text={[`Sit in a circle around the board.`,
        `Each team member must write down 5 words on the blank pieces and place them in a pile beside the board.`,
        `One at a time, pick a word from the pile (don't show it to anyone)`,
        `Hold the string at the halfway point over the board (The planchet must hover oven the board without touching it).`,
        `Set a timer for one minute. By moving the planchet from letter to letter, the other teammembers must guess what the word is. Try to spell as many as you can.`,
        `The person moving the planchet and the person who guess the word correctly both get a point. (You cannot guess a word that you wrote)`,
        `Handicaps: Ghosts must hold the string from the top`,
        stickerRules
    ]} />

// Tricks:
// Throw on your next turn
// Give away a candy if you have one
// miss a turn
// take only one candy on your next turn, if you land on a door
// Put your most valuable candy back in the candy bucket, and get another
// carrot -1 point
const trickOrTreat = <NormalDialogue header={"TRICK OR TREAT"}
    audio={trickMusic}
    image={trickImg}
    text={[`One at a time, pick up the knocker from the door. Close your eyes and walk towards the door. Attempt to aim at a good Trick or Treating door.`, // DCDCDC knocker? Blindfold?
        `Purple doors: get 3 candies from the treat mbucket. Green door: get 2 candies from treat bucket. Orange door: Get 1 candy from treat bucket. Garbage can: 1 trick from trick bucket. In between doors: 1 from trick and one from treat`,
        `Play until someone gets 20 points (but finish the round)`,
        `Chocolate is worth 5 points, lollipops are worth 3, other candies are worth 1. Fruit and other things are worth 0. Carrots are worth -1.`,
        `If you get a trick, put it back in the button after you've completed the task`,
        `Handicaps: Ghosts must walk backwards to the door`,
        stickerRules
    ]} />

const fangGame = <NormalDialogue header={"SPOOKY SPEECH"}
    text={[`Grab the bag labelled "SPOOKY SPEECH"`,
        `One a time, pick a word from the bag, as well as teeth.`,
        `Wear the teeth and say the word to a text-to-speech app (ie - google translate). You have three tries to get it to recognize the word.`,
        `Get 3 ${magicPower} if you succeed.`,
        `Handicaps: Ghosts get only two tries`,
    ]} />

const disguiseGame = <NormalDialogue header={"SPOOKY DISGUISE"}
    text={[`Use the magic paint (makeup crayons) to paint on another team member, whatever they want to be disguised as. Pumpkinhead will use his magic to make you appear that way in the eyes of the gardener.`,
        `To get full inspiration from the creatures of the night, make sure your eyes are closed.`,
        `Handicaps: Ghosts must use their non-dominant hand`,
        `When everyone's face (or arm or whatever) is painted, vote on the best drawing and the worst drawing.`,
        `The artist who painted the most beautiful design gets 3 ${magicPower} and the canvas of the worst drawing gets 2 ${magicPower}.`
    ]} />


const ghostDecorations = <NormalDialogue header={"HALLOWEEN SPIRIT"}
    text={["Fill the room with Halloween Spirits!",
        `Take the bag labelled "Halloween spirit", along with the house, and put it on the coffee table. Try to position yourself so the box is in reach.`,
        "When everyone is ready, start a 5 minute timer and try to make as many ghosts as you can.",
        "The winner is the one with the most little ghosts at the end of the 5 minutes.",
        "The ghosts must all have a face and a hook attached to their back. If ghosts are poorly made other team members can reject the ghost, if there is a consensus.",
        "handicap: Close your eyes when building the ghost. Eyes can be open while fetching ingredients and drawing the face.",
        stickerRules
    ]} image={ghostCraft} />

const dialogueList = [<NormalDialogue text="You lot are staying here with me. The rest will go into the portal." image={pumpkinHead} />,
<NormalDialogue text="It's time to make this place fitting for a real Halloween party!" image={pumpkinHead} audio={pumpkinHeadMusic2} />,
<NormalDialogue text="Every great Halloween party needs spider silk. It's just our luck that a few spiders have made their home here and their silk looks exquisite!" image={pumpkinHead} />,
<NormalDialogue text="Though, I'll let you do the negotiating. My kind doesn't get along well with them..." image={pumpkinHead} />,
<NormalDialogue text="(The spiders watch your with their many eyes)" image={spiderImg} audio={spiderMusic} />,
<NormalDialogue text="I can tell by the way you eye my web why you have come to us." image={spiderImg} />,
<NormalDialogue text="Pumpkinhead refuses to approach our lair I see. What a shame. His head would make a great home for my children." image={spiderImg} />,
<NormalDialogue text="You must understand that silk of this quality doesn't come cheap. And we are very hungry. I'm sure you wouldn't mind providing us a few morsels for our wares." image={spiderImg} />,
<NormalDialogue text="Psst. There is some food in that bucket there. Make sure you keep your distance when you give it to them, and then grab the thread while they're distracted!" image={pumpkinHead} />,
    spiderPongRules,
<NormalDialogue text="Quick! While they're busy feeding, each get a string of web!" image={pumpkinHead} audio={itsy} />,
    decorationRules,
<NormalDialogue text="This room is already looking quite spooky, but it's not enough! This room lacks Halloween spirit! You'd better hurry, there's much to do!" image={pumpkinHead} audio={pumpkinHeadMusic2} />,
    ghostDecorations,
<NormalDialogue text={`(Get two extra ${magicPower} if your ghosts have a least 3 different expressions. Hang up the ghosts on the string light above the table.)`} />,
<NormalDialogue text="Not bad, not bad, it's starting to get spooky!" image={pumpkinHead} />,
<NormalDialogue text="Now that you're done, I'll need you to run some errands for me as well." image={pumpkinHead} />,
<NormalDialogue text="(If the other team has finished their tasks, switch places with them and enter the portal, otherwise sit tight!)" />,
<NormalDialogue text="(Press next when you are in front of the merchant's table.)" />,
<NormalDialogue text="Hello, and welcome to my shop." image={merchantImg} audio={merchantMusic} />,
<NormalDialogue text="More new customers! Today must be my lucky day!" image={merchantImg} />,
<NormalDialogue text={`You want to trade your winning rat race card for ${merchantItem2}? Well, normally that'd be a good deal, but seeing as your friends just gave me one, I'd prefer something else.`} image={merchantImg} />,
<NormalDialogue text={`How about this? We play a friendly game and I'll give you the ${merchantItem2} if you win!`} image={merchantImg} />,
<DivinationRules />
]

// TODO - all areas have same dialogue, depending on team, return different order (future task after Halloween2023)
export const getDialogue = (team: string) => {
    return dialogue2024;

}

export default getDialogue