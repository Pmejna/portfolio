import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {revealSection} from '../../assets/animations/gsapAnimations';
import MainHeader from '../MainHeader/MainHeader';

const SectionParagraphWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: ${({leftText}) => leftText ? 'row' : 'row-reverse'};
    background-color: ${({black}) => black ? '#000' : '#fff'};
    flex-shrink: 0;
    
    /* img {
        width: 37%;
        height: 37%;
    } */
    

    @media (max-width: 760px) {
        flex-direction: column;
        padding-left: 8vw;
        padding-right: 6vw;
    }
`;

const SectionParagraph = React.forwardRef(({leftText, children, black, ...restProps}, ref) => {

    let ref1 = useRef(null);

    return (
        <SectionParagraphWrapper ref={ref} leftText={leftText} black={black}>
            <MainHeader leftText={leftText} black={black} {...restProps} ref={el => (ref1 = el)}/>
            {children}
        </SectionParagraphWrapper>
    )
}
);

export default SectionParagraph