import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import {CategoryList} from '../Category/CategoryList'

import {
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitleLink,
    ProductPrice,
} from './CategoryElements';

export const Category = () => {
    const myContext = useContext(MyContext);
    const { products, brand } = myContext;
    
    const filterBrands = products.filter((product) => {
        return product.brand.toLowerCase() === brand.toLowerCase();
    });
    

    return (
        <>
            <CategoryList />
            <ProductsHeading></ProductsHeading>
        <ProductsContainer>
            <ProductsHeading>Cain's Catalog</ProductsHeading>
            <ProductWrapper>
                {filterBrands.map((product) => {
                    return (
                        <ProductCard key={product.styleId}>
                            <ProductImg src={product.image} alt={product.productName}/>
                            <ProductInfo>     
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
