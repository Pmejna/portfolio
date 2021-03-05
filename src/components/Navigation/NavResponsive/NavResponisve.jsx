import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import NavList from '../NavList/NavList';
import gsap from 'gsap';

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
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBg = useRef(null);

    useEffect(() => {
        // open menu 
        console.log(state)
        if (state.clicked === true ) {
            gsap.to(menu.current, {
                duration: 0,
                css: { display: 'block' },
            });

        gsap.to([revealMenu, revealMenuBg], {
            duration: 0,
            opacity: 1,
            height: '100%',
        });

        gsap.from([revealMenu, revealMenuBg], {
            duration: 0.8,
            height: 0,
            transformOrigin: 'right top',
            skewY: 4,
            ease: 'power3.inOut',
            stagger: {
                amount: 0.1
            }
        });
        }
        // close menu
        else if (state.clicked === false) {
            gsap.to([revealMenu, revealMenuBg], {
                duration: 0.8,
                height: 0,
                ease: 'power3.inOut',
                stagger: {
                    amount: 0.07
                }
            })
        gsap.to(menu.current, {
            duration: 1,
            css: { display: 'none' },
        })
    }}, [state]);

    return (
        <NavResponsiveWrapper ref={menu}>
            <NavAnimationBackground clicked={state.clicked} ref={el => (revealMenuBg = el)}/>
            <NavList responsive={true} clicked={state.clicked} ref={el => (revealMenu = el)}/>
        </NavResponsiveWrapper>
    )
};

export default NavResponsive