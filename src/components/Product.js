import React from 'react';
import '../App';

function Product({ image, label, name, price }) {
    return (
        <article className="product">
            <span className="imageLabel">{label}</span>
            <img className="itemImage" src={image} alt={name}></img>
            <p className="itemName">{name}</p>
            <h4 className="itemPrice">{price}</h4>
        </article>
    );
}

export default Product;