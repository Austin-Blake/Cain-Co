import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaRedhat, FaShoppingCart } from 'react-icons/fa'
import {ImCart} from 'react-icons/im'

export const Nav = styled.nav`
background: transparent;
height: 4rem;
margin: 1rem;
display: flex;
justify-content: center;
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
    color: red;
}
`;
export const Icon = styled(FaRedhat)`
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