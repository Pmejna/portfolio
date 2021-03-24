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

    }

    @media (max-width: 760px) {
        flex-direction: column;
        padding-left: 8vw;
        padding-right: 6vw;

        figure {
        max-height: 40vh;
    }   
    }
`;

const SectionDefault = ({imgSrc, imgAlt, image, leftText, background, maxWidth, ...otherProps}) => {
    let imgRef = useRef(null);
    useEffect(() => {
        const direction = leftText ? '100' : '-100';
        if (image) {
            sectionImageAnimation(imgRef, direction);
        }

    }, [])
    return (
        <SectionWrapper leftText={leftText} background={background}>
            <MainHeader leftText={leftText} background={background} maxWidth={maxWidth} {...otherProps} section/>
            {
                image ? <figure ref={el => imgRef=el}>
                            <img src={imgSrc} alt={imgAlt}/>
                        </figure> : null
            }
        </SectionWrapper>
    )
};

export default SectionDefault