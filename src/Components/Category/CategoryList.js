import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import {
    SidebarContainer,
    SidebarMenu,
    BrandLink,
} from './CategoryListElements';

export const CategoryList = () => {
    const myContext = useContext(MyContext);
    const {setBrand} = myContext;
    return (
        <>
            <SidebarContainer >
            <SidebarMenu>
                    <BrandLink onClick={(e)=> setBrand(e.target.value) } >Thorogood</BrandLink>
                    <BrandLink onClick={(e)=> setBrand(e.target.value) } >Ariat</BrandLink>
                    <BrandLink onClick={(e)=> setBrand(e.target.value) } >Laredo</BrandLink>
                    <BrandLink onClick={(e)=> setBrand(e.target.value) } >Carolina</BrandLink>
                    <BrandLink onClick={(e)=> setBrand(e.target.value) } >Twisted X</BrandLink>
                    <BrandLink onClick={(e)=> setBrand(e.target.value) } >Durango</BrandLink>
                    <BrandLink onClick={(e)=> setBrand(e.target.value) }>Justin</BrandLink>
                    <BrandLink onClick={(e)=> setBrand(e.target.value) } v>Dan Post</BrandLink>
            </SidebarMenu>
        </SidebarContainer>
            
        </>
    )
}
