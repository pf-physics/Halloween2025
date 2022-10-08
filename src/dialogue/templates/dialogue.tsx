import "./dialogue.css"
import React from 'react';

const Dialogue = ({text, image}: {text: string, image: string}) => {

    return <div className="dialogue">
            <img className='profile' src={image}/>
        <div className="dialogue-text">
            {text}
        </div>
    </div>
}

export default Dialogue