import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';

export const Cart = () => {
    const myContext = useContext(MyContext);
    const {dispatch, cart } = myContext;
    console.log(cart);
    return (
        <div>
            <ul>
                {cart.map(item => {
                    return <li key={item.styleId}>{item.productName}</li>
                })}
            </ul>
             
        </div>
    )
}
