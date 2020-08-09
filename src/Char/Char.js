import React from 'react';

const char = (props) => {

    const style = {
        display : 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid #000000'
    }

    return (
        <div onClick={props.clicked} style={style}>{props.character}</div>
    )
}

export default char;