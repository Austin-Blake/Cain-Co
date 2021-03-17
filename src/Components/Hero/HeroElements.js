import styled from 'styled-components';
import ImgBg from '../../Images/james-sullivan-ESZRBtkQ_f8-unsplash.jpg';


    


export const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.9),rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url(${ImgBg});
background-position: center;
background-size: cover;
height: 100vh;
min-height: 100%;
`;

export const HeroContent = styled.div`
height: 100%;
max-height: 100%;
width: 100vw;
padding: 0rem calc((100vw -1300px) /2);
`;

export const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 50vw;
color: white;
text-transform: uppercase;
line-height: 1;
font-weight: bold;

@media screen and (max-width: 650px){
    width: 100%;
}
`;

export const HeroH1 = styled.h1`
font-size: clamp(2.5rem, 5vw, 5rem);
margin-bottom: 1rem;
box-shadow: 2px 5px #e9ba23;
/* letter-spacing: 3px; */
text-align: left;
`;

export const HeroP = styled.p`
font-family: 'specify';
font-size: clamp(3rem, 8vw, 7rem);
margin-bottom: 2rem;
color: #e9ba23;
text-align: left;

&::after{
    content: ' all year';
    color: white;
    text-decoration: underline;
}
`;

export const HeroBtn = styled.button`
font-size: 1.4rem;
padding: .5rem 3rem;
margin-bottom: 1rem;
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