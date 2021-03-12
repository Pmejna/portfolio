import React from 'react';
import styled from 'styled-components';
import MainHeader from '../MainHeader/MainHeader';

const SectionParagraphWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: ${({leftText}) => leftText ? 'row' : 'row-reverse'};
    padding: 4rem 0 4rem;
`;

const SectionParagraph = ({leftText, children, ...restProps}) => {
    return (
        <SectionParagraphWrapper leftText={leftText}>
            <MainHeader leftText={leftText} {...restProps}/>
            {children}
        </SectionParagraphWrapper>
    )
};

export default SectionParagraph