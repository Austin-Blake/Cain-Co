import React from 'react';
import {
    SidebarContainer,
    Icon,
     CloseIcon,
     SidebarMenu,
     SidebarLink,
     SidebarRoute,
     SideBtnWrap
} from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
    //Need to add is open to new reducer
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon onClick={toggle}/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to='/'>Products</SidebarLink>
                <SidebarLink to='/'>Cart</SidebarLink>
                <SidebarLink to='/'>Category</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}
