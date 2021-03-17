import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import {Link} from 'react-router-dom';
import {FeatureContainer, FeatureButton, FeaturedImage} from './FeatureElements'


export const Feature = () => {
    const myContext = useContext(MyContext);
    const { products } = myContext;
    
    // console.log(products);
    return (
                <FeatureContainer>
                    <h1>Deal of the Month</h1>
            <p>{products.[1].productName}</p>
            <Link to={`/products/${products.[1].styleId}`}>
                <FeaturedImage src={products.[1].image} alt="products.[4].title" />
                </Link>
                    <FeatureButton>Order</FeatureButton>
        </FeatureContainer>
    )
}
