import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import {Link} from 'react-router-dom';
import {FeatureContainer, FeatureButton, FeaturedImage} from './FeatureElements'


export const Feature = () => {
    const myContext = useContext(MyContext);
    const { products } = myContext;
    
    
    return (
        <FeatureContainer>
            <div>
                <h1>Deal of the Month</h1>
                <p>{products.[0].productName}</p>
            </div>
            <div>
                <Link to={`/products/${products.[0].styleId}`}>
                <FeaturedImage src={products.[0].image} alt={products.[0].title} />
                </Link>
            </div>
            <div>
                <FeatureButton>Order</FeatureButton>
            </div>
        </FeatureContainer>
    )
}
