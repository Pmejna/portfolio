import React from 'react';
import styled from 'styled-components';
import  {Link} from "gatsby";
import NavList from '../NavList/NavList';
import logo from "../../../assets/images/logo.svg";
import Hamburger from '../Hamburger/Hamburger';

const NavWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 2rem;
    left: 0;
    width: 100vw;
    height: 8vh;
    padding-left: 16vw;
    padding-right: 8vw;
    z-index: 101;

`;

const NavLogo = styled.img`
    height: auto;
    width: 90%;
    max-width: 100px;
   
`;


const NavHorizontal = ({handleMenu, menuIsOpen, menuText, buttonDisabled}) => {
    return (
        <NavWrapper>
            <NavList />
            <Link to="/" className="nav__logo"> 
                <NavLogo src={logo} />
            </Link>
            <Hamburger handleMenu={handleMenu} menuIsOpen={menuIsOpen} menuText={menuText} buttonDisabled={buttonDisabled}/>
        </NavWrapper>
    )
};

export default NavHorizontal