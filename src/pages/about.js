import React from "react"
import styled from 'styled-components';
import HelmetSeo from "../components/Helmet/HelmetSeo";

import MainHeader from '../components/MainHeader/MainHeader';

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 46vh;
  display: flex;
  flex-direction: row;
  padding: 0 8vw 0 16vw;

  @media (max-width: 760px) {
        padding-left: 8vw;
        padding-right: 6vw;
    }
`;

const MainHeaderProjects = styled(MainHeader)`
  &.mainHeaderProjects {
    display: flex;
  }
`;

const SkillsContainer = styled.section`
  width: 100vw;
  background-color: #000;
  min-height: 30vh;
  position: relative;
  margin-top: 5rem;
`;

const SkillsList = styled.ul`

`;

const SkillsOther = styled.div`
  position: absolute;
  right: 8vw;
  bottom: 0;
  width: 26vw;
  max-width: 400px;
  min-height: 36vh;
  background-color: var(--color-main);
`;


const AboutPage = () => (
  <>
    <HelmetSeo title="About Przemyslaw Mejna"/>
    <HeaderWrapper>
        <MainHeaderProjects
          above='about'
          title='I am inspired by code logic, design simplicity and beauty of illustration'
          subTitle={`Appriciate your time to learn a bit more about who you might work with. One of my future goals is to found game developement studio.`}
          leftText={true}
          className='mainHeaderProjects'
        />
    </HeaderWrapper>
  </>
)

export default AboutPage