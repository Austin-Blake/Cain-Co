import styled from 'styled-components';

export const CartContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
min-height: 100vh;
`;

export const EmptyCartContainer = styled.div`
display: flex;
justify-content: center;
align-items: start;
height: 50vh;
width: 100%;
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
font-size: 3rem;
width: 90%;
text-align: center;
`;

export const QuantityContainer = styled.div`
display: flex;
align-items: center;
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
export const CartDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
height: 100%;
margin-top: 3rem;
`;

export const QuantityButton = styled.button`
width: 2em;
height: 1.5em;
margin: 0 .3em;
color: white;
background-color: black;
`;

export const ItemH1 = styled.h1`
display: flex;
width: 50vw;
text-align: left;
font-size: 1.3rem;
margin: 0 .5rem;

@media screen and (max-width: 580px){
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
}
`;

export const ItemH4 = styled.h1`
color: black;
font-size: 1rem;
margin: 0 .2rem;
text-align: center;
@media screen and (max-width: 580px){
   padding: 0 .3rem;
}
`;

export const Span = styled.span`
display: block;
font-size: 1.5rem;
color: red;
text-decoration: none;
`;
export const ItemAmountDiv = styled.div`
font-size: 1rem;
color: black;
width: 1rem;
height: 1.1rem;
margin: auto 2rem;
text-align: center;
`;

