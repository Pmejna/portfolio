import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import  {Link} from "gatsby";
import {revealItem} from '../../../assets/animations/gsapAnimations';


const NavUl = styled.ul`
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({responsive}) => responsive ? 'column' : 'row'};
    justify-content: ${({responsive}) => responsive ? 'space-between' : 'space-between'};
    align-items: ${({responsive}) => responsive ? 'flex-start' : 'auto'};
    list-style: none;
    color: black;
    flex-basis: 50%;
    width: ${({responsive}) => responsive ? '100%' : 'auto'};
    height: ${({responsive}) => responsive ? '100%' : 'auto'};
    z-index: 100;
    background-color: ${({responsive}) => responsive ? 'white' : 'transparent'};
    position: ${({responsive}) => responsive ? 'absolute' : 'relative'};
    ${({responsive}) => responsive ? 'top: 0; left: 0;' : null};
    ${({responsive}) => responsive ? 'padding: 20vh 0 20vh 16vw' : null};
    font-family: ${({responsive}) => responsive ? '"IntervogueAltBold", sans-serif' : '"IntervogueAltLight", sans-serif'} ;
    font-size: ${({responsive}) => responsive ? '3rem' : '0.8rem'};
    overflow: hidden;


    @media(max-width: 1365px) {
        display: ${({responsive}) => responsive ? 'flex' : 'none'}
    }
`;

const NavLi = styled.li`
    a {
        font-family: inherit;
        font-size: inherit;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: inherit;
    }
`;

const NavList = React.forwardRef(({responsive, clicked}, ref) => {
    let li1 = useRef(null);
    let li2 = useRef(null);
    let li3 = useRef(null);
    let li4 = useRef(null);

    useEffect(() => {
        if(clicked === true) {
            revealItem([li1, li2, li3, li4]);
            console.log(true)
        }
        else if (clicked === false) {
            console.log(false)
        }
    }, [clicked]);

    return (
            <NavUl responsive={responsive} ref={ref}> 
                <NavLi ref={el => li1 = el} >
                    <Link to="/projects">
                        Projects
                    </Link>
                </NavLi>
                <NavLi  ref={el => li2 = el} >
                    <Link to="/tech">
                        Tech stack
                    </Link>
                </NavLi>
                <NavLi  ref={el => li3 = el} >
                    <Link to="/about">
                        About
                    </Link>
                </NavLi>
                <NavLi ref={el => li4 = el} >
                    <Link to="/contact">
                        Contact
                </Link>
                </NavLi>
            </NavUl>
    )
});

export default NavList