import React from 'react';
import {
    SidebarContainer,
    Icon,
     CloseIcon,
     SidebarMenu,
     SidebarLink
} from './SidebarElements';

export const Sidebar = ({isOpen, toggle}) => {
    
    //Need to add is open to new reducer
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={() => toggle()}>
                <CloseIcon onClick={() => toggle()}/>
            </Icon>
            <SidebarMenu>
                    <SidebarLink to='/' exact onClick={() => toggle()}>Home</SidebarLink>
                    <SidebarLink to='/products' onClick={() => toggle()}>Products</SidebarLink>
                    <SidebarLink to='/category' onClick={() => toggle()}>Brand</SidebarLink>
                    <SidebarLink to='/about' onClick={() => toggle()}>About</SidebarLink>
            </SidebarMenu>
        </SidebarContainer>
    )
}
