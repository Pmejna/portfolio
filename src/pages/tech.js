import React from "react"
import styled from 'styled-components';

import MainHeader from '../components/MainHeader/MainHeader';
import SEO from '../components/Seo';
import techStack from '../assets/images/TechStack.svg';


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
`;

const SkillsContainer = styled.section`
  width: 100vw;
  background-color: #000;
  min-height: 30vh;
  position: relative;
  margin-top: 5rem;
  padding: 2rem 8vw 2rem 16vw;

  @media (max-width: 1240px) {
    padding-top: 3rem;
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-gap: 2rem;
  width: 60%;
  height: 100%;
  list-style: none;
  grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);

  @media (max-width: 760px) {
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 0;
    width: 100%;
    font-size: 1.4rem;
    padding: 1rem 8vw;
  }
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

  @media (max-width: 760px) {
    position: static;
    width: 100vw;
    max-width: 100%;
    min-height: 16rem;
    align-items: flex-start;
    padding: 2rem 8vw;
  }

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

    @media (max-width: 760px) {
      padding-left: 1.4rem;
      font-size: 1.5rem;
    }

    &::before {
      content: "";
      position: absolute;
      left: -1.3rem;
      top: 0.2rem;
      display: block;
      width: 0.7rem;
      height: 0.7rem;
      background-color: #000;

      @media (max-width: 760px) {
        left: -0.2rem;

    }
    }
  }
`;


const TechPage = () => (
  <>
    <SEO title="Tech Stack and tools used - Przemyslaw Mejna"/>
    <HeaderWrapper>
        <MainHeaderProjects
          above='tech stack'
          title='Technology I use'
          subTitle={`I expand my skills over frontend field. I love the possibilities which backend offers. The possibilities given by C# environment seems endless. Apart programming I design, animate and illustrate. That's why Adobe CC is my second nature.`}
          leftText={true}
          className='mainHeaderProjects'
          imgSrc={techStack}
        />
    </HeaderWrapper>
    <SkillsContainer>
          <SkillsList>
              <SkillsItem>Javascript</SkillsItem>
              <SkillsItem>React</SkillsItem>
              <SkillsItem>GatsbyJS</SkillsItem>
              <SkillsItem>GSAP Animation</SkillsItem>
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