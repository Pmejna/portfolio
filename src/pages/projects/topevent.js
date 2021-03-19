import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import MainHeader from '../../components/MainHeader/MainHeader';

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: row;
  padding: 0 8vw 0 16vw;

  @media (max-width: 760px) {
        padding-left: 8vw;
        padding-right: 6vw;
    }
`;

const HeaderText = styled.div`

`;

const TopEventPage = () => {
    return (
        <HeaderWrapper>
            <HeaderText>
                <MainHeader 
                    above='project'
                    title='Top Event'
                    subTitle={`Fresh and dynamic event company needed a modern,
                    energetic branding. On the top of that we built together an unusual website reflecting brand strengths.`}
                    leftText={true}
                    button
                />
            </HeaderText>
        </HeaderWrapper>
    )
};

export default TopEventPage