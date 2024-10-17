import React from 'react';
import './Card.css';

const Card = ({ image, alt }) => {
    // generate random rotation between -20 and 20 deg
    const rotation = Math.floor(Math.random() * 20) - 10;
    const cardStyle = {
        transform: `rotate(${rotation}deg)`
    }
    return (
        <>
            <img
                className="Card"
                src={image}
                alt={alt}
                style={cardStyle}
            />
        </>
    )
}


export default Card;