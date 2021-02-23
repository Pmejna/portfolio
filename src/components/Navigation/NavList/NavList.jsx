import React from 'react';
import styled from 'styled-components';
import  {Link} from "gatsby";


const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    color: black;
    flex-basis: 50%;

    @media(max-width: 1365px) {
        display: none;
    }
`;

const NavLi = styled.li`
    a {
        font-family: "IntervogueAltLight", sans-serif;
        font-size: 0.8rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: inherit;
    }
`;

const NavList = () => {
    return (
            <NavUl>
                <NavLi>
                    <Link to="/projects">
                        Projects
                    </Link>
                </NavLi>
                <NavLi>
                    <Link to="/tech">
                        Tech stack
                    </Link>
                </NavLi>
                <NavLi>
                    <Link to="/about">
                        About
                    </Link>
                </NavLi>
                <NavLi>
                    <Link to="/contact">
                        Contact
                </Link>
                </NavLi>
            </NavUl>
    )
};

export default NavList