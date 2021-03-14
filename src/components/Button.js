import React from 'react';
import '../App.css';

function Button({ buttonName, disabled }) {
    if (disabled === 'true') {
        return (
            <button type="button" disabled>{buttonName}</button>
        )
    }
    return (
        <button type="button">{buttonName}</button>
    )

}

export default Button;