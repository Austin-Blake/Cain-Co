import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../Context/MyContext';
import {Navbar} from '../Navbar/index'
import {CategoryList} from '../CategoryList/CategoryList'
import { filterByBrand, filterByGender} from '../../Context/helper';
import {
    CategoryContainer,
    CategoryHeading,
    CategoryBrand,
    CategoryWrapper,
    CategoryCard,
    CategoryImg,
    CategoryInfo,
    CategoryTitleLink,
    CategoryPrice,
    ImageLink,
} from './CategoryElements';

export const Category = () => {
    const my_Context = useContext(MyContext);
    const { products, brand, gender } = my_Context;
    
    //State to map over filterResults
    const [choice, setChoice] = useState([]);

        
        
    
    useEffect(() => {
        let genderList = filterByGender(products, gender);
        setChoice(genderList);
    }, [gender, products])

    useEffect(() => {
        let brandList = filterByBrand(products, brand);
setChoice(brandList);
    }, [brand, products]);  
    
    
    if (brand.length > 0 || gender.length > 0) {
        return (
            <>
                <Navbar />
            <CategoryList />
        <CategoryContainer>
                    <CategoryHeading>Cain's Catalog Results</CategoryHeading>
                    <CategoryHeading>For</CategoryHeading>
                    <CategoryBrand>{brand}</CategoryBrand>
            <CategoryWrapper>
                {choice.map((product) => {
                    return (
                        <CategoryCard key={product.styleId}>
                            <ImageLink to={`/products/${product.styleId}`}>
                            <CategoryImg src={product.image} alt={product.productName}/>
                            </ImageLink>
                            <CategoryInfo>
                            <p>{product.gender}'s</p>    
                                <CategoryTitleLink to={`/products/${product.styleId}`}>{product.productName}</CategoryTitleLink>
                                <CategoryPrice>{product.price}</CategoryPrice>
                            </CategoryInfo>
                        </CategoryCard>  
                    )
                })}
            </CategoryWrapper>
            </CategoryContainer>
            </>
)
    } return (<>
        <Navbar/>
        <CategoryContainer>
            <CategoryList />
        </CategoryContainer>
        </>
    )
}
