import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaRedhat, FaShoppingCart} from 'react-icons/fa'

export const Nav = styled.nav`
background: transparent;
height: 4rem;
margin: 1rem;
display: flex;
justify-content: space-evenly;
align-items: center;
font-weight: 700;

@media screen and (max-width: 400px){
    justify-content: space-between;
}
`;

export const NavLink = styled(Link)`
font-family: Satisfy;
color: #ff0505;
font-size: clamp(3rem, 5vw, 8rem);
padding: 3rem;
display: flex;
align-items: center;
text-decoration: underline;
cursor: pointer;


@media screen and (max-width: 430px){
    position: absolute;
    top: -30px;
    left: 10px;
}
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
    transform: scale(.8, .7);
    transition: 300ms ease-out;
    color: red;
}
`;
export const Icon = styled(FaRedhat)`
color: #c20a0a;
font-size: 2rem;
margin-left: -15rem;

@media screen and (max-width: 500px){
    display: none;
}
`;

export const CartIcon = styled(FaShoppingCart)`
margin-top: 3rem ;
color: #050505;
padding: .3rem;
border: 1px solid black;
border-radius: 30%;
font-size: 2rem;

&:hover{
    transform: scale(1.3);
    transition: 300ms ease-out;
    color: #ff0000;
}

@media screen and (max-width: 500px){
    position: absolute;
    top: 0;
    left: 84%;
}
`;