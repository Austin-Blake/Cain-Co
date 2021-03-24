import styled from 'styled-components';

export const SidebarContainer = styled.aside`
width: 100vw;
height:100%;
background: #ffc500;
display: grid;
align-items: center;
justify-content: center;
top: 0;
transition: 300ms ease-in-out;
right: 0;
/* ${({ isOpen }) => (isOpen ? '0' : '-1000px')}; */

@media screen and (max-width: 400px){
    width: 100%;
}
`;

export const SidebarMenu = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 1rem;

@media screen and(max-width: 480px){
    grid-template-rows: repeat(3, 60px);
}
`;

export const BrandLink = styled.option`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
padding: 1rem;
font-size: 1.5rem;
text-decoration: none;
transition: 200ms ease-in-out;
color: black;
cursor: pointer;

&:hover{
    color: #e31837;
    transition: 200ms ease-in-out;
}
`;
