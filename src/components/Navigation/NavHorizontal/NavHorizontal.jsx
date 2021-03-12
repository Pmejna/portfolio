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
    top: 0;
    left: 0;
    width: 100vw;
    height: 14vh;
    padding-left: 16vw;
    padding-right: 8vw;
    padding-top: 2rem;
    z-index: 101;
    background-color: white;

    @media (max-width: 760px) {
        padding-left: 8vw;
        padding-right: 6vw;
    }
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