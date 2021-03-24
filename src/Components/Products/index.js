import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
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
    const myContext = useContext(MyContext);
    const {products} = myContext;



    return (
        
        <ProductsContainer>
            <ProductsHeading>Cain's Catalog</ProductsHeading>
            <ProductWrapper>
                {products.map((product) => {
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
    )
}
