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

import { team1, team2 } from "../constants"
import Intro from "./scenes/intro"
import WolfRules from "./scenes/wolf-rules"
import SoupGame from "./scenes/soup-game"
import TimerGame from "./scenes/timer-game"
import DivinationRules from "./scenes/divination"

// import GlobalDialogue from "./templates/normal-dialogue", basically the same...?

// THE INDICES MIGHT NOT BE THE SAME! ahhh, okay think about it
// globalDialogueScene = "lounge1", if both equal then okay lol
// globalDialogue = true

// don't forget the compooonnneeeent indices stuff

const magicPower = "Halloween power"
// TODO what to get from the guy
const merchantItem1 = "Ghost Tears"
const merchantItem2 = "Spider Venom"

// Add pausing ability?
const pumpkinIntroDialogue = [
    <NormalDialogue text="It's not kind to keep a guest waiting at the door." image={pumpkinHead} answers={[]} audio={pumpkinIntro} isGlobal={true} />,
    <NormalDialogue text="I can sense a Halloween party from miles away. Of course, you don't mind me joining the fun." image={pumpkinHead} answers={[]} audio={pumpkinIntro} isGlobal={true} />,
    <NormalDialogue text="You know the history of trick or treating don't you? And the deal we made with humans?" image={pumpkinHead} answers={[]} isGlobal={true} />,
    <NormalDialogue text='You treat us. Or else we "Trick" you.' image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text="Halloween has been lackluster this year. So few houses giving out treats, and always the tiniest chocolate" image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text="You lot seem to be brimming with Halloween spirit so I'll give you another chance. If you help me throw a grand Halloween party, I will spare you my tricks." image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text="Every great Halloween needs music, food and decorations. I can see you've made an effort here but it needs work before it is suitable for my friends." image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text={`We won't find everything we need in the human realm. I will open a portal to the Halloween realm using my ${magicPower}.`} image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text={`Hhhhhhhhhhhhnnnnnnnnnnnnnnnnnn`} image={pumpkinHead} isGlobal={true} />,
    // TODO - label on my door?
    <NormalDialogue text={`There! I put a portal at the end of this basement.`} image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text={`You'll need ${magicPower} to survive there. I will lend you some of mine. Everyone take a pouch, there should be enough ${magicPower} in there to last.`} image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text={`This ${magicPower} acts as a sort of currency in our realm, as well as our lifeforce. You can spend it as you please, but be warned, if you spend all of it, you will die.`} image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text={`You need to split up into two groups. While one group does errands, the rest of us will decorate. then we'll switch.`} image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text={`You'll need to pick up supplies from the merchant. He never gives good deals so it's better to trade him.`} image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text={`Luckily, I happen to know that he's been collecting winning rat race tickets. Before we split up, we must go to the races!`} image={pumpkinHead} isGlobal={true} />,
    // each member place a seed
    // TODO - change rules maybe
    <NormalDialogue header={"RAT RACES"}
        image={ratsImg}
        text={`Choose one of three rats to bet on: Ferdinand, Westley or Sproot.
            Make sure there is approximately the same number of people on each team.
            (Groups of both ${team1} and ${team2} must have at least one member supporting each of the rats)
            In the dollhouse, each rat team place a tomato. When everyone is ready, release the rats on the first floor. The team whose rat finds a tomato first, gains 3 ${magicPower}. Teams gain 2 points for each tomato found which belongs to another team.
            (If you want to make this a drinking game, ask about raceh̶o̶r̶s̶erat rules)
            `} audio={ratMusic} isGlobal={true} />,
    <NormalDialogue text={`Take the two winning tickets to share among the winners on each team.`} image={pumpkinHead} isGlobal={true} />,
    <NormalDialogue text={`It is now time for us to split up.`} image={pumpkinHead} isGlobal={true} />,
]

