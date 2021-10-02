import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { getStoredCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveButton = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }

    // const handleSingleItemRemoveButton = key =>{
    //     removeSingleItemFromDb(key);
    //     const newCart = cart;
    //     const item = newCart.find(product => product.key === key)
    //     console.log(item)
    //     --item.quantity;
    //     console.log(item)
    //     console.log(newCart)
        
    // }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map( product => <ReviewItem
                        key={product.key}
                        handleRemoveButton={handleRemoveButton}
                        // handleSingleItemRemoveButton={handleSingleItemRemoveButton}
                        product={product}
                        ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;