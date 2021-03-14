import React from 'react';
import '../App';

function Tile({ className, image, title, text, children }) {
    if (title === undefined)
        return (
            <section className={className}>
                <img className="footerImage" src={image} alt={title}></img>

            </section>
        );
    else {
        return (
            <section className="tile">
                <h2 className="footerTitle">{title}</h2>
                <p className="footerText">{text}</p>
                {children}
            </section>
        )
    }
}

function log(boolean) {
    if (boolean === 'true') {
        console.log('this is a image');
    }
}

export default Tile