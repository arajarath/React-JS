import React from 'react';
import './UserInput.css';
import Radium from 'radium';

const userInput = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className = "UserInput" style={style}>
            Input from UserInput component, Edit Name: <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(userInput);