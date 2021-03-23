import React, { useContext, useEffect } from 'react';
import MyContext from '../../Context/MyContext';
import {
    CartContainer,
    CartStatus,
    CartImg,
    QuantityContainer,
    QuantityButton,
    ItemContainer,
    TotalContainer,
    ItemH1,
    ItemH4,
    Span,
    InfoContainer,
} from './CartElements'

export const Cart = () => {
    const myContext = useContext(MyContext);
    const { dispatch, cart, total } = myContext;
    console.log('Cart:',cart);

    useEffect(() => {
        dispatch({ type: 'TOTAL' });
    },[cart, dispatch])
    if (cart.length > 0) {
            
            return (
                
                <CartContainer>
                    {cart.map(item => {
                        return (
                            <ItemContainer key={item.id}>
                                <CartImg src={item.image} />
                                <ItemH1>{item.productName}</ItemH1>
                                <InfoContainer>
                                    <ItemH4>Size <Span>{item.currentSize}</Span></ItemH4>
                                    <ItemH4>Item Price <Span>${item.price}</Span></ItemH4>
                                    <QuantityContainer>    
                                        <QuantityButton onClick={() => dispatch({ type: 'INCREMENT', payload: item })}>+</QuantityButton>

                                        <ItemH4><Span>{item.amount}</Span></ItemH4>
                        
                                        <QuantityButton onClick={() => item.amount > 1 ? dispatch({ type: 'DECREMENT', payload: item }) : dispatch({ type: 'DELETE_FROM_CART', payload: item })}>-</QuantityButton>
                                    </QuantityContainer>
                                </InfoContainer>
                            </ItemContainer>
                                    
                        )
                    })}
                    <TotalContainer>
                        <ItemH1>Cart Total</ItemH1>
                        <p>${total}</p>
                        <button onClick={() => dispatch({ type: 'EMPTY_CART' })}>Clear Cart</button>
                    </TotalContainer>
                    
                    
                </CartContainer>//add amount to product objects, then check if current item is in cart if yes increment item.amount, for delete decrement until item.amount === 1 then remove item from cart array. 
            )
        } else {
            return (
                <CartContainer>
                <span>Balance: ${total}</span>
                <CartStatus>Cart is empty</CartStatus>
                </CartContainer>)
        }
}
