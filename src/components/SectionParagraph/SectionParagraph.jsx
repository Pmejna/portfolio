import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import MainHeader from '../MainHeader/MainHeader';

const SectionParagraphWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: ${({leftText}) => leftText ? 'row' : 'row-reverse'};
    padding: 4rem 8vw 4rem 16vw;
`;

const SectionParagraph = React.forwardRef(({leftText, children, ...restProps}, ref) => {

    let ref1 = useRef(null);

    useEffect(() => {
        console.log(ref1)
      }, [ref1]);

    return (
        <SectionParagraphWrapper ref={ref} leftText={leftText}>
            <MainHeader leftText={leftText} {...restProps} ref={ref1}/>
            {children}
        </SectionParagraphWrapper>
    )
}
);

export default SectionParagraph