import NormalDialogue from "./templates/normal-dialogue";
import pumpkinHead from "../assets/imgs/pumpkin_head.png";
import ratsImg from "../assets/imgs/rats.png";
import introMusic from "../assets/audio/Intro_2024.mp3";
import merchantImg from "../assets/imgs/skeleton-temp.jpg";
import merchantMusic from "../assets/audio/merchant.mp3";
import spiderMusic from "../assets/audio/spiderRune.mp3";
import spiderImg from "../assets/imgs/spider6.jpg";
import ghostsImg from "../assets/imgs/ghosts.png";
import evilGuyImg from "../assets/imgs/evilGuy.png";
import pumpkinIntro from "../assets/audio/pumpkinIntro.mp3";
import pumpkinHeadMusic from "../assets/audio/pumpkinHead.mp3";
import pumpkinHeadMusic2 from "../assets/audio/pumpkinHead2.mp3";
import backstory from "../assets/audio/backstory.mp3";
import backstory2 from "../assets/audio/backstory2.mp3";
import fakeParty from "../assets/audio/fakeParty3.mp3";
import realParty from "../assets/audio/fakeParty.mp3";
import evilGuy from "../assets/audio/badGuy.mp3";
import Sammy from "../assets/imgs/Sammy.jpg";
import witchMusic from "../assets/audio/witches.mp3";
import witch2Music from "../assets/audio/witches2.mp3";
import wolfImg from "../assets/imgs/wolf.jpg";
import ghostCraft from "../assets/imgs/ghost_craft.png";
import itsy from "../assets/audio/itsy.mp3";
import relayMusic from "../assets/audio/fast.mp3";
import bossFight from "../assets/audio/bossFight.mp3";
import summoning from "../assets/audio/summoning.mp3";
import trickMusic from "../assets/audio/tricktreat.mp3";
import trickImg from "../assets/imgs/candy.jpg";
import cemteryImg from "../assets/imgs/cem2.jpg";
import firstImg from "../assets/imgs/first_img.jpg";
import graveMusic from "../assets/audio/Runescape_Halloween.mp3";
//import sadSkeleton from "../assets/imgs/skeleton_sad_eyes.png"
import shinySkeleton from "../assets/imgs/skeleton_shiny_eyes.png";
import sheetGhost from "../assets/imgs/sheet-ghost.jpg";

import TimerGame from "./scenes/timer";

import PotionRules from "./scenes/potion";
import BossBattle from "./scenes/boss-battle";
import GhostDialogue from "./templates/ghost-dialogue";
import RitualRules from "./scenes/ritual-instructions";

export const graveDiggerImg = merchantImg;
const rattlerImg = ratsImg;
const tiredCorpseImage = ghostsImg;
const lostSoulsImg = ghostsImg;
const homeCorpseImg = shinySkeleton;
const otherCorpseImg = sheetGhost;
const corruptSoulImg = spiderImg;

const otherGraveDiggerName = "Rattler";

// import GlobalDialogue from "./templates/normal-dialogue", basically the same...?

// THE INDICES MIGHT NOT BE THE SAME! ahhh, okay think about it
// globalDialogueScene = "lounge1", if both equal then okay lol
// globalDialogue = true

// don't forget the compooonnneeeent indices stuff

// FUTURE - multiple endings

const magicPower = "Halloween power";
// Delete
const merchantItem1 = "Liquid Lightning";
const merchantItem2 = "Spider Venom";
const rules = `The team who gets fewer points must take three penalties (3 sips or three squats )`;

// TODO remove all audio I guess

// TODO tombstone shapes
const tombstoneRules = (
  <NormalDialogue
    header={"TOMBSTONE ARCHITECTURE"}
    text={[
      `Everyone take a sheet of tombstone material (tin foil)`,
      `When everyone is ready, start a timer for 3 minutes`,
      `Make a tombstone by ripping the tin foil`,
      `An angel tombstone gets 8 points`,
      `A cross tombstone gets 4 points`,
      `A regular tombstone gets 2 point`,
      `If the lines are very wiggly, get half the points`,
      rules,
    ]}
  />
);

// TODO DCDCDC the rules here
const graveDiggingRules = (
  <NormalDialogue
    header={"GRAVE DIGGING"}
    text={[
      `Each team take a grave (cup) and line up`,
      `TODO - decide on rules`,
      `Winning team gets 10 points`,
      rules,
    ]}
  />
);

