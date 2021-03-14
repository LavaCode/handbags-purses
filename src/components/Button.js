import React from 'react';
import '../App.css';

function Button({ buttonName, disabled }) {
    if (disabled === 'true') {
        return (
            <button disabled>{buttonName}</button>
        )
    }
    return (
        <button onClick={() => console.log(`You clicked ${buttonName}`)}>{buttonName}</button>
    )
}


export default Button;