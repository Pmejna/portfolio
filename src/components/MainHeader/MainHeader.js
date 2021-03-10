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

const Author = styled.p`
    font-family: "IntervogueAltThin";
    font-size: 1.3rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #6D6D6D;

    @media (max-width: 760px) {
        font-size: 1.2rem;
    }
`;

const Title = styled.h1`
    font-size: 4rem;
    line-height: 3.8rem;
    color: black;
`;

const SubTitle = styled.p`
    font-family: "IntervogueAltLight";
    margin-top: 0.4rem;
    font-size: 1.7rem;
    color: #6D6D6D;

    @media (max-width: 760px) {
        margin-top: 2rem;
        font-size: 1.5rem;
    }
`;

const MainHeader = (props) => {
    return (
        <HeaderWrapper>
            <Author>Przemyslaw Mejna</Author>
            <Title>Great should be a new
            standard</Title>
            <SubTitle>
            I believe that combining both of the above is a must for great online success. The "regular" never will be enough. 
            </SubTitle>
        </HeaderWrapper>
    )
}

export default MainHeader 