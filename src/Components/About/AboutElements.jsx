import styled from 'styled-components'
import Img from '../../Images/Background/yoshi-takekawa-7wk0ja-DP_c-unsplash.jpg';

export const AboutContainer = styled.div`

background: url(${Img});
background-size: contain;
`;
export const AboutWrapper = styled.div`
display: flex;
flex-direction: column;
align-items:center;
height: 70vh;
background-color: rgba(0,0,0,0.6);
`;
export const AboutH1 = styled.h1`
font-size: 2rem;
margin: 2rem;
color: #e9ba23;
`;

export const AboutP = styled.p`
color: white;
font-size: 1.5rem;
padding: 1rem;
width: 50%;
`;