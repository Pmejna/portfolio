import React from "react";
import styled from 'styled-components';
import MainHeader from '../components/MainHeader/MainHeader';

import topEventLogo from '../assets/images/TopEventLogoBlack.svg'; 
import elPadoLogo from '../assets/images/ElPadoLogo.svg'; 
import oprawaMuzycznaLogo from '../assets/images/OprawaMuzycznaLogo.svg'; 
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";

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

const MainHeaderProjects = styled(MainHeader)`

`;


const ProjectCardsWrapper = styled.div`
  padding: 0 8vw 0 16vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 300px;
  gap: 2rem;
  margin-top: 8vh;
  margin-bottom: 16vh;

  @media (max-width: 760px) {
      padding-left: 8vw;
      padding-right: 6vw;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
`;

const ProjectsPage = () => {
  return (
    <>
      <HeaderWrapper>
        <MainHeaderProjects 
          above='project'
          title='Selection of my projects'
          subTitle={`Fresh and dynamic event company needed a modern,
          energetic branding. On the top of that we built together an unusual website reflecting brand strengths.`}
          leftText={true}
          className='mainHeaderProjects'
        />
      </HeaderWrapper>
      <ProjectCardsWrapper>
        <ProjectsCard 
          to='/projects/topevent' 
          btnText='Learn more'
          image={topEventLogo}
          feature1='Web developement'
          feature2='Brand design'
           />
        <ProjectsCard 
          to='/projects/elpado' 
          btnText='Learn more'
          image={elPadoLogo}
          feature1='Brand design'
          feature2=''
           />
        <ProjectsCard 
          to='/projects/oprawamuzyczna' 
          btnText='Learn more'
          image={oprawaMuzycznaLogo}
          feature1='Web developement'
          feature2='Brand design'
           />
      </ProjectCardsWrapper>
    </>
  )
};

export default ProjectsPage