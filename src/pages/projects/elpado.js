import React from 'react';
import styled from 'styled-components';

import MainHeader from '../../components/MainHeader/MainHeader';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDefault from '../../components/SectionDefault/SectionDefault';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';


import challangeSectionImage from '../../assets/images/ElPado2.png';
import elPadoLogo from '../../assets/images/ElPadoLogo.svg';
import stylescapes from '../../assets/images/StylescapeElPado.png';
import businessCard from '../../assets/images/Wizytowki.jpg';
import TopEventLogo from '../../assets/images/TopEventLogo.svg';
import internettLogoWhite from '../../assets/images/SVG/internett-logo-white.svg';
import OtherProjects from '../../components/OtherProjects/OtherProjects';
import HelmetSeo from '../../components/Helmet/HelmetSeo';

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 56vh;
  display: flex;
  flex-direction: row;
  padding: 0 8vw 0 16vw;

  @media screen
    and (max-width: 1024px)
    and (orientation: portrait) {
        min-height: 38vh;
    }  

  @media (max-width: 760px) {
        padding-left: 8vw;
        padding-right: 6vw;
    }
`;

const ElPadoPage = () => {    
    
    const summary = {
    responsibilities: `branding, print materials`,
    brief: `My highschool friend contacted me in regards to his new emarging electric services company. I had full freedom of creation. We needed to pick from two company names: "ElPado" and "MagEl". Happy to see that results bring him a lot of clients and as a final result the company recognision developed quickly`
};

const challangeSection = {
    above: `challange`,
    title: `Create brand which attract customers`,
    subTitle: `The challange seemed quite typical: create a professional branding which will help business to grow. To stand out from the croud we decided to pick the ElPado company name, modern typography and symbols. The other challange was to make a branding recognizable as an electric services. `,
}
const processSection = {
    above: `process`,
    title: `Stylescapes as a design direction`,
    subTitle: `I started brand design process from sketches. From these I created three brand options. Each of them represented different energy and style. I presented all of them using stylescapes. These can roughly tell you what iconography might be used, how images might acompany the colours and typography. I created as well a home-page like mockups to give an idea how eventual future website might look in particular style`,
}
const websiteSection = {
    above: `materials`,
    title: `Business cards, banners, social media graphics.`,
    subTitle: `All of these been quickly developed after final direction have been decided. The result was exactly like my friend expected, which been followed by future leads from the customers.`,
}
return (
    <>
    <HelmetSeo title="ElPado Project"/>
    <HeaderWrapper>
            <MainHeader 
                above='project'
                title='ElPado'
                subTitle={`Family business run by my highscool friend needed a "bang" and a modern touch. Enjoyed every bit of it`}
                leftText={true}
                imgSrc={elPadoLogo}
                header
                // main
            />
    </HeaderWrapper>
    <ProjectSummary responsibilities={summary.responsibilities} brief={summary.brief}/>
    <SectionDefault 
        above={challangeSection.above}
        title={challangeSection.title}
        subTitle={challangeSection.subTitle}
        leftText={true}
        image
        imgSrc={challangeSectionImage}
    />
    <SectionDefault 
        above={processSection.above}
        title={processSection.title}
        subTitle={processSection.subTitle}
        image
        imgSrc={stylescapes}
    />
    <SectionDefault 
        above={websiteSection.above}
        title={websiteSection.title}
        subTitle={websiteSection.subTitle}
        background='#000' 
        className
        textColor='#fff'
        leftText
        maxWidth='1800px'
    />
    <SectionPresentation
        justImage
        imageSrc={businessCard}
    />
    <OtherProjects logo1={TopEventLogo} logo2={internettLogoWhite} project1="topevent" project2="internett"/>
    </>)
};

export default ElPadoPage