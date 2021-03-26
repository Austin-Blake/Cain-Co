import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaRedhat } from 'react-icons/fa'
import {ImCart} from 'react-icons/im'

export const Nav = styled.nav`
background: transparent;
height: fit-content;
display: flex;
justify-content: start;
align-items: center;
font-weight: 700;


`;

export const NavLink = styled(Link)`
font-family: Satisfy;
color: #ff0505;
font-size: clamp(3rem, 5vw, 8rem);
margin: 1rem;
display: flex;
align-items: center;
text-decoration: underline;
cursor: pointer;



`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: black;

p{
    transform: translate(-50%, 10%);
    font-weight: bold;
    font-size: 2rem;  
}

&:hover{
    color: red;
}
`;
export const Logo = styled(FaRedhat)`
color: #c20a0a;
font-size: 2rem;

@media screen and (max-width: 500px){
    display: none;
}
`;

export const CartIcon = styled(ImCart)`
position: absolute;
top: 3.2rem;
right: .8rem;
margin: auto 0;
color: #ffc500;
padding: .1rem;
font-size: 2rem;
width: 3rem;
height: 2rem;

&:hover{
    color: #ff0000;
};

@media screen and (max-width: 500px){
    width: 2rem;
    padding: .3rem;
}
`;

export const CartAmount = styled.p`
z-index: 10;
position: absolute;
top: 3rem;
right: .5rem;
width: .8rem;
padding: .1rem;
color: black;
font-size: 1rem;
text-align: center;
border-radius: 50%;
background-color: lightblue;


&:hover{
    
    color: #ff0000;
};

@media screen and (max-width: 500px){
    position: absolute;
    top: 2.8rem;
    right: 0;
    width: 1.1rem;
    padding: 0rem;
}
`;