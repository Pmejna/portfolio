import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 750px;

    @media (max-width: 760px) {
    max-width: 60vw;
    h1 {
      font-size: 2.8rem;
      line-height: 2.8rem;
    }
    p {
        width: 80%;
        margin-bottom: 0.4rem;
    }
    }
`;

const Above = styled.p`
    font-family: "IntervogueAltThin";
    font-size: ${({main}) => main ? '1.3rem' : '0.8rem'};
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #6D6D6D;
    margin-bottom: 1rem;
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};

    @media (max-width: 760px) {
        font-size: 1.2rem;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    line-height: 3.8rem;
    color: black;
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};
`;

const Title2 = styled.h2`
    font-size: 3rem;
    line-height: 3.8rem;
    color: black;
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};
`;

const SubTitle = styled.p`
    font-family: "IntervogueAltLight";
    margin-top: 0.4rem;
    font-size: ${({main}) => main ? '1.7rem' : '1.4rem'};
    color: #6D6D6D;
    text-align: ${({leftText}) => leftText ? 'left' : 'right'};

    @media (max-width: 760px) {
        margin-top: 2rem;
        font-size: 1.5rem;
    }
`;

const MainHeader = ({above, title, subTitle, main, leftText}) => {
    return (
        <HeaderWrapper main={main}>
            <Above leftText={leftText}>
                {above}
            </Above>
            {main ? 
                <Title leftText={leftText}>{title}</Title> : 
                <Title2 leftText={leftText}>{title}</Title2>
            }            
            <SubTitle 
                main={main} 
                leftText={leftText}
            >
                {subTitle} 
            </SubTitle>
        </HeaderWrapper>
    )
}

export default MainHeader 