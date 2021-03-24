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
  padding: 2rem 8vw 2rem 16vw;

  @media (max-width: 1240px) {}
    padding-top: 3rem;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 60%;
  height: 100%;
  list-style: none;
`;

const SkillsItem = styled.li`
  color: #fff;
  text-transform: uppercase;
`;

const SkillsOther = styled.div`
  position: absolute;
  right: 8vw;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 26vw;
  max-width: 400px;
  min-height: 36vh;
  background-color: var(--color-main);
  padding-top: 2rem;
  text-transform: uppercase;

  h2 {
    margin-bottom: 2rem;
  }
  ul {
    list-style: none;
  }
  li {
    position: relative;
    margin-bottom: 0.6rem;
    font-family: 'IntervogueAltLight', sans-serif;

    &::before {
      content: "";
      position: absolute;
      left: -1.3rem;
      top: 0.2rem;
      display: block;
      width: 0.7rem;
      height: 0.7rem;
      background-color: #000;
    }
  }
`;


const TechPage = () => (
  <>
    <HeaderWrapper>
        <MainHeaderProjects
          above='tech stack'
          title='Technology I use'
          subTitle={`I expand my skills over frontend field. I love the possibilities which backend offers. The possibilities given by C# environment seems endless. Apart programming I design, animate and illustrate. That's why Adobe CC is my second nature.`}
          leftText={true}
          className='mainHeaderProjects'
        />
        <SideImage></SideImage>
    </HeaderWrapper>
    <SkillsContainer>
          <SkillsList>
              <SkillsItem>Javascript</SkillsItem>
              <SkillsItem>React</SkillsItem>
              <SkillsItem>GatsbyJS</SkillsItem>
              <SkillsItem>HTML</SkillsItem>
              <SkillsItem>CSS/SCSS</SkillsItem>
              <SkillsItem>Typescript</SkillsItem>
              <SkillsItem>sql</SkillsItem>
              <SkillsItem>c#</SkillsItem>
              <SkillsItem>Adobe CC</SkillsItem>
          </SkillsList>
          <SkillsOther>
            <h2>Other skills</h2>
            <ul>
              <li>graphic design</li>
              <li>illustration</li>
              <li>animation</li>
              <li>3d design</li>
            </ul>
          </SkillsOther>
    </SkillsContainer>
  </>
)

export default TechPage