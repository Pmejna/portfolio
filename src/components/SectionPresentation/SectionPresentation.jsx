import React from 'react';
import styled from 'styled-components';
import MainSlide from '../MainSlide/MainSlide';

const PresentationWrapper = styled(MainSlide)`
    justify-content: ${({justImage}) => justImage ? 'flex-start' : 'center'};
    align-items: center;


    figure {
        position: relative;
        overflow: ${({justImage}) => justImage ? 'hidden' : 'visible'};
        max-height: ${({justImage}) => justImage ? '300px' : null};

        img {
            max-width: 820px;
        }
    }

    p {
        position: absolute;
    }
    
    @media (max-width: 760px) {
        figure {
        max-width: 80vw;

        img {
            max-width: 80vw;
            height: auto;
        }
    }   
    p {
        position: static;
        max-width: 80vw;
        padding: 1rem 0;
        font-size: 1.4rem;

        ::before {
            content: '';
            width: 1.2rem;
            height: 1.2rem;
            background-color: var(--color-main);
            display: inline-block;
            margin-right: 0.4rem;
        }
    }
    }

    @media screen
    and (max-width: 1024px)
    and (orientation: portrait) {
        figure {
            img {
            max-width: 75vw;
        }
        }
        p {
        position: static;
        max-width: 80vw;
        padding: 1rem 0;
        font-size: 1.4rem;

        ::before {
            content: '';
            width: 1.2rem;
            height: 1.2rem;
            background-color: var(--color-main);
            display: inline-block;
            margin-right: 0.4rem;
        }
    }
    }
`;

const PresentationText1 = styled.p`
    bottom: 1rem;
    left: -7rem;
    max-width: 310px;
`;
const PresentationText2 = styled.p`
    bottom: -2.4rem;
    right: 0;
    max-width: 420px;
`;
const PresentationText3 = styled.p`
    top: 1.2rem;
    right: -8rem;
    max-width: 310px;
`;

const SectionPresentation = ({imageSrc, text1, text2, text3, alt, justImage}) => {
    return (
        <PresentationWrapper justImage={justImage}>
            <figure justImage={justImage}>
                <img src={imageSrc} alt={alt}/>  
                {
                    text1 && 
                <PresentationText1>
                    {text1}
                </PresentationText1>
                } 
                {   text2 && 
                <PresentationText2>
                    {text2}
                </PresentationText2>
                }
                {   text3 &&
                <PresentationText3>
                    {text3}
                </PresentationText3>             
                }
                
            </figure>
        </PresentationWrapper>
    )
   }
;

export default SectionPresentation