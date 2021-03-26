import React, { useContext } from 'react';
import MyContext from '../../Context/MyContext';
import {
    Nav,
    NavLink,
    NavIcon,
    Logo,
    CartIcon,
    CartAmount
} from './NavbarElements'
import { Sidebar } from '../Sidebar/index';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    const my_Context = useContext(MyContext);
    const { isOpen, setIsOpen, itemAmount } = my_Context;
    
    
    const toggle = () => {
       return setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <Nav>
                <Sidebar isOpen={isOpen} toggle={toggle} />
            
                    <NavLink to="/">Cain & Co.</NavLink>
                    <Logo />
                <NavIcon  onClick={() => toggle()}>
                    <p>&#9776;</p>
                </NavIcon>
            </Nav>
            <Link to="/cart">
                <CartAmount>{itemAmount}</CartAmount>
                <CartIcon/>
            </Link>
        </div>
    )
}
