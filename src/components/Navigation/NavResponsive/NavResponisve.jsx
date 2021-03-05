import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import NavList from '../NavList/NavList';


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

const NavResponsive = ({state}) => {
    let menu = useRef();
    let revealMenu = useRef();
    let revealMenuBg = useRef();
    useEffect(() => {
        // open menu 
        if (state.clicked === false) {
            menu.current.style.display = 'none';      
        }
        // close menu
        else if (state.clicked === true) {
            menu.current.style.display = 'flex'
        }
    })

    return (
        <NavResponsiveWrapper ref={menu}>
            <NavAnimationBackground clicked={state.clicked} ref={revealMenuBg}/>
            <NavList responsive={true} clicked={state.clicked} ref={revealMenu}/>
        </NavResponsiveWrapper>
    )
};

export default NavResponsive