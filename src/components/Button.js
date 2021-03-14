import React from 'react';
import '../App.css';

function Button({ buttonName }) {
    if (buttonName === 'pre-orders'){
        return (
            <button type="button" disabled>{buttonName}</button>
        )
    } else {
        return (
            <button type="button">{buttonName}</button>
            )
    }
}

export default Button;