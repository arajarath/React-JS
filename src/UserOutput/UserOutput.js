import React from 'react';

const userOutput = (props) => {
    return (
        <div className="UserOutput" style={props.style}>
            <p>User Name From App component to UserOutput component: <strong>{props.username}</strong></p>
            <p></p>
        </div>
    )
}

export default userOutput;