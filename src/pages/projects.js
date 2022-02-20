import React, {useRef, useEffect} from "react";
import styled from 'styled-components';
import MainHeader from '../components/MainHeader/MainHeader';
import {revealCards} from '../assets/animations/gsapAnimations';

import topEventLogo from '../assets/images/TopEventLogoBlack.svg'; 
import internettLogo from '../assets/images/SVG/internett-logo.svg'; 
import elPadoLogo from '../assets/images/ElPadoLogo.svg'; 
import oprawaMuzycznaLogo from '../assets/images/OprawaMuzycznaLogo.svg'; 
import ProjectsCard from "../components/ProjectsCard/ProjectsCard";
import HelmetSeo from "../components/Helmet/HelmetSeo";

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
  margin-top: 3vh;
  margin-bottom: 16vh;

  @media (max-width: 760px) {
      padding-left: 8vw;
      padding-right: 6vw;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
`;

const ProjectsPage = () => {
  let card1 = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);
  let card4 = useRef(null);

  useEffect(() => {
    revealCards([card1, card2, card3, card4]);
  });

  return (
    <>
      <HelmetSeo title="Przemyslaw Mejna - Web Developement and Design Portfolio Projects"/>
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
          to='/projects/internett/' 
          btnText='Learn more'
          image={internettLogo}
          feature1='Web developement'
          feature2='Brand design'
          ref={element => (card1 = element)}
           />
        <ProjectsCard 
          to='/projects/topevent/' 
          btnText='Learn more'
          image={topEventLogo}
          feature1='Web developement'
          feature2='Brand design'
          ref={element => (card2 = element)}
           />
        <ProjectsCard 
          to='/projects/elpado/' 
          btnText='Learn more'
          image={elPadoLogo}
          feature1='Brand design'
          feature2=''
          ref={element => (card3 = element)}
           />
        <ProjectsCard 
          to='/projects/oprawamuzyczna/' 
          btnText='Learn more'
          image={oprawaMuzycznaLogo}
          feature1='Web developement'
          feature2='Brand design'
          ref={element => (card4 = element)}
           />
      </ProjectCardsWrapper>
    </>
  )
};

export default ProjectsPage