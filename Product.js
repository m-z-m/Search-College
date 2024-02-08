import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Products(props) {
    const [rating, setRating] = useState(0);
    const [selectedStars, setSelectedStars] = React.useState(0); // New state for selected stars
    

    const handleClick = (index) => {
        // If the clicked star is already filled, set rating to 0 (no stars filled)
        // Otherwise, set it to index + 1
        setRating(index + 1 === rating ? 0 : index + 1);
    };

    return (
        <div className='productList'>
            <div key={props.productId} className='productCard'>
                <div style={{ width: '25%' }}>
                    <img src={props.image} alt='product-img' className='productImage'></img>
                </div>
                <div style={{ width: '60%' }} className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <h2 className='heading'>
                    <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setSelectedStars(star)}
                style={{ cursor: 'pointer',fontSize:"25px", color: star <= selectedStars ? 'gold' : 'gray' }}
              >
                ★
              </span>
            ))}
            </div>
                        <span className='heading11'>{props.rating} Reviews</span>
                    </h2>
                    <div className='displayStack__2'>
                        <div className='productTime'>Approved by: {props.timeLeft}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
