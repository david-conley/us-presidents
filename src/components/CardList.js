import React from "react";
import Card from './Card';

const CardList = ({presidents}) => {
    return (
        <div>
            {
                presidents.map((pres, i) => {
                    return (
                        <Card 
                            key={presidents[i].id} 
                            id={presidents[i].id} 
                            name={presidents[i].name} 
                            date={presidents[i].date} 
                            party={presidents[i].party}
                            img={presidents[i].img}/>
                    )
                })
            }
        </div>        
    );
}

export default CardList;
