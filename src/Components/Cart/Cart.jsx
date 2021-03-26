import React, { useContext, useEffect } from 'react';
import MyContext from '../../Context/MyContext';
import { Navbar } from '../Navbar';
import {CurrentBrands} from '../CurrentBrands/CurrentBrands'
import {
    CartContainer,
    EmptyCartContainer,
    CartStatus,
    CartImg,
    QuantityContainer,
    QuantityButton,
    ItemContainer,
    TotalContainer,
    ItemH1,
    ItemAmountDiv,
    ItemH4,
    Span,
    InfoContainer,
    CartDiv,
} from './CartElements'

export const Cart = () => {
    const my_Context = useContext(MyContext);
    const { dispatch, cart, total, itemAmount } = my_Context;

    useEffect(() => {
        dispatch({ type: 'TOTAL' });
    }, [cart, dispatch]);


    if (cart.length > 0) {
            
            return (
                <>
                <Navbar/>
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
                                        <QuantityButton onClick={() => item.amount > 1 ? dispatch({ type: 'DECREMENT', payload: item }) : dispatch({ type: 'DELETE_FROM_CART', payload: item })}>-</QuantityButton>

                                        <ItemH4><Span>{item.amount}</Span></ItemH4>

                                        <QuantityButton onClick={() => dispatch({ type: 'INCREMENT', payload: item })}>+</QuantityButton>
                                    </QuantityContainer>
                                </InfoContainer>
                            </ItemContainer>
                                    
                        )
                    })}
                    <TotalContainer>
                        <ItemH1>Cart Total<ItemAmountDiv>{itemAmount}</ItemAmountDiv></ItemH1>
                        <p>${total}</p>
                        
                        <button onClick={() => dispatch({ type: 'EMPTY_CART' })}>Clear Cart</button>
                    </TotalContainer>
                    
                    
                    </CartContainer> 
                </>
            )
        } else {
        return (
            <>
                <Navbar />
                <CurrentBrands />
                <EmptyCartContainer>
                    <CartDiv>
                        <Span>Balance: ${total}</Span>
                        <Span>Total Items: {itemAmount}</Span>
                    <CartStatus>Your Cart Is Empty</CartStatus>
                    </CartDiv>
                </EmptyCartContainer>
            </>
            )
        }
}
