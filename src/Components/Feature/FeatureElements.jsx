import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FeaturePic from '../../Images/Background/yoshi-takekawa-7wk0ja-DP_c-unsplash.jpg';


export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${FeaturePic});
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
text-align: center;
padding: 0 1rem;
height: 100%;
`;

export const FeatureDiv = styled.div`
height: 100%;
`;

export const FeatureH1 = styled.h1`
font-size: clamp(3rem, 5vw, 10rem);
    color: #ffc500;
    text-decoration: underline;
`;

export const FeatureP = styled.p`
margin: 1rem;
    font-size: clamp(1.5rem, 3vw, 8rem);
`;

export const FeatureButton = styled.button`
font-size: 1.4rem;
margin: 1rem 2rem;
padding: .6rem 3rem;
border: none;
background: #ffc500;
color: black;
transition: 200ms ease-out;

&:hover {
    color: white;
    background: #e31837;
    transition: 200ms ease-out;
    cursor: pointer;
}
`;

export const FeaturedImage = styled.img`
width: 30%;
opacity: .9;
background-color: white;
box-shadow:0 0 20px 10px #a9a9a9;

@media screen and (max-width: 600px){
    width: 60vw;
}
`;

export const FeatureLink = styled(Link)`
text-decoration: none;
color: white;
`;