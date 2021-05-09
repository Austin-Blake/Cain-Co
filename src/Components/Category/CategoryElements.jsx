import styled from 'styled-components';
import {Link} from 'react-router-dom'



export const CategoryContainer = styled.div`
width: 100%;
min-height: 100vh;
padding: 5rem;
background: #ffffff;
color: #000000;
`;

export const CategoryWrapper = styled.div`
display: flex;
flex-wrap:wrap;
align-items: start;
justify-content: center;
margin: 0 auto;
`;

export const CategoryCard = styled.div`
margin: 0 2rem;
line-height: 1.5;
width: 300px;
`;

export const CategoryImg = styled.img`
height: 350px;
min-width: 300px;
padding: 2rem;
box-shadow: 1px 3px #000000;
`;

export const CategoryHeading = styled.h1`
font-family: 'simplicy';
color: black;
font-size: clamp(2rem, 2.5vw, 3rem);
text-decoration: underline red;
text-align: center;
padding-top: 1rem;
margin-bottom: 1rem;
`;

export const CategoryBrand = styled.h1`
font-family: 'simplicy';
color: black;
font-size: clamp(3rem, 5vw, 10rem);
text-decoration: underline red;
text-align: center;
margin-bottom: 5rem;
`;

export const ImageLink = styled(Link)`
`;

export const CategoryTitleLink = styled(Link)`
color: black;
font-weight: 400;
font-size: 1.5rem;
text-decoration: none;
`;

export const CategoryInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
text-align: center;
`;

export const CategoryDesc = styled.p`
margin-bottom: 1rem;
`;

export const CategoryPrice = styled.p`
font-size: 1.5rem;
color: red;

&:before{
    content: '$ ';
}
`;

export const CategoryButton = styled.button`
font-size: 1rem;
padding: .5rem 4rem;
margin-bottom: 3rem;
border: none;
background: #e31837;
color: white;
transition: 200ms ease-out;

&:hover{
    background: #ffc500;
    transition: 200ms ease-out;
    cursor: pointer;
    color: black;
}
`;