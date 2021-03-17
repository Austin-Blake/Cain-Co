import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context/MyContext';
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
SizeWrapper,
ProductButton} from './ProductDetailElements';

export const ProductDetails = ({match}) => {
    const myContext = useContext(MyContext);
    const { products, dispatch, cart } = myContext;

    
    //filter products array for product id that matches Router (match.params.id)
    //to get the right product to display

    //Attempting to fix undefined product[0] with adding to global state
    
      let item = products.filter(product => product.styleId === match.params.id);
      const [productItem, setProductItem] = useState(item);
    useEffect(() => {
        setProductItem(item);
        dispatch({type: 'SET_ITEM', payload: productItem})
    console.log(cart);
    console.log(item);
    console.log(productItem);
    },[cart])
    

    return (
        
        <ProductsContainer>
            <ProductBrand>Made by: {productItem[0].brand}</ProductBrand>
            <ProductWrapper>
                <ProductImg src={productItem[0].image} alt={productItem[0].productName}/>
                <ProductCard>
                    <ProductInfo>
                        <ProductTitle>{productItem[0].productName}</ProductTitle>
                        <ProductDesc>{productItem[0].description}</ProductDesc>
                    </ProductInfo>
                    <hr></hr>
                    <DetailWrapper>
                    {productItem[0].details.map(item => {
                           return <ProductDetail>{item}</ProductDetail>
                    })}
                    </DetailWrapper>
                    <SizeWrapper>
                        {productItem[0].size.map(item => {
                            return <ProductSizes>{item}</ProductSizes>
                        })}
                    </SizeWrapper>
                    <DetailWrapper>
                        <ProductPrice>{productItem[0].price}</ProductPrice>
                        <ProductButton onClick={() => {
                            return productItem[0] ? dispatch({ type: 'ADD_TO_CART', payload: productItem[0] }) : null;
                        }}>Add to Cart</ProductButton>
                    </DetailWrapper>
                </ProductCard>  
             </ProductWrapper>
        </ProductsContainer>
    )
}
