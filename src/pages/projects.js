import React from "react";
import styled from 'styled-components';
import MainHeader from '../components/MainHeader/MainHeader';

import topEventLogo from '../assets/images/TopEventLogo.svg'; 
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
  &.mainHeaderProjects {
    flex-basis: 40%;
    max-width: 40vw;
  }
`;

const SideImage = styled.div`
  flex-basis: 60%;
`;

const ProjectCardsWrapper = styled.div`
  padding: 0 8vw 0 16vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProjectsPage = () => {
  return (
    <>
      <HeaderWrapper>
        <MainHeaderProjects 
          above='project'
          title='Top Event'
          subTitle={`Fresh and dynamic event company needed a modern,
          energetic branding. On the top of that we built together an unusual website reflecting brand strengths.`}
          leftText={true}
          className='mainHeaderProjects'
        />
        <SideImage>

        </SideImage>
      </HeaderWrapper>
      <ProjectCardsWrapper>
        <ProjectsCard 
          to='/projects/topevent' 
          btnText='Learn more'
          image={topEventLogo}
          feature1=''
          feature2=''
           />
        <ProjectsCard 
          to='/projects/elpado' 
          btnText='Learn more'
          image={elPadoLogo}
          feature1=''
          feature2=''
           />
        <ProjectsCard 
          to='/projects/oprawamuzyczna' 
          btnText='Learn more'
          image={oprawaMuzycznaLogo}
          feature1=''
          feature2=''
           />
      </ProjectCardsWrapper>
    </>
  )
};

export default ProjectsPage