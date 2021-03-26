import styled from 'styled-components';
import ImgBg from '../../Images/Background/james-sullivan-ESZRBtkQ_f8-unsplash.jpg';


export const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.9),rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url(${ImgBg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 100%;

@media screen and (max-width: 430px){
    height: fit-content;
    background-position: bottom right;
}
`;

export const HeroContent = styled.div`
display: flex;
align-content: center;
height: 100%;
width: 100%;

@media screen and (max-width: 430px){

}
`;

export const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: flex-start;
padding: 0 2rem;
height: 100%;
width: 80vw;
color: white;
text-transform: uppercase;
line-height: 1;
font-weight: bold;

@media screen and (max-width: 650px){
    width: 100%;
}
`;

export const HeroH1 = styled.h1`
font-size: clamp(2.5rem, 5vw, 10rem);
margin: 1rem 0 1rem 0;
box-shadow: 2px 5px #e9ba23;
letter-spacing: 3px;
`;

export const HeroH2 = styled.h2`
font-family: 'specify';
font-size: clamp(3rem, 8vw, 15rem);
margin-bottom: 3rem;
color: white;
text-decoration: underline;
`;

export const HeroP = styled.p`
font-family: 'specify';
font-size: clamp(3rem, 5vw, 7rem);
margin-bottom: 2rem;
color: #e9ba23;
text-align: left;

`;

export const HeroBtn = styled.button`
font-size: 1.4rem;
padding: .5rem 2rem;
margin-bottom: 4rem;
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