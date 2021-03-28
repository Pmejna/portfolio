import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import {revealSection, revealSection2} from '../../assets/animations/gsapAnimations';
import Button from "../Button/Button";
import ImageBoxAnimated from '../ImageBoxAnimated/ImageBoxAnimated';

const HeaderWrapper = styled.div`
    width: ${({main}) => main ? 'auto' : '100vw'};
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : '100vw'};
    background-color: transparent;
    flex-basis: ${({main, maxWidth}) => main || maxWidth ? 'auto' : '100vw'};
    opacity: ${({main}) => main ? '0' : '1'};
    padding: ${({leftText}) => leftText ? '0 3rem 0 0' : '0 0 0 3rem'}

    button {
        max-width: 180px;
    }

    @media (max-width: 760px) {
    max-width: ${({main}) => main ? '60vw' : '87vw'};
    flex-basis: auto;
    h1 {
      font-size: 2.8rem;
      line-height: 2.8rem;
    }
    p {
        width: ${({main}) => main ? '80%' : '100%'};
        margin-bottom: 0.4rem;
    }
    }
`;

const Above = styled.p`
    font-family: "IntervogueAltThin";
    font-size: ${({main}) => main ? '1.3rem' : '0.8rem'};
    text-transform: uppercase;
    letter-spacing: 3px;
    color: ${({background}) => background ? '#0AFCD3' : '#6D6D6D'};
    margin-bottom: 0.3rem;
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};

    @media (max-width: 760px) {
        font-size: 1.2rem;
        text-align: left;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    line-height: 3.8rem;
    color: black;
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};
    grid-area: 2 / 1 / 3 / 2;

    @media (max-width: 760px) {
        text-align: left;
    }
`;

const Title2 = styled.h2`
    font-size: 2.6rem;
    line-height: 3.2rem;
    color: ${({textColor}) => textColor ? '#fff' : '#000'};
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};
    grid-area: 2 / 1 / 3 / 2;

    @media (max-width: 760px) {
        text-align: left;
    }
`;

const SubTitle = styled.p`
    font-family: "IntervogueAltLight";
    margin-top: 0.4rem;
    font-size: ${({main}) => main ? '1.7rem' : '1.2rem'};
    color: ${({textColor}) => textColor ? '#fff' : '#000'};
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};
    margin-bottom: 1.2rem;
    grid-area: ${({main}) => main ? '' : '4 / 1 / 8 / 2'};

    @media (max-width: 760px) {
        margin-top: 2rem;
        font-size: 1.5rem;
        text-align: left;
    }
`;

const HeaderText = styled.div`
    width: 100%;
    /* max-width: 40vw; */

    display: ${({section}) => section ? 'block' : 'grid'};
    grid-template-columns: ${({main}) => main ? '1fr' : '1fr 1fr'};
    grid-template-rows: 1.3rem repeat(9, auto);
`;

const MainHeader = React.forwardRef(({above, title, subTitle, main, leftText, background, className, button, textColor, maxWidth, buttonTo, imgSrc, section}, ref) => {

    let aboveRef = useRef(null);
    let titleRef = useRef(null);
    let title2Ref = useRef(null);
    let subtitleRef = useRef(null);
    let mainRef = useRef(null);
    let buttonRef = useRef(null);

    useEffect(() => {
        if (button && main) {
            revealSection2([mainRef, aboveRef, titleRef, subtitleRef, buttonRef]);
            console.log(buttonRef);
        }
        if (button) {
            revealSection2([mainRef, aboveRef, title2Ref, subtitleRef, buttonRef]);
            console.log(buttonRef);
        }
        else if (main) {
            revealSection2([mainRef, aboveRef, titleRef, subtitleRef]);
        }
        else {
            revealSection([aboveRef, title2Ref, subtitleRef]);
        }
      }, [])
    
    return (
        <HeaderWrapper main={main} ref={el => (mainRef = el)} className={className} maxWidth={maxWidth} leftText={leftText}>
            <HeaderText section={section} main={main}>
                <Above leftText={leftText} background={background} ref={el => (aboveRef = el)}>
                    {above}
                </Above>
                {main ? 
                    <Title leftText={leftText} ref={el => (titleRef = el)} textColor={textColor}>{title}</Title> : 
                    <Title2 leftText={leftText} background={background} ref={el => (title2Ref = el)} textColor={textColor}>{title}</Title2>
                }            
                <SubTitle 
                    main={main} 
                    leftText={leftText}
                    background={background}
                    ref={el => (subtitleRef = el)}
                    textColor={textColor}
                >
                    {subTitle} 
                </SubTitle>
                {button ? <Button to={buttonTo} ref={el => (buttonRef = el)} gridArea='9 / 1 / 10 / 2'>Live project</Button> : null}
                {
                imgSrc ? <ImageBoxAnimated src={imgSrc} /> : null
                }           
            </HeaderText>
             
        </HeaderWrapper>
    )
});

export default MainHeader 