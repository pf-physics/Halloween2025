import "../templates/dialogue.css"
import React, { useState } from 'react';
import { Button } from '@mui/material';
import Dialogue from "../templates/dialogue";
import { useIncIndex, useDecIndex } from "../../hooks/indexHooks";
import candlesImg from "../../assets/imgs/candles.jpg"


const ans: { [key: string]: string } = {
    "Airplane": "A trip of a disappointment",
    "Anchor": "Your loved one is true",
    "Arrow": "direction, focus",
    "Baby": "Troubles are coming",
    "Ball or Balloon": "Your problem will not last very long",
    "Beans": "Money difficulties",
    "Bed": "A vacation would be good for you",
    "Bells": "A wedding",
    "Bird": "vision, clarity, news will reach you soon",
    "Book": "imagination, tradition",
    "Boot": "travel, work, industry",
    "Bridge": "Take a chance",
    "Broom": "Make a change",
    "Candle": "search for truth, spiritual growth",
    "Cat": "impetuousness, curiosity, a friend is untrue",
    "Chain": "Go ahead with your plans",
    "Chair": "marriage, stagnation",
    "Circles": "great success, reconciliation",
    "Cloud": "Something or someone threatens you",
    "Coins": "material security",
    "Crown": "leadership, ego... or sickness who knows",
    "Cross": "religious quest, do not fear for you are protected",
    "Cup": "Bitter quarrel with a friend",
    "Dog": "loyalty, dependability",
    "Ear": "Be alert for an opportunity to advance in your work",
    "Egg": "New developments soon",
    "Fan": "A surprise is in store for you",
    "Feather": "flight, independence, wanderlust, the problem will be solved",
    "Fish": "Someone will betray you",
    "Flame": "creativity, art",
    "Ghost": "Someone from the past is looking for you",
    "Grass": "Good fortune is approaching",
    "Hat": "A change of location is indicated",
    "Heart": "love, emotion, partnership",
    "House": "Better times are coming",
    "Key": "knowledge, education, opportunity",
    "Kite": "Your wish will come to naught",
    "Ladder": "Take steps to change your attitude toward an old friend",
    "Leaf or leaves": "fertility, nature, energy, things will be changing soon",
    "Letters": "references to the names of friends or relatives",
    "Lion": "An unpleasant situation is developing",
    "Moon": "denial, female intuition, more money",
    "Mountain": "Good friends are willing to help you",
    "Numbers": "indicators of spans of time, such as months or years",
    "Owl": "wisdom, isolation, nocturnal",
    "Pants": "You will be tempted",
    "Pen": "Expect a letter from a relative",
    "Pin": "Your lover may be attracted to another",
    "Pipe": "Peace and comfort",
    "Ring": "Marriage may be possible in the near future",
    "Scissors": "Separation",
    "Shoe": "Be suspicious of a new acquaintance",
    "Shovel": "manual labor, hidden depths",
    "Snake": "Be on guard against an enemy",
    "Spider": "You will grow some more legs soon",
    "Spider web": "Pleasant happenings",
    "Snail": "You are making steady progress towards certain goals",
    "Squares": "the need for caution",
    "Star": "spirituality, popularity, happiness",
    "Soup": "There is soup in your future! The soup... of destiny...",
    "Socks": "They bring warmth and comfort",
    "Sports": "You need more exercise",
    "Hockey": "You need more exercise",
    "Ball": "You need more exercise",
    "Soccer": "You need more exercise",
    "Puck": "You need more exercise",
    "Sun": "enlightenment, happiness, children, good fortune",
    "Table": "An abundance of blessings",
    "Tree": "family, stability, a good time for new undertakings",
    "Triangles": "good karma",
    "Umbrella": "Trouble is coming",
    "Vase": "material concerns",
    "Walking stick": "Get out of the house and visit friends",
    "Wheel": "One who has been away will return soon",
    "Witch": "Danger will pass you by",
    "Worm": "Business troubles ahead if you are not careful",
    "Nothing": "I see a potato in your future...",
    "Potato": "If you think about potato, you will achieve potato.",
    "Tomato": "Eat some pizza",
    "Blob": "As if! What do you mean you see a blob?",
    "Alcohol": "You are satisfied with a recent action",
    "Drugs": "You are satisfied with a recent action",
    "Drug": "You are satisfied with a recent action",
    "Booze": "You are satisfied with a recent action",
    "Beer": "You are satisfied with a recent action",
    "Garbage": "I think you were just looking at your own reflection...",
    "Trash": "I think you were just looking at your own reflection...",
    "Acorn": "Strength and durability will result in pleasant things ahead",
    "Octopus": "You have a lot on your plate",
    "Orange": "You need vitamin C",
    "Carrot": "Eat your veggies.",
    "Vegetable": "Eat your veggies.",
    "Fruit": "Eat your fruits.",
    "Sword": "You will vanquish your enemies!",
    "Ants": "You have persistence, diligence, hard work, meticulousness, and the ability to produce",
    "Pumpkin": "You are full of Halloween spirit",
    "Skull": "Are you flirting with me?",
    "Skeleton": "Are you flirting with me?",
    "Bowl": "You conain much inside of you",
    "Bone": "You should pet a dog",
    "Wolf" : "You have bones to bury",
    "Devil": "You're mad about something"
}

const penalties = ["Boobs", "Butt", "Ass", "Vagina", "Cunt", "Penis", "Shit", "Poop", "Anus"]

const DivinationRules = () => {
    const incIdx = useIncIndex()
    const decIdx = useDecIndex()
    const [inp, setInp] = useState("")
    const [used, setUsed] = useState([])
    const [reply, setReply] = useState("")


    const submit = () => {
        const idx = inp.toUpperCase().slice(0, 1) + inp.toLowerCase().slice(1)
        console.log(idx)
        if (ans[idx]) {
            setReply(`Now there's a real reading! Let's see... ${ans[idx]}`)
        } else if (penalties.includes(idx)) {
            setReply("Really? Take a penalty for that...")
        } else {
            setReply("It seems another wager is in your future... try again!")
        }
        setInp("")
    }

    const handleNext = () => {
        incIdx();
    }

    const handleBack = () => {
        decIdx();
    }



    return <div>
        <Dialogue header={"Candle Divination"}
            text={[`Each wager one Halloween power to play.`
                , `Light a long candle. One at a time, drop some wax into the water and input what you see.`
                , `if you get a positive outcome, keep your Halloween power, otherwise add it to the Merchant's box. Keep wagering until amongst the whole team, you've had at least (n-1) positive outcomes, where n is the number of players, OR until every player has played 3 times.`
                , `Press next when you are done.`
            ]} image={candlesImg} />
        <input value={inp} onChange={(e) => setInp(e.target.value)} />
        <div className="middle">
            <Button color="secondary"
                variant="contained"
                onClick={submit}>Submit</Button>
        </div>
        <div className="dialogue-text">
            {reply}
        </div>
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

export default DivinationRules