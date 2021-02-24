import React from 'react';
import styled from 'styled-components';
import NavList from '../NavList/NavList';

const NavResponsiveWrapper = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    z-index: 98;
    padding-left: 18vw;
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

const NavResponsive = () => {
    return (
        <NavResponsiveWrapper>
            <NavAnimationBackground />
            <NavList responsive={true}/>
        </NavResponsiveWrapper>
    )
};

export default NavResponsive