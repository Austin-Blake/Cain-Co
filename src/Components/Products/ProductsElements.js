import styled from 'styled-components';
import {Link} from 'react-router-dom'



export const ProductsContainer = styled.div`
width: 100vw;
min-height: 100vh;
padding: 5rem calc((100vw -1300px) /2);
background: #ffffff;
color: #000000;
`;

export const ProductWrapper = styled.div`
display: flex;
flex-wrap:wrap;
align-items: start;
justify-content: center;
margin: 0 auto;
`;

export const ProductCard = styled.div`
margin: 0 2rem;
line-height: 1.5;
width: 300px;
`;

export const ProductImg = styled.img`
height: 300px;

max-width: 100%;
padding: 1rem;
box-shadow: 1px 3px #000000;
`;

export const ProductsHeading = styled.h1`
font-family: Simplicy;
color: black;
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
padding-top: 2rem;
margin-bottom: 5rem;
`;

export const ProductTitleLink = styled(Link)`
color: black;
font-weight: 400;
font-size: 1.5rem;
text-decoration: none;
`;

export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
text-align: center;
`;

export const ProductDesc = styled.p`
margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
font-size: 1.5rem;
color: red;

&:before{
    content: '$ ';
}
`;

export const ProductButton = styled.button`
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