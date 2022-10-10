import "./dialogue.css"
import React from 'react';

const Dialogue = ({text, image}: {text: string, image?: string}) => {

    return <div className="dialogue">
            {image ? <img className='profile' src={image}/> :
            <div className="profile"/>}
        <div className="dialogue-text">
            {text}
        </div>
    </div>
}

export default Dialogue