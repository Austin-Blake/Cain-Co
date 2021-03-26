import React, {useContext} from 'react';
import MyContext from '../../Context/MyContext';
import {findBrandNames} from '../../Context/helper'
import {
    CurrentBrandsContainer,
    BrandH1,
    CurrentBrandsWrapper,
    BrandOption,
    BrandLink,
} from './CurrentBrandsElements'

export const CurrentBrands = () => {

    const my_Context = useContext(MyContext);
    const { setBrand, products } = my_Context;

    const brandNames = findBrandNames(products);

    return (
        <>
            <CurrentBrandsContainer >
                <BrandH1>Our Brands</BrandH1>
            <CurrentBrandsWrapper>
                    {brandNames.map((name) => {
                        return (
                            <BrandLink key={name} to="/category">
                            <BrandOption onClick={(e) => setBrand(e.target.value)} key={name}>{name}</BrandOption>
                            </BrandLink>)
                    })
                        }
            </CurrentBrandsWrapper>
        </CurrentBrandsContainer>
            
        </>
    )
}
