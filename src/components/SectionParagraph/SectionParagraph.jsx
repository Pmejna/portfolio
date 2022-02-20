import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {revealSection} from '../../assets/animations/gsapAnimations';
import MainHeader from '../MainHeader/MainHeader';

const SectionParagraphWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: ${({leftText}) => leftText ? 'row' : 'row-reverse'};
    background-color: ${({background}) => background ? background : '#fff'};
    flex-shrink: 0;
    
    /* img {
        width: 37%;
        height: 37%;
    } */
    

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 16vw;
        padding-right: 6vw;
    }
    @media (max-width: 560px) {
        flex-direction: column;
        padding-left: 8vw;
        padding-right: 6vw;
    }
`;

const SectionParagraph = React.forwardRef(({leftText, children, background, borderColor, textColor, maxWidth, ...restProps}, ref) => {

    let ref1 = useRef(null);

    return (
        <SectionParagraphWrapper ref={ref} leftText={leftText} background={background}>
            <MainHeader leftText={leftText} background={background} borderColor={borderColor} {...restProps} ref={el => (ref1 = el)} textColor={textColor} section maxWidth={maxWidth}/>
            {children}
        </SectionParagraphWrapper>
    )
}
);

export default SectionParagraph