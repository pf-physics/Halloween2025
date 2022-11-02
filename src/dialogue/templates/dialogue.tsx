import "./dialogue.css"
import React from 'react';

const Dialogue = ({text, image, header}: {text: string | string[], image?: string, header?: string}) => {

    const getText = () => {
        if (typeof(text) === "string") {
            return <p>{text}</p>
        } else {
            return <div>
                {text.map((t,id) => <p key={`pong_${id}`}>{t}</p>)}
            </div>
        }
    }

    return <div className="dialogue">
            {image ? <img className='profile' src={image}/> :
            <div className="profile-small"/>}
            <div className="title">
                {header}
            </div>
        <div className="dialogue-text">
            {getText()}
        </div>
    </div>
}

export default Dialogue