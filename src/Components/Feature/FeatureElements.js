import styled from 'styled-components'
import FeaturePic from '../../Images/yoshi-takekawa-7wk0ja-DP_c-unsplash.jpg'


export const FeatureContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${FeaturePic});
height: 100%;
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
text-align: center;
padding: 0 1rem;

h1{
    font-size: clamp(3rem, 5vw, 5rem);
}

p{
    margin: 1rem;
    font-size: clamp(1.5rem, 3vw, 2rem);
}

div{
    height: 100%;
}
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
height: 70%;
width: 50%;
opacity: .9;
background-color: white;
box-shadow:0 0 20px 10px #a9a9a9;
`;
