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
                <FeatureLink to={`/products/${products[0].styleId}`}>
                <FeatureP>{products[0].productName}</FeatureP>
                </FeatureLink>
                <FeatureH1>$ {products[0].price}</FeatureH1>
            </FeatureDiv>
            <FeatureDiv>
                <FeatureLink to={`/products/${products[0].styleId}`}>
                <FeaturedImage src={products[0].image} alt={products[0].title} />
                </FeatureLink>
            </FeatureDiv>
            <FeatureDiv>
                <FeatureButton>Order</FeatureButton>
            </FeatureDiv>
        </FeatureContainer>
    )
}
