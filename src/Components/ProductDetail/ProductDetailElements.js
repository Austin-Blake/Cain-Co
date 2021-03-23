import styled from 'styled-components';



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
align-items: center;
justify-content: center;
margin: 0 auto;
`;

export const ProductCard = styled.div`
margin: 0 2rem;
line-height: 1.5;
width: 100vw;
`;

export const ProductImg = styled.img`
height: 60vh;
min-width: 320px;
max-width: 100%;
`;

export const ProductsHeading = styled.h1`
font-family: Simplicy;
color: black;
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
padding-top: 2rem;
margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
color: black;
font-weight: 400;
font-size: 1.8rem;
margin-bottom: 2rem;
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
max-width: 600px;
margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
font-size: 1.5rem;
color: red;

&:before{
    content: '$ ';
}
`;
export const ProductSize = styled.p`
text-align: center;
margin: 1rem;
font-size: 1rem;

&:before{
    content: 'Current Size:';
}
`;

export const ProductBrand = styled.h1`
font-family: Simplicy;
color: black;
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
padding-top: 2rem;
`;

export const ProductButton = styled.button`
font-size: 1rem;
padding: .5rem 4rem;
margin: 0 0 2rem 0;
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
export const DetailWrapper = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
align-items: left;
margin: 2rem 0;
`;
export const ProductDetail = styled.li`
list-style-type: disc;
`;

export const SizeWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

export const ProductSizes = styled.button`
justify-self: center;

padding: .3rem 2rem;

@media screen and (max-width: 580px){
    padding: .1rem 1rem;
}
`;