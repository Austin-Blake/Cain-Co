import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const CurrentBrandsContainer = styled.aside`
width: 100%;
height:100%;
background: #ffc500;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
transition: 300ms ease-in-out;

@media screen and (max-width: 400px){
    width: 100%;
}
`;

export const CurrentBrandsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 1rem;
border-bottom: 1px solid black;
margin-bottom: 1rem;

@media screen and (max-width: 430px){
    align-items: center;
}
`;

export const BrandOption = styled.option`
padding: 1rem;
font-size: 1.5rem;
text-decoration: none;
transition: 200ms ease-in-out;
color: black;
cursor: pointer;

&:hover{
    color: #e31837;
    transform: scale(1.3);
    transition: 200ms ease-in-out;
}

@media screen and (max-width: 430px){
    padding: 1rem;
    font-size: 1.5rem;
    
}
`;

export const BrandH1 = styled.h1`
font-family: 'Satisfy';
color: red;
text-align: center;
padding-top: 1rem;

`;

export const BrandLink = styled(Link)`
text-decoration: none;
`;
