import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import {revealSection, revealSection2} from '../../assets/animations/gsapAnimations';
import Button from "../Button/Button";
import ImageBoxAnimated from '../ImageBoxAnimated/ImageBoxAnimated';

const HeaderWrapper = styled.div`
    width: ${({main}) => main ? 'auto' : '100%'};
    max-width: ${({maxWidth}) => maxWidth ? maxWidth : '100vw'};
    background-color: transparent;
    flex-basis: ${({main, maxWidth}) => main || maxWidth ? 'auto' : '100vw'};
    opacity: ${({main}) => main ? '0' : '1'};
    padding: ${({leftText}) => leftText ? '0 3rem 0 0' : '0 0 0 3rem'}

    button {
        max-width: 180px;
    }

    @media (max-width: 768px) {
    max-width: ${({main}) => main ? '60vw' : '87vw'};
    flex-basis: auto;
    height: ${({main}) => main ? '60vh' : 'auto'};
    h1 {
      font-size: 2.8rem;
      line-height: 2.8rem;
    }
    p {
        width: ${({main}) => main ? '80%' : '100%'};
        margin-bottom: 0.4rem;
    }
    button {
        grid-area: 17 / 1 / 18 / 2;
        }
    }

    @media (max-width: 370px) {
        max-width: ${({main}) => main ? '80vw' : '87vw'};
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

    @media (max-width: 768px) {
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

    @media (max-width: 768px) {
        text-align: left;
        grid-area: ${({main}) => main ? '3 / 1 / 5 / 2' : '2 / 1 / 3 / 2'};
    }
`;

const Title2 = styled.h2`
    font-size: 2.6rem;
    line-height: 3.2rem;
    color: ${({textColor}) => textColor ? '#fff' : '#000'};
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};
    grid-area: 2 / 1 / 3 / 2;

    @media (max-width: 768px) {
        text-align: left;
        grid-area: 2 / 1 / 3 / 2;
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

    @media (max-width: 768px) {
        margin-top: 2rem;
        font-size: 1.5rem;
        text-align: left;
        grid-area: ${({main}) => main ? '7 / 1 /9 / 2' : '10 / 1 / 14 /2'} ;
    }
`;

const HeaderText = styled.div`
    width: 100%;
    /* max-width: 40vw; */

    display: ${({section}) => section ? 'block' : 'grid'};
    grid-template-columns: ${({main}) => main ? '1fr' : '1fr 1fr'};
    grid-template-rows: 1.3rem repeat(9, auto);

    @media (max-width: 760px) {
        grid-template-columns: ${({main}) => main ? '1fr' : '1fr'};;
        grid-template-rows: 1.4rem 2rem repeat(13, 3rem);
        width: 68vw;
        max-width: 68vw;
    }
    @media (max-width: 550px) {
        width: 100%;
        max-width: 100%;
    }
    @media (max-width: 550px) {
        width: 100%;
        max-width: 100%;
    }
`;

const MainHeader = React.forwardRef(({
    above, 
    background, 
    button, 
    buttonTo,
    borderColor,
    className, 
    header,
    imgSrc, 
    linkButton, 
    linkButtonText, 
    leftText, 
    main, 
    maxWidth,
    noAnimation, 
    ref,
    section,
    subTitle, 
    textColor, 
    title
    }
    ) => {

    let aboveRef = useRef(null);
    let titleRef = useRef(null);
    let title2Ref = useRef(null);
    let subtitleRef = useRef(null);
    let mainRef = useRef(null);
    let buttonRef = useRef(null);

    useEffect(() => {
        if (button && main) {
            revealSection2([mainRef, aboveRef, titleRef, subtitleRef, buttonRef]);
        }
        if (button) {
            revealSection2([mainRef, aboveRef, title2Ref, subtitleRef, buttonRef]);
        }
        if (linkButton) {
            revealSection([mainRef, aboveRef, subtitleRef, buttonRef]);
        }
        else if (main) {
            revealSection2([mainRef, aboveRef, titleRef, subtitleRef]);
        }
        else if (!button && !main && !linkButton && !noAnimation) {
            revealSection([aboveRef, title2Ref, subtitleRef]);
        }
        else if (noAnimation) {

        }
      }, [])
    
    return (
        <HeaderWrapper main={main} ref={el => (mainRef = el)} className={className} maxWidth={maxWidth} leftText={leftText}>
            <HeaderText section={section} main={main}>
                <Above leftText={leftText} background={background} ref={el => (aboveRef = el)}>
                    {above}
                </Above>
                {main ? 
                    <Title leftText={leftText} ref={el => (titleRef = el)} textColor={textColor} main>{title}</Title> : 
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
                {linkButton ? <Button borderColor={borderColor} to={linkButton} ref={el => (buttonRef = el)} gridArea='9 / 1 / 10 / 2'>{linkButtonText}</Button> : null}
                {
                imgSrc ? <ImageBoxAnimated src={imgSrc} header={header} mainHeader/> : null
                }           
            </HeaderText>
             
        </HeaderWrapper>
    )
});

export default MainHeader 