import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

    return (
        <div className="UserOutputClass">
            <p>Paragraph1, username is {props.userName}
            </p>
            <p>Paragraph2</p>
        </div>

    );


}
export default userOutput;