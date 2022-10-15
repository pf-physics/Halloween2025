import "./dialogue.css"
import React from 'react';

const Dialogue = ({text, image, header}: {text: string, image?: string, header?: string}) => {

    return <div className="dialogue">
            {image ? <img className='profile' src={image}/> :
            <div className="profile"/>}
            <div className="title">
                {header}
            </div>
        <div className="dialogue-text">
            {text}
        </div>
    </div>
}

export default Dialogue