// the page says something like,
// Mix up groups again
// "Gourd(s)", "Treat(s)", "Trick(s)", "Bats", "Spider", "Cats"
// TODO - one team?
const breakCurse1 = <NormalDialogue header={"BREAK THE CURSE - PART 1"} isGlobal
    text={[`Using the wands and a long exposure photograph where each person draws a pumpkin. (Try to fit a few people in each picture)`,
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

// maybe pour the liquid into two cups, then into the bowl!
// Alternately, with the syringe, swing around to the start and swing around back, empty syringe into a cup (flip cup) then step on pumpkins on the way back
const middleDialogue = [<NormalDialogue text="(Press next when you are all together)" globalScene="middle" isGlobal />,
<NormalDialogue text={`The preparations are almost complete.`} audio={pumpkinIntro} image={pumpkinHead} isGlobal />,
<NormalDialogue text={`You have the ingredients yes? Fill the cup on the left with ${merchantItem1} and the cup on the right with ${merchantItem2}.`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`Now all that's left to do is to enchant the punch!`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`A raven must fly forth and give us a sign. Through the pumpkin patch, the liquid must flow, to be fed to one whos' heart is still beating. Return and add the potion to your cauldron, then spin until all is forgotten.`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`(It's time for a punch enchantment relay race! Mix up the teams of ${team1} and ${team2} into two groups, and line up beside the main table.)`} isGlobal={true} />,
<NormalDialogue
    text={[`(In order to use your ${magicPower} to its full ability, you need to learn to embody Halloween!`,
        `Each member of your group must write down one famous Halloween/horror movie/series that the other team must act out.`,
        `If one team has more members than the other, write an extra word.)`
    ]} isGlobal={true} />,
<NormalDialogue header={"ENCHANT THE PUNCH"}
    text={[`First, take a feather from the bag and blow it across the room. If it falls on the floor, take a step back and continue.`
        , "When you've reached the table, pick a word from the other team, and act it out. Your teammates must guess correctly before you can continue."
        , "Use the syringe on the table to pick up some of the liquid, then return back to the start by stepping on the pumpkins on the ground, in order."
        , "When you've reached the start, administer the contents of the syringe into the next teammate in line (the contents are not XXX)"
        , "Return to the other side of the room, stepping on the pumpkins in reverse order."
        , "Use the syringe to move some liquid to the bowl, twice."
        , "Swing twice around the pole and return to the start"
        , "The next person in line does the same."]} audio={relayMusic} isGlobal={true} />,
<NormalDialogue text={`The winning team gets 7 ${magicPower}`} image={pumpkinHead} isGlobal={true} />,
<TimerGame />,
<NormalDialogue text={`...`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`*sigh* So, you've figured it out then? I might as well come clean... I never wanted any part in this anyways...`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={[`As you may know, every October my kind traverses over to the human realm and possesses the biggest, best pumpkins for carving.`,
    `When we are inevitably carved, we gain limbs and mobility. Until Halloween, we protect the carver's crops. On Halloween we throw a big party to celebrate our freedom. Then, until the first snow, we travel the earth together, doling out blessings and curses as we see fit.`]} image={pumpkinHead} audio={backstory} isGlobal={true} />,
<NormalDialogue text={`This year didn't go quite as planned...`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`Despite choosing the roundest, plumpest pumpkins, only I had been picked and carved. As I waited for my brethren to emerge, "They" approached us.`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`They called themself, the Gardener, and revealed that they had cursed the pumpkins so that none would carve them, and would only lift the curse if I carried out their bidding.`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`I had no choice. If my kind possesses a pumpkin that rots before it is carved, their soul will be lost forever.`} image={pumpkinHead} isGlobal={true} />,
// DCDCDC numbers, and spell? blood draining?
<NormalDialogue text={[`I had to drain the blood from 10 humans, and gather as many Halloween creatures as I could for "The Ritual".`,
    `I do not know what this ritual entails, but I doubt my Halloween friends will survive the night.`,
    `Though They have guaranteed the safety of my kind, I doubt we will survive the night either.`]} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`...`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={`I've been a fool. If we are to die anyways, I might as well fight for their souls!`} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue text={[`I will need your help. I'm sure you've noticed by now, but the punch is poisoned and you will soon die.`,
    `With a flick of my wrist, I can cure you all... but I think I will let a couple of you die.`,
    `Don't worry, I can resurrect them later, but for now, I need the insurance you won't run off...`]} image={pumpkinHead} isGlobal={true} />,
<NormalDialogue header="RIP" text={[`(Some of you are now ghosts! Find the person on the ${team1} team and the ${team2} team with the least amount of ${magicPower}. they are now ghosts!)`,
    `(Ghosts must wear the ghost cape. They must either end every sentence with woo~ or speak the whole sentence in a ghostly tone. If they forget, they must take a penalty.)`, // DCDCDC
    `(Every game has a handicap that all ghosts must now take.)`,
`(If a ghost gains ${magicPower} and is no longer the player with the least, they are resurrected and a new player becomes the ghost.)`,
    `(Happy Haunting!)`
]} isGlobal={true} />,
<NormalDialogue text={`We must split up into two groups once more. One group will investigate the Gardener's ritual, the other will remain here to plot how to defeat them.`} image={pumpkinHead} isGlobal={true} />,
]

// USE REAL SUGAR and rubbing alcohol and baking soda
//5g of baking soda 20g of sugar, 1 to 4 ratio
// TODO DCDCDC
const finalFight = <NormalDialogue header={`"Water" the Tree`}
    text={[`Take the pot of cursed soil from amongst the plants`,
        `Saturate the middle of the soil with fermented toad blood`,
        `Mix together 4 tsp of crystallized banshee tears and 1 tsp of ground tombstone, put them on top of the fermented blood.`,
        `Set it all ablaze`,
        `Wait for the growing roots to settle, then cut off a piece and grind it in a bowl with water`,
        `On another plate, write the sealing symbol and place the ugliest carved pepper on top`,
        `Remove the rest of the root and dig until you find the seed.`]} />

const endDialogue = [<NormalDialogue text={"Press next when you are all together"} isGlobal globalScene="end" />,
<NormalDialogue text={"What is the gardener trying to grow?"} answers={["tree", "inverse tree", "upside down tree"]} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"What must escape for the curse to be lifted?"} answers={["soul", "souls", "the soul"]} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"Of course, I remember now. I'd heard stories of this tree, but thought it was only a myth..."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"The Gardener seeks to grow the inverse tree, whose roots extend into the human realm, using the meat of humans as soil"} image={pumpkinHead} audio={backstory2} isGlobal />,
<NormalDialogue text={"The tree sprouts in the Halloween realm, where the souls of the undead act as its water. As the tree grows, it eventually produces fruit. Any lost soul who eats the fruit will become the water for a new tree, as the seed inside their stomach sprouts anew."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"As the trees spread across both the Halloween and human realms, the Gardener will become the Farmer, their new purpose to farm human meat and souls so there is a steady source of nutrients for the trees."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"The Gardener's power is tied to the tree. They must have been weak upon awaking, cursing my kind so I would carry out the grunt work"} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"Before we defeat the Gardener, we must free my brethren. We will need their magic!"} image={pumpkinHead} isGlobal />,
    breakCurse1,
    breakCurse2,
<NormalDialogue text={"Uuugghhhh... what's going on?"} image={pepperImg} isGlobal />,
<NormalDialogue text={"Why am I a pepper?"} image={pepperImg} isGlobal />,
<NormalDialogue text={"Friends! There is no time to explain, but I need your help!"} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"We must stop the tree when it is most vulnerable: when it takes root. The spell requires the blood and bones of humans, but it can be completed with that of other animals. This will make the roots weaker when they emerge. My brethren and I will use magic to mimic a soul."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"The Gardener is set to arrive any second now. Remember, act as though nothing is amiss. We are all gathered here to enjoy a Halloween party!"} image={pumpkinHead} audio={fakeParty} isGlobal />,
<NormalDialogue text={"Play some music! Everyone get a drink! You! Eat some chocolate!"} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"HAHAHA. What a wonderful party! I am having a marvelous time! Aren't you?"} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"Let us have a toast. To Halloween! Cheers!"} image={pumpkinHead} isGlobal />,
// little shop of horrors backwards?
// TODO img
<NormalDialogue text={"You all seem quite... spirited"} audio={""} image={evilGuy} isGlobal />,
// can make custom where it is interrupted?
<NormalDialogue text={"Well if it isn't the guest of honor! Come in, have some punch-"} audio={evilGuy} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"Enough. There is no time for that. Do you have the blood?"} image={evilGuy} isGlobal />,
<NormalDialogue text={"Yes, right here."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={`Good. Then why don't you show your guests the... "Party Trick" we discussed earlier. I have brought the pot.`} image={evilGuyImg} isGlobal />,
<NormalDialogue text={"Yes, of course, of course..."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"..."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"Now!"} image={pumpkinHead} audio={bossFight} isGlobal />,
<NormalDialogue text={`What are you doing?! Stop!`} image={evilGuyImg} isGlobal />,
<NormalDialogue text={"Pumpkins! I mean, Peppers! We must restrain Them!"} image={pumpkinHead} isGlobal />,
<NormalDialogue text={`Hss`} image={evilGuyImg} isGlobal />,
    finalFight,
<NormalDialogue text={`(What is written on the seed?)`} answers={["eye", "eyeball"]} isGlobal />,
<NormalDialogue text={"Quickly, feed it to the rats!"} image={pumpkinHead} isGlobal />,
<NormalDialogue text={`Press next when you have fed the rats`} isGlobal />,
<NormalDialogue text={`You are fools to have gone against us! There are more seeds out there... one day... they will... sprout...`} image={evilGuyImg} isGlobal />,
<NormalDialogue text={`...`} image={evilGuyImg} isGlobal />,
<NormalDialogue text={"We did it!"} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"I am a little concerned about the rats... with the power they've absorbed, they could take over the world..."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"Best to keep them well fed and entertained so it doesn't come to that."} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"Now that we've defeated them, it's time we have a real party! We'll call all our friends back here! ...even the merchant."} audio={realParty} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"Happy Halloween!"} image={pumpkinHead} isGlobal />,
<NormalDialogue text={"The End :)"} image={endImg} isGlobal />,
]

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

