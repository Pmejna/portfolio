import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import MainHeader from '../MainHeader/MainHeader';
import MainSlide from '../MainSlide/MainSlide';
import {sectionImageAnimation} from '../../assets/animations/gsapAnimations';

const SectionWrapper = styled(MainSlide)`
    width: 100%;
    display: flex;
    flex-direction: ${({leftText}) => leftText ? 'row' : 'row-reverse'};
    background-color: ${({background}) => background ? background : '#fff'};
    flex-shrink: 0;
    gap: 3rem;
    margin-top: 2rem;

    figure {
        overflow: hidden;
        flex-basis: 90%;
    }

    img {
        width: 100%;
    }

    @media (max-width: 760px) {
        flex-direction: column;
        padding-left: 8vw;
        padding-right: 6vw;

        figure {
        max-height: 40vh;
    }   
    }

    @media screen
    and (max-width: 1024px)
    and (orientation: portrait) {
        flex-direction: column;
        figure {
            height: 100%;
            width: auto;
        }
        img {
            height: auto;
            width: 100%;
        }
    }
`;

const MainHeaderStyled = styled(MainHeader)`
    @media screen
    and (max-width: 1024px)
    and (orientation: portrait) {
        width: auto;
        flex-basis: unset;
    }
`;

const SectionDefault = ({imgSrc, imgAlt, image, leftText, background, maxWidth, noAnimation, ...otherProps}) => {
    let imgRef = useRef(null);
    useEffect(() => {
        const direction = leftText ? '100' : '-100';
        if (image && !noAnimation) {
            console.log(noAnimation)
            sectionImageAnimation(imgRef, direction);
        }

    }, [])
    return (
        <SectionWrapper leftText={leftText} background={background}>
            <MainHeaderStyled leftText={leftText} background={background} maxWidth={maxWidth} noAnimation={noAnimation} {...otherProps} section/>
            {
                image ? <figure ref={el => imgRef=el}>
                            <img src={imgSrc} alt={imgAlt}/>
                        </figure> : null
            }
        </SectionWrapper>
    )
};

export default SectionDefault