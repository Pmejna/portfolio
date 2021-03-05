import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import NavList from '../NavList/NavList';
import gsap from 'gsap';
import {menuClose, menuOpen} from '../../../assets/animations/gsapAnimations';

const NavResponsiveWrapper = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: none;
    justify-content: center;
    z-index: 98;
`;

const NavAnimationBackground = styled.div`
    background-color: #000;
    z-index: 99;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const NavListWrapper = styled.div`
    background-color: #000;
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
`;

const NavResponsive = ({state}) => {
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBg = useRef(null);
    let navListMenu = useRef(null);

    useEffect(() => {
        // open menu 
        if (state.clicked === true ) {
            menuOpen(revealMenu, revealMenuBg, menu.current)
        }
        // close menu
        else if (state.clicked === false) {
            menuClose(revealMenu, revealMenuBg, menu.current)
    }}, [state]);

    return (
        <NavResponsiveWrapper ref={menu}>
            <NavAnimationBackground clicked={state.clicked} ref={el => (revealMenuBg = el)}/>
            <NavListWrapper ref={el => (revealMenu = el)}>
                <NavList responsive={true} clicked={state.clicked} ref={el => (navListMenu = el)}/>
            </NavListWrapper>            
        </NavResponsiveWrapper>
    )
};

export default NavResponsive