const stickerRules = `First place winner gets 5 ${magicPower}, second gets 4, third gets 3, fourth gets 2, fifth get 1. In case of ties, both players get the same number`

// TODO - revise rules
const spiderPongRules = <NormalDialogue header={"SPIDER PONG"}
    text={[`Your goal is to, as a team, get one prey in each bucket on the wall.`,
        "Retrieve one container of spider prey. One at a time, stand behind the line and retrieve 3 prey from the container.",
        "If you get a prey into a bucket, award yourself that number of points, and keep track of which buckets which have been filled",
        "If you accidentally get prey in an already filled bucket, get one point. You can switch the order of who goes first each rotation.",
        "Once all the buckets have been filled, the winner is the player with the most points.",
        stickerRules,
        "If you run out of prey, use the foil beside the containers to make more prey (do not take the other team's container)"]} image={spiderImg} />

const decorationRules = <NormalDialogue header={"WEB DECORATION"}
    text={["Take turns using the spider web to decorate.",
        "Each stand at the circle outside the pole and throw the end of the web with velcro up into the ceiling. Attach the other end somewhere on the wall. (try to get an even distributin around the pole)",
        `Get 3 ${magicPower} if you hit the inner circle. 2 for middle. 1 for outer circle`
    ]} image={spiderImg} />


