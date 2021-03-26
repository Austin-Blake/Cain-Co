import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import {findBrandNames } from '../../Context/helper';
import {
    CategoryListContainer,
    CategoryListMenu,
    BrandOption,
    GenderOption,
    FilterBy
} from './CategoryListElements';

export const CategoryList = () => {
    const my_Context = useContext(MyContext);
    const { setBrand, setGender, products } = my_Context;

    const brandNames = findBrandNames(products);
    

    return (
        <>
            <CategoryListContainer >
                <CategoryListMenu>
                    <GenderOption onClick={(e)=> setGender(e.target.value) } value={'men'}>Men's Boots</GenderOption>
                    <GenderOption onClick={(e)=> setGender(e.target.value) } value={'women'}>Women's Boots</GenderOption>
                </CategoryListMenu>
                <FilterBy>Our Brands</FilterBy>
            <CategoryListMenu>
                    {brandNames.map((name) => {
                      return <BrandOption onClick={(e) => setBrand(e.target.value)} key={name} >{name}</BrandOption>
                    })
                        }
            </CategoryListMenu>
        </CategoryListContainer>
            
        </>
    )
}
