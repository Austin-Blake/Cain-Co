import styled from 'styled-components';

export const CartContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
`;

export const ItemContainer = styled.div`
display: flex;
align-items: start;
padding: 1rem 0; 
border-bottom: 1px solid black;

@media screen and (max-width: 580px){
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const CartImg = styled.img`
height: 5rem;
width: 5rem;
`;

export const CartStatus = styled.h2`
font-size: 1.5rem;
`;

export const QuantityContainer = styled.div`
display: flex;
`;
export const InfoContainer = styled.div`
display: flex;
justify-content: space-around;

@media screen and (max-width: 580px){
   padding: 1rem;
}
`;

export const TotalContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const QuantityButton = styled.button`
width: 2em;
height: 1.5em;
margin: 0 .3em;
color: white;
background-color: black;
`;

export const ItemH1 = styled.h1`
width: 50vw;
text-align: left;
font-size: 1.3rem;
margin: 0 .5rem;

@media screen and (max-width: 580px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
`;

export const ItemH4 = styled.h1`
color: black;
font-size: 1rem;
margin: 0 .2rem;

@media screen and (max-width: 580px){
   padding: 0 .2rem;
`;

export const Span = styled.span`
color: red;
text-decoration: none;
`;

