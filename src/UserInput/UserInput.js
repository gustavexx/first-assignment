import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: 'yellow',
        font: 'inherit',
        border: '3px solid green',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <div style={style}>
            <input onChange={props.change} type="text" value={props.userName} />
        </div>
    );

}
export default userInput;