// TODO - people write their own words? nothing longer than 10 letters
const summoningRules = <NormalDialogue header={"GHOST SUMMONING"}
    audio={summoning}
    text={[`Sit in a circle around the board. One at a time, pick a word from the summoning sack (don't show it to anyone)`,
        `Hold the string at the halfway point over the board (The planchet must hover oven the board without touching it).`,
        `Set a timer for one minute. By moving the planchet from letter to letter, the other teammembers must guess what the word is.`,
        `Get one points for each word you guess, and one point if your word was guessed.`,
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
        `Purple doors: get 3 candies from the treat bucket. Green door: get 2 candies from treat bucket. Orange door: Get 1 candy from treat bucket. Garbage can: 1 trick from trick bucket. In between doors: 1 from trick and one from treat`,
        `Play until someone gets 20 points (but finish the round)`,
        `Chocolate is worth 5 points, lollipops are worth 3, other candies are worth 1. Fruit and other things are worth 0.`,
        `Handicaps: Ghosts must walk backwards to the door`,
        stickerRules
    ]} />

const fangGame = <NormalDialogue header={"SPOOKY SPEECH"}
    text={[`One a time, pick a word from the bag with vampire teeth, as well as teeth.`,
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


// penalty - eyes closed?
// get markers
// custom? with timer?
const ghostDecorations = <NormalDialogue header={"HALLOWEEN SPIRIT"}
    text={["Fill the room with Halloween Spirits!",
        "Take the box labelled Halloween spirit and put it on the coffee table. Try to position yourself so the box is in reach.",
        "When everyone is ready, start a 5 minute timer and try to make as many ghosts as you can.",
        "The winner is the one with the most little ghosts at the end of the 5 minutes.",
        "The ghosts must all have a face and a hook attached to their back. If ghosts are poorly made other team members can reject the ghost, if there is a consensus.",
        stickerRules
    ]} image={ghostCraft} />

const team1Dialogue = [
    <Intro />,
    ...pumpkinIntroDialogue,
    <NormalDialogue text={`Into the portal you go! Off on your errands. Your first stop is to get ${merchantItem1} from the merchant. Press next when you are in front of them`} />,
    <NormalDialogue text="Hello, and welcome to my shop." image={merchantImg} audio={merchantMusic} />,
    <NormalDialogue text="What's this? I've never seen your faces around here before. What can I do for you?" image={merchantImg} />,
    <NormalDialogue text={`You want to trade your winning rat race card for ${merchantItem1}? Sounds like a fair deal to me.`} image={merchantImg} />,
    <NormalDialogue text="Though, I must question your taste. What exactly are you planning on using this for?" image={merchantImg} />,
    <NormalDialogue text="A punch for PumpkinHead's party? Well, I'll make sure to steer clear of that party..." image={merchantImg} />,
    <NormalDialogue text="Ahem" image={merchantImg} />,
    <NormalDialogue text={`Since you're here, might I interest you in any of my other wares? I see you've got some ${magicPower} to spare`} image={merchantImg} />,
    <NormalDialogue text={`Don't look so suspicious. My wares are guaranteed to be enchanted or 50% of your money back, guaranteed.`} image={merchantImg} />,
    <NormalDialogue text={`Read the descriptions of the Merchant's wares and make a purchase if you desire. You can come back any time you'd like.`} />,
    <NormalDialogue text={`Your next stop is the witch's cabin to get some music and soup (don't forget to take off your shoes) Press next when you're in the cabin.`} />,
    <NormalDialogue text={`Hello dearies. Are you lost children looking for a new home in my soup? No? Well, what can I do for you?`} image={witchImg} audio={witchMusic} />,
    <NormalDialogue text={`Oh, the party of course! The Pumpkinheads always throw such marvelous parties. I'd be happy to help.`} image={witchImg} />,
    <NormalDialogue text={`If you want music, you're gonna need a werewolf. My good friend, is a werewolf. But where did she run off to? I'm afraid you'll have to call her, my voice always cracks when I howl.`} image={witchImg} />,
    <WolfRules />,
    <NormalDialogue text={`AWOOOO. Hello! Are you snacks or new friends?`} image={wolfImg} />,
    <NormalDialogue text={`Friends! Oh and a party! I'd love to howl for you at your party! AWOOOO! I can't wait for next week!`} image={wolfImg} />,
    <NormalDialogue text={`Aaand off she goes. The party is tonight, isn't it? Someone will have to tell her that...`} image={witchImg} />,
    <NormalDialogue text={`Anyhow, was there something else you needed?`} image={witchImg} />,
    <NormalDialogue text={`I'd be happy to lend you a soup recipe! But I can't quite remember the ingredients... Could you help me?`} image={witchImg} />,
    <SoupGame />,
    <NormalDialogue text={`That sounds about right! But we'd better try it just to make sure... Add a shot of poison (XXX) if you want an extra kick!`} image={witchImg} />,
    <NormalDialogue text={`(Each prepare the soup in a cup provided, and drink it. Everyone gets 3 ${magicPower} if you got the potion right on the first try, or 2 otherwise.)`} />,
    <NormalDialogue text={`Quite a delicious recipe, if I do say so myself. ... Why are you giving me that look?`} image={witchImg} />,
    <NormalDialogue text={`Well, don't dawdle. I'm sure you have plenty to do before the party! I'll see you at the witching hour.`} image={witchImg} />,
    <NormalDialogue text={`Oh dear customers, might I have a word with you?`} audio="" />,
    <NormalDialogue text={`(Better go see what the Merchant wants... Press next when you are at their table)`} />,
    <NormalDialogue text={`Based on what I'm hearing about this party, something isn't quite right.`} image={merchantImg} audio={merchantMusic} />,
    <NormalDialogue text={`Seeing a scarecrow throwing a party by itself is practically unheard of. Typically, these scarecrows plan these parties as a group, with a different pumpkin handling each task. Instead he has you lot going around, doing his work.`} image={merchantImg} />,
    <NormalDialogue text={`Typically I mind my own business, but I could be persuaded to help you, if you're willing to play a little game with me.`} image={merchantImg} />,
    // NEEDS TO BE CUSTOM
    // if they refuse, have to find keys on their own? or can come back later...
    <DivinationRules />,
    <NormalDialogue text={`Outside this portal is a painting, check behind the painting for a key. Use that key to unlock the suitcase under my desk. You can borrow what's inside.`} image={merchantImg} />,
    <NormalDialogue text={`Good luck.`} image={merchantImg} />,
    <NormalDialogue text={`(Check the other room to see if the other group is done with their tasks. If so, switch places, otherwise, hang around until they are ready. And don't forget the ghost tears!)`} />,
    <NormalDialogue text={`(Press next when you are in the lounge)`} />,
    <NormalDialogue text="Great, you lot are back. The other group did an okay job decorating but it could use more!" image={pumpkinHead} audio={pumpkinHeadMusic2} />,
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
    <NormalDialogue text="This room has quite a lot of Halloween spirit now, and also regular spirits, but I think it could do with some more! Chop chop, no time to waste!" image={pumpkinHead} audio={pumpkinHeadMusic2} />,
    ghostDecorations,
    <NormalDialogue text={`(Get two extra ${magicPower} if your ghosts have a least 3 different expressions. Hang up the ghosts on the string light above the table.)`} />,
    <NormalDialogue text="It's looking much spookier now! We just need the other team to make the final touches!" image={pumpkinHead} />,
    ...middleDialogue,
    <NormalDialogue text="You lot will stay here with me." image={pumpkinHead} />,
    <NormalDialogue text={`If we are to fight the Gardener, we must make it appear as though everything is going according to plan. So you all must pretend to be Halloween creatures`} audio={pumpkinHeadMusic2} image={pumpkinHead}/>,
    <NormalDialogue text="First, you have to be able to speak like a Halloween creature!" image={pumpkinHead} />,
    fangGame,
    <NormalDialogue text="...perhaps you should let me do the talking..." image={pumpkinHead} />,
    <NormalDialogue text={`Next, is disguises! I will use my ${magicPower} to transform you in the eyes of the Gardener.`} image={pumpkinHead} />,
    disguiseGame,
    <NormalDialogue text="I'm not sure what I'm looking at now, but you certainly all look disturbing..." image={pumpkinHead} />,
    <NormalDialogue text="Is the other team back yet? It doesn't matter, we have no time. Go talk to the merchant, see if you can figure out how to break the curse on my friends." image={pumpkinHead} />,
    <NormalDialogue text={`Go to the merchant, even if the other team is still in the other room. Press next when you're in front of the Merchant.`} />,
    <NormalDialogue text="Oh! You're still alive! Well. Most of you." image={merchantImg} audio={merchantMusic} />,
    <NormalDialogue text="Hmm, I see. Well, I don't usually give out information for free, but I don't particularly want all my customers to perish so..." image={merchantImg} />,
    <NormalDialogue text="Lucky for you, I have many books about curses, yes, let's see..." image={merchantImg} />,
    <NormalDialogue text="Ah." image={merchantImg} />,
    <NormalDialogue text="The page I'm looking for has been burned. It seems as though someone didn't want anyone getting their hands on it..." image={merchantImg} />,
    <NormalDialogue text="The only way to get the item back is to find the item's soul. You'll need some ghosts for that, and, no offense, the ghost you have with you doesn't seem very experienced in summoning objects." image={merchantImg} />,
    <NormalDialogue text="You can use my Quiche, er, I mean, my Ouija board to summon someone more experienced." image={merchantImg} />,
    <NormalDialogue text="If you succeed in your endeavor, you may return the board with no interest. Otherwise, expect an interest rate of 200%!" image={merchantImg} />,
    <NormalDialogue text="Good luck~" image={merchantImg} />,
    <NormalDialogue text="(Take the Ouija board, planchet and summoning bag. If the other team is finished, then take your shoes off and step into the cemetery. Otherwise, take the Ouija board to the lounge)" />,
    summoningRules,
    <NormalDialogue text="(When you are done summoning, put the Ouija board, bag and planchet back on the Merchant's table.)" />,
    <NormalDialogue text="oooOOOoooo" image={ghostsImg} />,
    <NormalDialogue text={["Why have you summoned us? (What do you need?)"]} image={ghostsImg} />,
    <NormalDialogue text={["The curse? (the curse...) Do we know this curse? (Maybe we can find the page) Maybe, but not for free!"]} image={ghostsImg} />,
    <NormalDialogue text={["Give us candy! (A thousand sweets!) If you have no candy... (... you'll have to Trick or Treat!)"]} image={ghostsImg} />,
    trickOrTreat,
    <NormalDialogue text={["You have our candy! (Delicious candy!) Okay, we'll find the page. (Be right back!)"]} image={ghostsImg} />,
    <NormalDialogue text={["..."]} />,
    // DCDCDC where
    <NormalDialogue text={["We found the page! (We hid it for you!) Check under the pillow on the Witch's bed!"]} image={ghostsImg} />,
    <NormalDialogue text={["Bye now! (Summon us again if you have more candy!)"]} image={ghostsImg} />,
    <NormalDialogue text={["(Find the page. Take the wands from the Witch's table. Check if the other group is finished)"]} />,
    ...endDialogue
]
//https://shirleytwofeathers.com/The_Blog/divination/ceromancy-reading-candle-wax/


const team2Dialogue = [
    <Intro />,
    ...pumpkinIntroDialogue,
    <NormalDialogue text="You lot are staying here with me. The rest will go into the portal." image={pumpkinHead} />,
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
    <DivinationRules />,
    <NormalDialogue text={`The ${merchantItem2} is yours now. I must say, Pumpkinhead buying both ${merchantItem1} and ${merchantItem2} is a little suspicious if you ask me. I'd be careful if I were you...`} image={merchantImg} />,
    <NormalDialogue text={`Ahem.`} image={merchantImg} />,
    <NormalDialogue text={`Since you're here, might I interest you in any of my other wares? I see you've got some ${magicPower} to spare`} image={merchantImg} />,
    <NormalDialogue text={`Don't look so suspicious. My wares are guaranteed to be enchanted or 50% of your money back, guaranteed.`} image={merchantImg} />,
    <NormalDialogue text={`Read the descriptions of the Merchant's wares and make a purchase if you desire. You can come back any time you'd like.`} />,
    <NormalDialogue text={`Your next stop is the witch's cabin to get some music and soup (don't forget to take off your shoes) Press next when you're in the cabin.`} />,
    <NormalDialogue text={`Hello dearies. Are you lost children looking for a new home in my soup? No? Well, what can I do for you?`} image={witchImg} audio={witchMusic} />,
    <NormalDialogue text={`Oh, you're here for the party as well! Of course, of course! The Pumpkinheads always throw such marvelous parties. I'd be happy to help.`} image={witchImg} />,
    <NormalDialogue text={`If you want music, you're gonna need a werewolf. My good friend is a werewolf. Your friends were just here to ask her to Howl at your party, but she has the date wrong. I'm afraid you'll have to call her, my voice always cracks when I howl.`} image={witchImg} />,
    <WolfRules />,
    <NormalDialogue text={`AWOOOO. Hello! Are you snacks or new friends?`} image={wolfImg} />,
    <NormalDialogue text={`Friends! Is it already time for the party?! Oh! It's in a few hours! Okay! I'll see you in a few hours! AWWOOOOOOOOoooooo...`} image={wolfImg} />,
    <NormalDialogue text={`Aaand off she goes. Don't worry, I'll make sure she doesn't get lost on the way to the party.`} image={witchImg} />,
    <NormalDialogue text={`Anyhow, was there something else you needed?`} image={witchImg} />,
    <NormalDialogue text={`I'd be happy to lend you a soup recipe! But I can't quite remember the ingredients... Could you help me?`} image={witchImg} />,
    <SoupGame />,
    <NormalDialogue text={`That sounds about right! But we'd better try it just to make sure... Add a shot of poison (XXX) if you want an extra kick!`} image={witchImg} />,
    <NormalDialogue text={`(Each prepare the soup in a cup provided, and drink it. Everyone gets 3 ${magicPower} if you got the potion right on the first try, or 2 otherwise.)`} />,
    <NormalDialogue text={`Quite a delicious recipe, if I do say so myself. ... Why are you giving me that look?`} image={witchImg} />,
    <NormalDialogue text={`I'm sure you have plenty to do before the party starts so you'd best be off. Before you go, well, I'm sure it's nothing but...`} image={witchImg} />,
    <NormalDialogue text={`It is quite odd that the Pumpkinheads are having their party so late. Typically, rain or shine, it's on Halloween. And I've only seen one Pumpkinhead recently...`} image={witchImg} />,
    <NormalDialogue text={`I'm sure I'm fussing over nothing, but maybe you should take my book. It might come in handy.`} image={witchImg} />,
    <NormalDialogue text={`(Take the Witch's book. If the other group is ready, reconvene with your the other group in the lounge.)`} />,
    ...middleDialogue,
    <NormalDialogue text="Go see if your group can get some information from the merchant." image={pumpkinHead} />,
    <NormalDialogue text="(Press next when you are in front of the Merchant)" />,
    <NormalDialogue text="Oh! You're still alive! Well. Most of you." image={merchantImg} audio={merchantMusic} />,
    <NormalDialogue text="Hmm, I see. Well, I don't usually give out information for free, but I don't particularly want all my customers to perish so..." image={merchantImg} />,
    <NormalDialogue text="Lucky for you, I've seen something about the Gardener in one of my books, yes, let's see..." image={merchantImg} />,
    <NormalDialogue text="Ah." image={merchantImg} />,
    <NormalDialogue text="The page has been burned. It seems as though someone didn't want anyone getting their hands on it..." image={merchantImg} />,
    <NormalDialogue text="The only way to get the item back is to find the item's soul. You'll need some ghosts for that, and, no offense, the ghost you have with you doesn't seem very experienced in summoning objects." image={merchantImg} />,
    <NormalDialogue text="You can use my Quiche, er, I mean, my Ouija board to summon someone more experienced." image={merchantImg} />,
    <NormalDialogue text="If you succeed in your endeavor, you may return the board with no interest. Otherwise, expect an interest rate of 200%!" image={merchantImg} />,
    <NormalDialogue text="Good luck~" image={merchantImg} />,
    <NormalDialogue text="(Take the Ouija board, planchet and summoning bag, then take your shoes off and step into the cemetery, which is totally not the same as the witch's house, it's a completely different room)" />,
    summoningRules,
    <NormalDialogue text="(When you are done summoning, put the Ouija board, bag and planchet back on the Merchant's table.)" />,
    <NormalDialogue text="oooOOOoooo" image={ghostsImg} />,
    <NormalDialogue text={["Why have you summoned us? (What do you need?)"]} image={ghostsImg} />,
    <NormalDialogue text={["The Gardener? (the Gardener...) Do we know the Gardener? (Maybe we can find the page) Maybe, but not for free!"]} image={ghostsImg} />,
    <NormalDialogue text={["Give us candy! (A thousand sweets!) If you have no candy... (... you'll have to Trick or Treat!)"]} image={ghostsImg} />,
    trickOrTreat,
    <NormalDialogue text={["You have our candy! (Delicious candy!) Okay, we'll find the page. (Be right back!)"]} image={ghostsImg} />,
    <NormalDialogue text={["..."]} />,
    // DCDCDC where
    <NormalDialogue text={["We found the page! (We hid it for you!) Look behind the Mirror on the Witch's dresser!"]} image={ghostsImg} />,
    <NormalDialogue text={["Bye now! (Summon us again if you have more candy!)"]} image={ghostsImg} />,
    <NormalDialogue text={["(Find the page. Don't forget to put all the tricks and treats in their rightful spot!)"]} />,
    <NormalDialogue text={["(Press next when you're in the lounge. If the other group is using the Ouija board, banish them to the cemetery.)"]} />,
    <NormalDialogue text={`Welcome back! I hope you were able to find some information.`} image={pumpkinHead} audio={pumpkinHeadMusic2} />,
    <NormalDialogue text={`Anyhow, if we are to fight the Gardener, we must make it appear as though everything is going according to plan. So you all must pretend to be Halloween creatures`} image={pumpkinHead} />,
    <NormalDialogue text="First, you have to be able to speak like a Halloween creature!" image={pumpkinHead} />,
    fangGame,
    <NormalDialogue text="...perhaps you should let me do the talking..." image={pumpkinHead} />,
    <NormalDialogue text={`Next, is disguises! I will use my ${magicPower} to transform you in the eyes of the Gardener.`} image={pumpkinHead} />,
    disguiseGame,
    <NormalDialogue text="I'm not sure what I'm looking at now, but you certainly all look disturbing..." image={pumpkinHead} />,
    <NormalDialogue text="It's time we reconvene and come up with a plan!" image={pumpkinHead} />,
    ...endDialogue
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