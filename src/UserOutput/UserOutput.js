import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput" style={props.style} onClick={props.click}>
            <p>User Name From App component to UserOutput component: <strong>{props.name}, {props.age} years old</strong></p>
            <p></p>
        </div>
    )
}

export default userOutput;