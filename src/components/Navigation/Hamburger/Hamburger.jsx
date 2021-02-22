import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.button`
    display: none;
    width: 3.4rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    overflow: hidden;
    position: relative;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        span:nth-last-of-type(3) {
            transform: translateY(-120%);
            transition: 0.18s ease-in-out;
        }
        span:nth-last-of-type(2) {
            width: 10%;
        }
        span:nth-last-of-type(1) {
            transform: translateY(120%);
            transition: 0.18s ease-in-out;
        }
        span:nth-last-of-type(4) {
            right: 10%;
        }

    }

    span {
        width: 100%;
        height: 0.3rem;
        background-color: #000;
        transition: 0.3s ease-in-out;
        text-transform: uppercase;
    }

    span:nth-last-of-type(1) {
        height: 0.3rem;
        width: 90%;
        transform: ${({menuIsOpen}) => menuIsOpen ? 'translateY(120%)' : 'none'};
    }
    span:nth-last-of-type(2) {
        height: 0.4rem;
        width: ${({menuIsOpen}) => menuIsOpen ? 0 : '70%'}
    }
    span:nth-last-of-type(3) {  
        transform: ${({menuIsOpen}) => menuIsOpen ? 'translateY(-120%)' : 'none'};
    }

    @media(max-width: 1365px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }
    span:nth-last-of-type(4) {
        position: absolute;
        right: ${({menuIsOpen}) => menuIsOpen ? '5%' : '100%'};
        top: 25%;
        background-color: transparent;
        color: black;
        opacity: ${({disabled}) => disabled ? "0.2" : "1"}

    }
`;

const Hamburger = ({handleMenu, menuIsOpen, menuText, buttonDisabled}) => {
    return (
        <HamburgerWrapper onClick={handleMenu} menuIsOpen={menuIsOpen} menuText={menuText} disabled={buttonDisabled}>
            <span>{menuText}</span>
            <span></span>
            <span></span>
            <span></span>
        </HamburgerWrapper>
    )
};

export default Hamburger