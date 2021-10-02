import React from 'react';

const ReviewItem = (props) => {
    const {name, price, quantity, key} = props.product;
    const {handleRemoveButton, handleSingleItemRemoveButton} = props;
    return (
        <div className='product'>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p>Price: {price}</p>
                <p>Quantiyt: {quantity}</p>
                <button onClick={()=> handleRemoveButton(key)} className='btn-regular'>Remove</button>
                {/* <button onClick={() => handleSingleItemRemoveButton(key)} className='btn-regular'>-1</button> */}
            </div>
        </div>
    );
};

export default ReviewItem;