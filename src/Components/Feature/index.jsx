import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';

import {
    FeatureContainer,
    FeatureButton,
    FeaturedImage,
    FeatureLink,
    FeatureH1,
    FeatureDiv,
    FeatureP
} from './FeatureElements'


export const Feature = () => {
    const my_Context = useContext(MyContext);
    const { products } = my_Context;
    
    
    return (
        <FeatureContainer>
            <FeatureDiv>
                <FeatureH1>Deal of the Month</FeatureH1>
                <FeatureLink to={`/products/${products[14].styleId}`}>
                <FeatureP>{products[14].productName}</FeatureP>
                </FeatureLink>
                <FeatureH1>$ {products[14].price}</FeatureH1>
            </FeatureDiv>
            <FeatureDiv>
                <FeatureLink to={`/products/${products[14].styleId}`}>
                <FeaturedImage src={products[14].image} alt={products[14].title} />
                </FeatureLink>
            </FeatureDiv>
            <FeatureDiv>
                <FeatureButton>Order</FeatureButton>
            </FeatureDiv>
        </FeatureContainer>
    )
}
