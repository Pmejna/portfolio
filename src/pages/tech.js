import React from "react"
import styled from 'styled-components';

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
    flex-basis: 40%;
    max-width: 40vw;
  }
`;

const SideImage = styled.div`
  flex-basis: 60%;
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


const TechPage = () => (
  <>
    <HeaderWrapper>
        <MainHeaderProjects
          above='tech stack'
          title='Technology I use'
          subTitle={`I am in love with technology. I expand my skills (ponad) frontend field. I love the possibilities which offer you backend. The possibilities given by C# environment seems endless. Apart programming I design, animate and illustrate. That's why Adobe CC is my second nature.`}
          leftText={true}
          className='mainHeaderProjects'
        />
        <SideImage></SideImage>
    </HeaderWrapper>
    <SkillsContainer>
          <SkillsOther></SkillsOther>
    </SkillsContainer>
  </>
)

export default TechPage