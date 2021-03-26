import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import { Navbar } from '../Navbar';
import { CurrentBrands } from '../CurrentBrands/CurrentBrands';
import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitleLink,
    ProductPrice,
} from './ProductsElements';

export const Products = () => {
    const my_Context = useContext(MyContext);
    const {products} = my_Context;



    return (
        <>
            <Navbar />
            <CurrentBrands />
        <ProductsContainer>
            <ProductsHeading>Cain's Catalog</ProductsHeading>
            <ProductWrapper>
                {products.map((product) => {
                    return (
                        <ProductCard key={product.styleId}>
                            <ProductImg src={product.image} alt={product.productName}/>
                            <ProductInfo>
                                <p>{product.gender}'s</p>
                                <ProductTitleLink to={`/products/${product.styleId}`}>{product.productName}</ProductTitleLink>
                                <ProductPrice>{product.price}</ProductPrice>
                            </ProductInfo>
                        </ProductCard>  
                    )
                })}
            </ProductWrapper>
            </ProductsContainer>
        </>
    )
}
