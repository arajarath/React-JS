import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className = "UserInput" >
            Input from UserInput component: <input type="text" onChange={props.changed} value={props.username}/>
        </div>
    )
}

export default userInput;