const corpseFindingRules = (
  <NormalDialogue
    header={"CORPSE SEARCH"}
    text={[
      `Everyone grab an EMF (one person gets the real one). Use the emf to locate corpses. You can each find a maximum of 2 corpses`, // TODO DCDCDC this
      `You have two minutes to find and dig up the corpses (a demonstration will be made)`,
      `Each corpse is worth 2 points`,
      // `-1 points if you start on an odd number`,
      //rules,
    ]}
  />
);

const callLostSoulsRules = (
  <NormalDialogue
    header={"BOBBING FOR LOST SOULS"}
    text={[
      `Take turns using the chopsticks to remove a lost soul from the water.`,
      `Unwrap the lost soul and takes the number of penalties written.`,
      `The number on the lost soul is also the row from which you must hit to get the number of points.`, // TODO - paper airplanes instead?
      `(ie - 1 = first row onwards, 2 = second row onwards, etc.)`,
      //rules,
    ]}
  />
);

const rescueCorpsesGame = (
  <NormalDialogue
    header={"RESCUE THE CORPSES"}
    text={[
      `It's time to rescue the corpses! Because you are fresh ghosts, you haven't yet manifested your arms and legs. You can only move things with your mouths.`,
      `Everyone grab a chopstick and make two lines up to the corpses.`,
      `When both teams are ready, move the corpses to the other side of the room, passing them from person to person.`,
      `Count the number of corpses each team moved, this is the number of points they get.`,
    ]}
  />
);

const summonCrowGame = (
  <NormalDialogue
    header={"SUMMON CROW MESSENGERS"}
    text={[
      `Warn the residents of the other cemetery by summoning crow messengers.`,
      `Each member take two pieces of "summoning paper" (black paper) and fold them into crows (paper airplane).`,
      `One at a time, stand in front of the mirror beside the bookcase and throw the crow to the other cemetery.`,
      // TODO - double check points
      `3 points for getting on the dresser. 2 points for getting it past the gate. 1 points for getting it in the room.`,
    ]}
  />
);

const dissectionGame = (
  <NormalDialogue
    header={"DISSECT A CORPSE"}
    text={[
      `Head over to the morgue and uncover the corpse.`,
      `Use the knife to cut open the stomach.`,
      `Get one point for each team member brave enough to reach in and grab a bone.`,
      `Wash the bones with the cloth beside the corpse.`,
    ]}
  />
);

