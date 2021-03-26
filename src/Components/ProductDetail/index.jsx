import React, { useContext, useEffect, useState } from 'react';
import { calculateAmount } from '../../Context/helper';
import MyContext from '../../Context/MyContext';
import {Navbar} from '../Navbar/index'
import {
    ProductsContainer,
    ProductWrapper,
    ProductCard,
    ProductDesc,
    DetailWrapper,
    ProductDetail,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductBrand,
    ProductPrice,
    ProductSizes,
    DisplayProductSize,
    SizeWrapper,
    ProductAddButton,
    ProductAmountButton,
    AmountWrapper,
    ProductAmount,
    GoToCartButton
} from './ProductDetailElements';


export const ProductDetails = ({match}) => {
    const my_Context = useContext(MyContext);
    const { products, itemAmount, dispatch, size, setSize} = my_Context;
    
    //filter products array for product id that matches Router (match.params.id)
    //to get the right product to display
    let displayItem = products.filter(product => product.styleId === match.params.id);
    //reduce filter output to single object
    let item = displayItem[0];

    return (
        <>
        <Navbar />
        <ProductsContainer>
            <ProductBrand>Made by: {item.brand}</ProductBrand>
            <ProductWrapper>
                <ProductImg src={item.image} alt={item.productName}/>
                <ProductCard>
                    <ProductInfo>
                        <ProductTitle>{item.productName}</ProductTitle>
                        <ProductDesc>{item.gender}'s </ProductDesc>
                        <ProductDesc>{item.description}</ProductDesc>
                    </ProductInfo>
                    <hr></hr>
                    <DetailWrapper>
                    {item.details.map((product, i) => {
                           return <ProductDetail key={i}>{product}</ProductDetail>
                    })}
                    </DetailWrapper>
                    <SizeWrapper>
                        {item.size.map((product) => {
                            return <ProductSizes key={product} value={product} onClick={(e) => setSize(item.currentSize = parseFloat(e.target.value)) }>{product}</ProductSizes>
                        })}
                    </SizeWrapper>
                    <DisplayProductSize> {size}</DisplayProductSize>
                    <DetailWrapper>
                            <ProductPrice>{item.price}</ProductPrice>
                            <AmountWrapper>         
                                <ProductAmountButton onClick={() => item.amount >= 2 ? (dispatch({ type: 'DECREMENT', payload: item }), item.id = Date.now() ): null}>-</ProductAmountButton>
                                    <ProductAmount><span>{item.amount}</span></ProductAmount>
                                <ProductAmountButton onClick={() => { dispatch({ type: 'INCREMENT', payload: item }); item.id = Date.now(); }}>+</ProductAmountButton>
                        </AmountWrapper>
                        <ProductAddButton onClick={() => {
                            if (item.currentSize && item.amount > 0) {
                                item.id = Date.now();
                                dispatch({ type: 'ADD_TO_CART', payload: item });
                                dispatch({ type: 'AMOUNT' });
                                dispatch({ type: 'TOTAL' });
                            } else {
                                alert('Must select Size')
                                return null
                            }
                            }}>Add to Cart</ProductAddButton>
                            <ProductAmount>Cart Amount: {itemAmount}</ProductAmount>
                        <GoToCartButton to={item.currentSize && item.amount > 0 ? "/cart" : '#'}> Go To Cart</GoToCartButton>
                    </DetailWrapper>
                </ProductCard>  
             </ProductWrapper>
            </ProductsContainer>
        </>
    )
}
