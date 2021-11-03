import React from "react";
import './cards.css';

const Card = ({id, name, date, party, img }) => {
    return(
        <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <p className='id'>#{id}</p>
             <img src={require(`${img}`).default} alt='' className='photo' />
            <div>
                <h2>{name}</h2>
                <p> <strong>Party: {party}</strong></p>
                <p>({date})</p>
            </div>
        </div>
    );
}

export default Card;