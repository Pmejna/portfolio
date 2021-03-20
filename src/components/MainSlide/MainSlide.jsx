import React from 'react';
import styled from 'styled-components';

const MainSlide = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2rem 8vw 2rem 16vw;

  @media (max-width: 760px) {
        padding: 2rem 6vw 2rem 8vw;
    }
`;

export default MainSlide