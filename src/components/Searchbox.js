import React from "react";

const Searchbox = ({search}) => {
    return (
        <div style={{height: '5rem'}}>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Presidents'
                onChange={search}
            />
        </div>
    );
}

export default Searchbox;