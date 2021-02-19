import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.button`
    display: none;
    width: 3rem;
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

            &::before {
                right: 30%;
            }
        }
        span:nth-last-of-type(1) {
            transform: translateY(120%);
            transition: 0.18s ease-in-out;
        }
    }

    span {
        width: 100%;
        height: 0.3rem;
        background-color: #000;
        transition: 0.3s ease-in-out;
    }

    span:nth-last-of-type(1) {
        height: 0.3rem;
        width: 90%;
    }
    span:nth-last-of-type(2) {
        height: 0.4rem;
        width: 70%;

        &::before {
            content: 'menu';
            position: absolute;
            right: 100%;
            top: 50%;
            transform: translateY(-50%);

            transition: 0.3s ease-in-out;
        }
    }

    @media(max-width: 1365px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }
`;

const Hamburger = () => {
    return (
        <HamburgerWrapper>
            <span></span>
            <span></span>
            <span></span>
        </HamburgerWrapper>
    )
};

export default Hamburger