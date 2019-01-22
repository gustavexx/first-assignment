import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '3px solid green',
        padding: '8px',
        cursor: 'pointer'
    };

    return (

        <input
            style={style}
            onChange={props.change}
            type="text"
            value={props.userName} />
    );

}
export default userInput;