const dialogue2024 = [
  <NormalDialogue
    text="Halloween 2024 >:)"
    image={firstImg}
    answers={["tombstone"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "With Halloween night only a few weeks away, creatures of the night are busy preparing for its arrival.",
      "In an ordinary graveyard like any other, a lonestome grave digger is busy digging graves for the lost souls that will soon arrive...",
    ]}
    audio={introMusic}
    image={cemteryImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Another day... another empty grave to fill... *mumble mumble*"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Well, hello there! Welcome to my graveyard, I hope you'll choose to-"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Ah. You're alive. Then have you perhaps come to reserve your future tombstone?"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Oh you're here for the party... Well, this is a little awkward. You see, the party is actually for lost souls, and yours seem pretty at home in your body so..."
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Though I suppose you could be future residents *mumble mumble*"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Tell ya what. If you help me get things ready, you can join in on the fun! Do we got a deal?"
    image={graveDiggerImg}
    answers={[
      "yes",
      "of course",
      "i guess",
      "sure",
      "okay",
      "ok",
      "k",
      "kk",
      "yeah",
      "ya",
      "ye",
      "deal",
      "We have a deal",
      "sounds good",
    ]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Good on ya!"
    image={graveDiggerImg}
    answers={[]}
    audio={graveMusic}
    isGlobal={true}
  />,
  <NormalDialogue
    text="The name's Mort, it'll be a pleasure working with ya, I'm sure"
    image={graveDiggerImg}
    answers={[]}
    audio={graveMusic}
    isGlobal={true}
  />,
  // DCDC lost humans, wayward humans?
  <NormalDialogue
    text="So you see, this here's a party for lost souls, real ones, not just lost humans. We wanna thank em for all they do for us an' try to show em that our graveyard is a nice place to take a rest. Every graveyard does the same thing around Halloween."
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="I've dug some new comfy graves, but we need some tombstones to go with them."
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  tombstoneRules,
  <NormalDialogue
    text="Hm. Those sure are some... intersting tombstones. Well you did your best."
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="You know, the corpses that live here are supposed to help, but they've been keeping to themselves recently... I'm sure once the music gets pumping, they'll come out! I hope... *mumble mumble*"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="You know what?! Let's wake 'em up! I'm not letting em get away with snoozing at the most important time of the year!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  graveDiggingRules,
  <NormalDialogue
    text="The graves are empty... they all left!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="boo hoo hoo... my graveyard is a failure! Why did they leave meeeee?! Are the tombstones not shiny enough? Graves not deep enough?!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Hold on a tic! Ghosts can't move their own bodies? How did they leave?!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="There's gotta be some corpses around here somewhere... I need you lot to go find them!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  corpseFindingRules,
  <NormalDialogue
    text="I knew there were some left! Oi! Wake up!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="*yawn* What's all the ruckus?"
    image={tiredCorpseImage}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Halloween is soon! I need you lot"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="You're not pulling one over me again! Lost souls might help the other souls keep their plots clean, but I live in an unmarked grave! Why should I care about them when my plots overrun by weeds and trash!"
    image={tiredCorpseImage}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="..."
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Er, my mistake. Would you care for one of these tombs?"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Those are tombs?"
    image={tiredCorpseImage}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Ahem. Never mind. Before you go back to sleep... you got any idea where everyone else is...?"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="The other corpses? They're in the graveyard next door."
    image={tiredCorpseImage}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="..."
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="They really did abandon me!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Don't be silly. They were all taken by some lost souls! We corpses can't move ourselves!"
    image={tiredCorpseImage}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Oh. Right! Well we gotta get over there and bring em' back!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="You do that. I'm going back to sleep. zzzzzzzZZZZZzzzzzz..."
    image={tiredCorpseImage}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="No time to waste! Let's go get em!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  // DCDCDC - change the name probably
  <NormalDialogue
    text="What's this other graveyard called anyways?!"
    image={graveDiggerImg}
    answers={["Cool Guy Cemetery"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="I've met the grave digger over there. He was a lil greedy but never struck me as the thieving type... You think you know a guy!"
    image={graveDiggerImg}
    isGlobal={true}
  />,
  <NormalDialogue
    text="But they got some crazy security over there. We better fight fire with fire!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="I don't like havin' to call em up so close to Halloween but we got no choice! We gotta get help from the lost souls!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  callLostSoulsRules,
  // TODO - change the CSS
  <GhostDialogue
    text="How can we be... how can we be... of service?"
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="That cemetery over there's gone and stolen all our corpses! We need your help gettin' em back"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text="................"
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text="some lost souls have gone to the cemetery..."
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text="those lost souls... they come back... different... changed... wrong..."
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text="we cannot go... we will not go..."
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Well aint that fantastic! What're we supposed to do then?"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Hold on... I'm bound to this graveyard so I can't leave... but YOU lot can go anywhere!"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="But their security is real tight"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text="we know a way... we know a secret..."
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text="*whisper whisper*"
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Hm. A potion eh? That should do the trick! So how do we make this thing?"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text="Answer our riddles... and the potion... will be revealed"
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <PotionRules />,
  <NormalDialogue
    text="Did ya drink the potion? If not, ya better hurry up and do it! (write done when everyone has drank the potion)"
    image={graveDiggerImg}
    answers={["done"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="It should a lil while to take effect. Take a break for the time bein'."
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <TimerGame />,
  // in the graveyard game - a chain of ppl? (spoon in mouth or something) chopsticks in mouth? moving rings (souls) from one side to the other. Bones is better tho

  // "I didn't want to disturb them since this is the one time a year they get to let loose"
  // "Lost souls help with upkeep and security"
  <NormalDialogue
    text="This potion will allow your soul to leave your body to secretly infiltrate the other cemetery."
    audio={witch2Music}
    globalScene="intermission"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="So it is effectively poison"
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Don' get yer panties in a twist! These here souls'll enter yer bodies to keep em' warm. You just gotta be quick about it or they'll snatch em fer good.",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="The potion made you poltergeists, so yer not tied to yer bodies and can move stuff around."
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "But lookin at you lot... yer arms n' legs haven't manifested yet. Yer like lil baby ghosts.",
      "You still have yer mouths at least. That'll have to do.",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Best be on yer way. We'll keep yer bodies safe n' sound."]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text={"Think I can do a flip?"}
    image={Sammy}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["*ahem* Off you go!"]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Write 'Next' when you're in front of the other cemetery"]}
    answers={["Next"]}
    isGlobal={true}
  />,
  rescueCorpsesGame,
  <NormalDialogue
    text={[
      "Bring the corpses back to the cemetery. Write Next when you've returned.",
    ]}
    answers={["Next"]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["The corpses! You brought em' back!"]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  // TODO - allow ghosts?
  <NormalDialogue
    text={[
      "I suppose you want yer bodies back (take three penalties to become human again)",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Broken bones? I'm sure yer bones have always been broken."]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Boss! We're finally home!"]}
    image={homeCorpseImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Welcome home, harold."]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "It was awful! He told us he'd bring us home if we worked for him, but he worked us to the bone! He made us clean and dig graves all day. We didn't even get to sleep in them! He just wanted to attract lost souls. And whenever one would show up, he'd eat them! It was horrifying.",
    ]}
    image={homeCorpseImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Yeah, yeah, it's all over now"]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Wait a tick. He was eating lost souls?"]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Yeah! He'd just go 'SHOOP' and they were gone!"]}
    image={homeCorpseImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Sometimes he'd spit them out after, but they were always different after that.",
    ]}
    image={homeCorpseImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "I heard of lost souls eating other lost souls. Never heard of gravekeepers doin it. You sure that's what you saw?",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Everything he says is true."]}
    image={otherCorpseImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Who're you? You're not from this cemetery!"]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "I snuck my corpse in with yours while they were getting rescued. I had to escape the cemetery, before I got absorbed too.",
    ]}
    image={otherCorpseImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Absorbed? What are you going on about?"]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "There's something wrong with my cemetery's gravekeeper, Rattler. One day he absorbed a lost soul and he's been different ever since. He works day and night trying to lure in lost souls so he can absorb them. I thought I was safe, but I saw him absorb a regular ghost the other day so I knew I had to escape.",
    ]}
    image={otherCorpseImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "Rattler's always been a lil obsessed with attracting lost souls, but he'd never hurt his own residents. Something strange is afoot.",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  // DCDCDC - number of points
  <NormalDialogue
    text={[
      "You lot got any idea what's goin' on?",
      "(Hint: If you don't know, try talking to Mort through the menu. The first to guess the correct answer gets 5 points)",
    ]}
    image={graveDiggerImg}
    answers={[
      "Corruted souls",
      "Corrupted soul",
      "Corrupt soul",
      "Corrupt souls",
    ]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["Corrupted souls? I reckon that might explain it!"]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,

  <NormalDialogue
    text={[
      `So ${otherGraveDiggerName} didn't absorb the soul, the corrupted soul possessed him!`,
    ]}
    image={otherCorpseImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "With the number of souls he's absorbed, there's no telling how strong he is now",
      "We gotta exorcise him before he reaches 1000 souls, or he'll start absorbing souls from living humans!",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue
    text={[
      "Is there another way?",
      "Many of our friends have been absorbed.",
      "We don't want to lose them",
    ]}
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={["There is a way... but it's much more dangerous."]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <GhostDialogue text="🥺" image={lostSoulsImg} answers={[]} isGlobal={true} />,
  <NormalDialogue
    text={["Don' look at me with those big ol' eyes, we'll do it."]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "We gotta do a ritual to summon and bind him. Then we can cut out the souls he ate.",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "In the meantime, we oughta warn the souls in the other cemetery. They can't leave the cemetery, since their bodies are there, but they can hide from Rattler. It's too dangerous to go back there so we gotta send some messengers.",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  summonCrowGame,
  <NormalDialogue
    text={[
      "We need a bunch of ingredients for the ritual. I got most of them here but I'll need you to fetch some.",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "We need bones from a fresh corpse. I'm sure the morgue'll have a body.",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  dissectionGame,
  <RitualRules />,
  <NormalDialogue
    text={[
      "Cause of the potion, you lot still got some ghostly powers, but this also means it's easy for Rattler to absorb your souls.",
      "You can channel ectoplasm with these here devices to bind him and extract the souls.",
      "I'll show you where to aim the ectoplasm. You don't got infinite ectoplasm, so you might hav'ta switch out partway through.",
    ]}
    image={graveDiggerImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text={[
      "When everyone has their weapons and is ready to fight, extinguish the incense in the ritual bowl and insert the secret code",
    ]}
    globalScene="bossBattle"
    answers={["HalloweenTime"]}
    isGlobal={true}
  />,
  <BossBattle />,
  <NormalDialogue text="Uugghhh..." image={rattlerImg} isGlobal={true} />,
  <NormalDialogue
    text="Rattler? Is that you?"
    image={graveDiggerImg}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Hm? Mort?! What's going on here? Last thing I remember I was making a deal with a lost soul..."
    image={rattlerImg}
    isGlobal={true}
  />,
  <NormalDialogue
    text="What have I told you about accepting shady deals?"
    image={graveDiggerImg}
    isGlobal={true}
  />,
  <NormalDialogue
    text="It seemed like a good idea at the time..."
    image={rattlerImg}
    isGlobal={true}
  />,
  <GhostDialogue
    text="Where am I... who am I...?"
    image={corruptSoulImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue text="..." image={graveDiggerImg} isGlobal={true} />,
  <NormalDialogue
    text="Yer Mort junior. Yer a resident of this graveyard. You seem t'ave lost yer memory, and your skeleton. But those bones in that there bowl look like they might fit you."
    image={graveDiggerImg}
    isGlobal={true}
  />,
  <GhostDialogue
    text="I am...?"
    image={corruptSoulImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Yes. I am. Of course."
    image={corruptSoulImg}
    isGlobal={true}
  />,
  <GhostDialogue
    text="We are free..... we are alive.... sort of..."
    image={lostSoulsImg}
    answers={[]}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Well the graveyard's a mess, but we all made it out undead."
    image={graveDiggerImg}
    isGlobal={true}
  />,
  <NormalDialogue
    text="It's a little early, but I reckon we deserve ourselves a party!"
    image={graveDiggerImg}
    isGlobal={true}
  />,
  <NormalDialogue
    text="I know a made a huge mess out of things, but let's party!"
    image={rattlerImg}
    isGlobal={true}
  />,
  <NormalDialogue
    text="Happy Halloween!"
    image={graveDiggerImg}
    isGlobal={true}
  />,
];

// -1 point every place you get string anywhere but the paper

// the page says something like,
// Mix up groups again
// "Gourd(s)", "Treat(s)", "Trick(s)", "Bats", "Spider", "Cats"
const breakCurse1 = (
  <NormalDialogue
    header={"BREAK THE CURSE - PART 1"}
    isGlobal
    text={[
      `Using the wands and a long exposure photograph where each person draws a pumpkin. (Try to fit a few people in each picture)`,
      `In one photograph, write all together "Free Gourds"`,
      //, write: Free Gourd(s) or Free Pumpkin (depending on how many people there are)`,
      `Look at the pictures and vote on the best drawing. The winner gets 3 ${magicPower}, second place gets 2, third gets 1.`,
    ]}
  />
);

// maybe just add timer to normal dialogue?
const breakCurse2 = (
  <NormalDialogue
    header={"BREAK THE CURSE - PART 2"}
    isGlobal
    text={[
      `The Pumpkin's souls have been freed! But they need a new vessel before it's too late!`,
      `Everyone grab a bell pepper and a knife. When everyone is ready, you have 5 minutes to carve out the pepper with a face.`,
      `Each take a cursed plate, and draw the symbol on it. Put the pepper on top.`,
      `Vote on the best pumpkin, er, pepper. The winner gets 3 ${magicPower}, second place gets 2, third gets 1.`,
    ]}
  />
);

const finalFight = (
  <NormalDialogue
    header={`"Water" the Tree`}
    text={[
      `Take the pot of cursed soil from amongst the plants`,
      `Saturate the middle of the soil with fermented toad blood`,
      `Mix together 4 tsp of crystallized banshee tears and 1 tsp of ground tombstone, put them on top of the fermented blood.`,
      `Set it all ablaze`,
      `Wait for the growing roots to settle, then cut off a piece and grind it in a bowl with water`,
      `On another plate, write the sealing symbol and place the ugliest carved pepper on top`,
      `Remove the rest of the root and dig until you find the seed.`,
    ]}
  />
);

const stickerRules = `First place winner gets 4 ${magicPower}, second gets 3, third gets 2, fourth gets 1. In case of ties, both players get the same number`;

const summoningRules = (
  <NormalDialogue
    header={"GHOST SUMMONING"}
    audio={summoning}
    text={[
      `Sit in a circle around the board.`,
      `Each team member must write down 5 words on the blank pieces and place them in a pile beside the board.`,
      `One at a time, pick a word from the pile (don't show it to anyone)`,
      `Hold the string at the halfway point over the board (The planchet must hover oven the board without touching it).`,
      `Set a timer for one minute. By moving the planchet from letter to letter, the other teammembers must guess what the word is. Try to spell as many as you can.`,
      `The person moving the planchet and the person who guess the word correctly both get a point. (You cannot guess a word that you wrote)`,
      `Handicaps: Ghosts must hold the string from the top`,
      stickerRules,
    ]}
  />
);

// TODO - all areas have same dialogue, depending on team, return different order (future task after Halloween2023)
export const getDialogue = (team: string) => {
  return dialogue2024;
};

export default getDialogue;
