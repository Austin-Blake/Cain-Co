import React, { useContext, useEffect } from 'react';
import MyContext from '../../Context/MyContext';

import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';

export const Products = ({ heading }) => {
    const myContext = useContext(MyContext);
    const { getProducts, loading, products } = myContext;

    useEffect(() => {
       getProducts();
    }, []);


    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {products.map((product) => {
                    return (
                        <ProductCard key={product.id}>
                            <ProductImg src={product.image} alt={product.title}/>
                            <ProductInfo>
                                <ProductTitle>{product.title}</ProductTitle>
                                {/* <ProductDesc>{product.description}</ProductDesc> */}
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>Add To Cart</ProductButton>
                            </ProductInfo>
                        </ProductCard>  
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}
