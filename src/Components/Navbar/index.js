import React from 'react';
import {Bars, Nav, NavLink, NavIcon} from './NavbarElements'

export const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to="/">Cain's Outlet</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon> 
            </Nav>
        </div>
    )
}
