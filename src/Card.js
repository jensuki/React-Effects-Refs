import React, { useState } from 'react';
import './Card.css';

const Card = ({ image, alt }) => {
    // Use state to store the random rotation only once
    const [rotation] = useState(Math.floor(Math.random() * 20) - 10);

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
    );
}

export default Card;
