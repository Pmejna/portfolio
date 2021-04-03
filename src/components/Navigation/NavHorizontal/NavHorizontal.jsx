import React, {useEffect, useRef} from 'react';
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
    width: 100vw;
    height: 14vh;
    padding-left: 16vw;
    padding-right: 8vw;
    padding-top: 2rem;
    z-index: 101;
    background-color: white;
    top: -14vh;
    left: 0;
    opacity: 0;
    transition: 0.2s ease-in-out;

    &.active {
        top: 0;
        opacity: 1;
    }
    

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


const NavHorizontal = ({handleMenu, menuIsOpen, menuText, buttonDisabled, logoClicked}) => {
    let navHorizontal = useRef(null);

    useEffect(() => {
        let prevScroll = window.pageYOffset;
        const checkScroll = () => {
            setTimeout(() => {
                let currentScroll = window.pageYOffset;
                if (navHorizontal != null && !menuIsOpen) {
                    if (prevScroll < currentScroll) {
                        navHorizontal.classList.remove('active');
                        prevScroll = currentScroll;
                    }
                    else if (prevScroll > currentScroll) {
                        prevScroll = currentScroll;
                        navHorizontal.classList.add('active');
                    }
                }                
            }, 200);
            
        };
        window.addEventListener('scroll', checkScroll);
    });

    return (
        <NavWrapper ref={el => navHorizontal = el} className='active'>
            <NavList />
            <Link to="/" className="nav__logo" onClick={logoClicked}> 
                <NavLogo src={logo} />
            </Link>
            <Hamburger handleMenu={handleMenu} menuIsOpen={menuIsOpen} menuText={menuText} buttonDisabled={buttonDisabled}/>
        </NavWrapper>
    )
};

export default NavHorizontal