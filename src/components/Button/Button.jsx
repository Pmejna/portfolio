import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Arrow from '../../assets/images/Arrow.svg';

const ButtonWrapper = styled.button`
    height: 2rem;
    border: none;
    display: flex;
    align-items: center;
    font-family: 'IntervogueAltBold', sans-serif;
    font-size: 1rem;
    grid-area: ${({gridArea}) => gridArea ? gridArea : null};
    max-width: 200px;
    border: ${({borderColor}) => borderColor ? '1px solid '+borderColor : 'none'};
    opacity: ${({disabled}) => disabled ? 0.4 : 1};

    @media (max-width: 760px) {
        min-height: 40px;
        font-size: 2rem;
    }
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
        width: 1.4rem;
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
`;
const FormStyled = styled.div`
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
        width: 1.4rem;
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
`;

const Button = ({children, to, type, value, formButton, gridArea, borderColor, disabled}, ref) => {
    return (
        <ButtonWrapper type={type} value={value} ref={ref} gridArea={gridArea} borderColor={borderColor} disabled={disabled}>
            {
                formButton ? 
                <FormStyled>
                    {children}
                    <div><img src={Arrow}></img></div>
                </FormStyled>
                :
            <LinkStyled to={to} target='_blank' >
                {children}
                <div><img src={Arrow}></img></div>
            </LinkStyled>
        }
        </ButtonWrapper>
    )
};

export default  React.forwardRef(Button);