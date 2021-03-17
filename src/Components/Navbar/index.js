import React, {useState} from 'react';
import { Nav, NavLink, NavIcon, Icon, CartIcon } from './NavbarElements'
import { Sidebar } from '../Sidebar';
import {Link} from 'react-router-dom';

export const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
       return setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <Nav>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                    <NavLink to="/">Cain & Co.</NavLink>
                    <Icon />
                <NavIcon onClick={() => toggle()}>
                    <p>&#9776;</p>
                </NavIcon>
                <Link to="/cart">
                    <CartIcon />
                </Link>
            </Nav>
        </div>
    )
}
