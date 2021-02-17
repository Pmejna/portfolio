import React from 'react';
import styled from 'styled-components';
import  {Link} from "gatsby";
import logo from "../../../assets/images/logo.svg";

const NavWrapper = styled.header`
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
`;

const NavUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    color: black;
    flex-basis: 50%;
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

const NavLogo = styled.img`
    height: auto;
    width: 90%;
    max-width: 100px;
`;


const NavStatic = () => {
    return (
        <NavWrapper>
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
            <Link to="/"> 
                <NavLogo src={logo} />
            </Link>
        </NavWrapper>
    )
};

export default NavStatic