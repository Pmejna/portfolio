import React from 'react';
import styled from 'styled-components';

const SectionParagraph = ({title, header, text}) => {
    return (
        <SectionParagraphWrapper>
            <h2>{title}</h2>
            <h3>{header}</h3>
            <p>{text}</p>
        </SectionParagraphWrapper>
    )
};

export default SectionParagraph