import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import Rectangle from '../Icons/Rectangle';
import {revealSectionImage} from '../../assets/animations/gsapAnimations';

const ImageWrapper = styled.div`
    flex-basis: 50%;
    position: relative;
    max-width: 410px;
    grid-area: ${({gridArea}) => gridArea ? gridArea : null};

    img {
        position: absolute;
        width: 100%;
        height: auto;
        top: 1rem;
        left: ${({imgLeft}) => imgLeft ? '-2rem' : '3rem'};
        z-index: 2;
    }

    @media (max-width: 760px) {
        display: flex;
        flex-direction:
        row;
        justify-content: flex-start;
        grid-area: ${({gridArea}) => gridArea ? gridArea : '5 / 1 / 9 / 2'};
        max-width: 350px;
        img {
            position: relative;
            display: block;
            left: unset;
            height: 100%;
            width:auto;
    }
        }
        
`;

const Rectangle1 = styled(Rectangle)`
    position: absolute;
    top: 1rem;
    right: -7rem;
    transform: scale(0.8);
    z-index: 3;
     @media (max-width: 760px) {
         
    }
`;

const Rectangle2 = styled(Rectangle)`
    position: absolute;
    top: 12rem;
    right: -7.4rem;
    transform: scale(0.6);
    z-index: 3;
     @media (max-width: 760px) {
         
    }
`;
const Rectangle3 = styled(Rectangle)`
    position: absolute;
    top: 8rem;
    right: -4rem;
    transform: scale(0.8);
    z-index: 3;
     @media (max-width: 760px) {
         right: 2rem;
    }
`;

const Rectangle4 = styled(Rectangle)`
    position: absolute;
    top: 18rem;
    left: 16rem;
    transform: scale(1);
    z-index: 1;
     @media (max-width: 760px) {
         top: 5rem;
         left: 13rem;
    }
`;
const Rectangle5 = styled(Rectangle)`
    position: absolute;
    top: 5rem;
    left: 2.3rem;
    transform: scale(1);
    z-index: 1;
     @media (max-width: 760px) {
         
    }
`;
const Rectangle6 = styled(Rectangle)`
    position: absolute;
    top: -1.2rem;
    left: -2rem;
    transform: scale(0.5);
    z-index: 1;
     @media (max-width: 760px) {
        top: -1.2rem;
        left: 1rem;
    }
`;
const Rectangle7 = styled(Rectangle)`
    position: absolute;
    top: -0.8rem;
    left: 17rem;
    transform: scale(1.2);
    z-index: 1;
     @media (max-width: 760px) {
         
    }
`;
const Rectangle8 = styled(Rectangle)`
    position: absolute;
    bottom: 11.4rem;
    left: -1rem;
    transform: scale(1.2);
    z-index: 1;
     @media (max-width: 760px) {
        transform: scale(0.6);
        left: unset;
        right: 3rem;
        bottom: 7.4rem;
    }
`;
const Rectangle9 = styled(Rectangle)`
    position: absolute;
    top: -0.2rem;
    left: 7rem;
    transform: scale(0.6);
    z-index: 1;
     @media (max-width: 760px) {
         top: unset;
         bottom: -2.6rem;
    }
`;

const ImageBoxAnimated = ({src, variant2, imgLeft, gridArea}) => {
    let imageRef = useRef(null);
    let rect1Ref = useRef(null);
    let rect2Ref = useRef(null);
    let rect3Ref = useRef(null);
    let rect4Ref = useRef(null);
    let rect5Ref = useRef(null);
    let rect6Ref = useRef(null);
    let rect7Ref = useRef(null);
    let rect8Ref = useRef(null);
    let rect9Ref = useRef(null);

    useEffect(() => {
        if (variant2) {
            revealSectionImage([imageRef, rect4Ref, rect5Ref, rect6Ref, rect7Ref, rect8Ref, rect9Ref]);
        }

        else {
            revealSectionImage([imageRef, rect1Ref, rect2Ref, rect3Ref, rect4Ref, rect5Ref, rect6Ref, rect7Ref, rect8Ref, rect9Ref]);
        }
     }, [])
   
    return (
        <ImageWrapper imgLeft={imgLeft}>           
            <img src={src} ref={el => (imageRef = el)} />
            {
                variant2 ? 
                <>
                    
                </> :
                <>
                    <Rectangle1 color='#0AFCD3' ref={el => (rect1Ref = el)}/>
                    <Rectangle2 color='#F9F9F9' ref={el => (rect2Ref = el)}/>
                    <Rectangle3 color='#0AFCD3' ref={el => (rect3Ref = el)}/>
                    <Rectangle4 color='#F9F9F9' ref={el => (rect4Ref = el)}/>
                    <Rectangle5 color='#F9F9F9' ref={el => (rect5Ref = el)}/>
                    <Rectangle6 color='#0AFCD3' ref={el => (rect6Ref = el)}/>
                    <Rectangle7 color='#F9F9F9' ref={el => (rect7Ref = el)}/>
                    <Rectangle8 color='#0AFCD3' ref={el => (rect8Ref = el)}/>
                    <Rectangle9 color='#0AFCD3' ref={el => (rect9Ref = el)}/>
                </>
            }
        </ImageWrapper>
    )
};

export default ImageBoxAnimated