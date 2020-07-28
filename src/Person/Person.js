import React from 'react';

const person = (props) => {
    return (
        <div className="person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} type="text"/>
        </div>
    )
}

export default person;