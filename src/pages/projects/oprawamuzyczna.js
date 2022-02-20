import React from 'react';
import styled from 'styled-components';

import MainHeader from '../../components/MainHeader/MainHeader';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDefault from '../../components/SectionDefault/SectionDefault';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import OtherProjects from '../../components/OtherProjects/OtherProjects';

import challangeSectionImage from '../../assets/images/Oprawa muzyczna.jpg';
import processSectionImage from '../../assets/images/OprawaMobile.png';
import websitePresentationImage from '../../assets/images/OprawaPresentation.png';
import oprawaMuzycznaLogo from '../../assets/images/OprawaMuzycznaLogo.svg';
import TopEventLogo from '../../assets/images/TopEventLogo.svg';
import ElPadoLogo from '../../assets/images/ElPadoWhite.svg';
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

const HeaderText = styled.div`

`;


const OprawaMuzycznaPage = () => {    
    
    const summary = {
    responsibilities: `branding, website redesign, website developement`,
    brief: `I received all data needed for branding, the client had a pretty clear vision about website layout. Website needed to be light and fresh.`
};

const challangeSection = {
    above: `challange`,
    title: `Creating unique wedding industry branding`,
    subTitle: `I was focused on bright branding with a lot of white space. Established brand colours reflected the wedding industry and company feel.`,
    imgSrc: {challangeSectionImage}
}
const processSection = {
    above: `process`,
    title: `Focusing on the website`,
    subTitle: `Website needed to be fast and SEO friendly. I choosed GatsbyJS as the main tech. This technology was not only SEO friendly but on the top of that
    with use of GraphQL and light image conversion fast and flexible. Building website using components helped with quick fixes.`,
    imgSrc: {processSectionImage}
}
const websiteSection = {
    above: `website`,
    title: `Fast and reliable`,
    subTitle: `The website developement was focused on speed and simplicity. I used brand colours to match the theme. Recieved the video from the client as well as the photos. I used in place of lacking photos Adobe Stock ones.
    Website will be in the process of testing soon and after implementation of SEO will go live.`,
}
return (
    <>
    <HelmetSeo title="Oprawa Muzyczna Wesel Project"/>
    <HeaderWrapper>
            <MainHeader 
                above='project'
                title='Oprawa Muzyczna Wesel'
                subTitle={`Work for a Warsaw based wedding's music company. Brand design needed to reflect modern feel and be easily connected to the industry. The deployment of live version has been postponed because of COVID-19 situation pushed-back the company plans.`}
                leftText={true}
                button
                buttonTo='https://dazzling-mccarthy-78f0ae.netlify.app/'
                imgSrc={oprawaMuzycznaLogo}
                // maxWidth='40vw'
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
        imgSrc={processSectionImage}
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
        imageSrc={websitePresentationImage}
        text1='Pastel palette to reflect the industry colours.'
        text2='Selected stock photos mixed with client photos'
        text3='Lot of white space and "delicate" mood'
    />
    <OtherProjects logo1={TopEventLogo} logo2={ElPadoLogo} project1="topevent" project2="elpado" above/>
    </>)
};

export default OprawaMuzycznaPage