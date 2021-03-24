import React, { useContext, useEffect } from 'react';
import MyContext from '../../Context/MyContext';
import { Link } from 'react-router-dom';
import { Feature } from '../Feature';

import {
    
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroItems,
    HeroP,
    HeroBtn
} from './HeroElements'



export const Hero = () => {
    const myContext = useContext(MyContext);
    const {products } = myContext;

    useEffect(() => {
        // getProducts();
     }, []);

    return (
        <>
            <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Looking for your next Pair of Boots?</HeroH1>
                        <HeroP>Stylish Rugged</HeroP>
                        <Link to="/products">
                            <HeroBtn>Check out our Products!</HeroBtn>
                            </Link>
                </HeroItems>
            </HeroContent>
            </HeroContainer>
            { products.length > 0 &&
            <Feature />
            }
            
            </>
    )
}
