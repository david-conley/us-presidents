import React from "react";
import './cards.css';

const Card = ({id, name, date, img }) => {
    return(
        <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
             <img src={require(`${img}`).default} alt='' className='photo' />
            <div>
                <h2>{name}</h2>
                <p> <strong>President #{id}</strong></p>
                <p>({date})</p>
            </div>
        </div>
    );
}

export default Card;