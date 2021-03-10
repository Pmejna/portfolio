import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Arrow from '../../assets/images/Arrow.svg';

const ButtonWrapper = styled.button`
    height: 2rem;
    border: none;
    display: flex;
    align-items: center;
`;

const LinkStyled = styled(Link)`
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0.5rem 3rem 0.5rem 0.5rem;
        align-items: center;
        background-color: #000;
        color: white;
        cursor: pointer;

    div {
        position: absolute;
        top: 0;
        right: 0;
        width: 2rem;
        height: 100%;
        background-color: var(--color-main);
        img {
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            width: 30%;
            height: auto;
        }
        }
    }
`;

const Button = ({children, to }) => {
    return (
        <ButtonWrapper>
            <LinkStyled to={to} target='_blank'>
            {children}
            <div><img src={Arrow}></img></div>
            </LinkStyled>
        </ButtonWrapper>
    )
};

export default Button