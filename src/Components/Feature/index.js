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
    const myContext = useContext(MyContext);
    const { products } = myContext;
    
    
    return (
        <FeatureContainer>
            <FeatureDiv>
                <FeatureH1>Deal of the Month</FeatureH1>
                <FeatureLink to={`/products/${products[0].styleId}`}>
                <FeatureP>{products[0].productName}</FeatureP>
                </FeatureLink>
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
