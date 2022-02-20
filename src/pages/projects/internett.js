import React from 'react';
import styled from 'styled-components';
import MainHeader from '../../components/MainHeader/MainHeader';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDefault from '../../components/SectionDefault/SectionDefault';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import OtherProjects from '../../components/OtherProjects/OtherProjects';

import challangeSectionImage from '../../assets/images/login-internett.jpg';
import processSectionImage from '../../assets/images/pakiety-internett.jpg';
import websitePresentationImage from '../../assets/images/before-after-internett.jpg';
import topEventLogo from '../../assets/images/TopEventLogo.svg';
import internettLogo from '../../assets/images/SVG/internett-logo.svg';
import OprawaMuzycznaLogo from '../../assets/images/OprawaMuzycznaWhite.svg';
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
        flex-direction: column;
    }
`;

const HeaderText = styled.div`

`;

const InternettPage = () => {
    const summary = {
        responsibilities: `website development, branding redesign`,
        brief: `The brand Internett is a broadband provider mostly providing services around Warsaw.
        They needed fast and modern website, SEO friendly easy to scale. They needed to implement over 50 pages of locations where their services
        are available with the ability to expand in the future.`
    };

    const challangeSection = {
        above: `challange`,
        title: `Modern website generating leads`,
        subTitle: `Internett is a local and reliable brand using modern tech and workflow to deliver services at highest standard within affordable price range. 
        The company was growing organically but lacked proper online presence and branding to generate leads online. Their website was based on bootstrap theme. 
        Outdated, without precise direction and branding which affected their online lead generation. My challenge was to code and design new website to fix all of the issues.`,
        imgSrc: {challangeSectionImage}
    }
    const processSection = {
        above: `process`,
        title: `Mockups and Development`,
        subTitle: `I created two initial mockups and designed a new logo based on given brand color and brief. The website has been written in Gatsby/React.
        I received  all the copy written for the website and  started the initial pages. After couple revisions most static pages has been generated.
        When I received all of the content for towns/villages I written the nodejs script to programmatically generate the pages with all of the content and SEO. `,
        imgSrc: {processSectionImage}
    }
    const websiteSection = {
        above: `website`,
        title: `Web design solution`,
        subTitle: `The website was targeted mostly to energetic, modern families looking for peaceful life in the Warsaw suburbs, willing 
        not compromise on the broadband connection and to housing development companies operating in the region. Website reflected all of the target groups 
        and highlighted all of the available plans and services. The modern feel was accompanied with SEO friendly content. The new website advanced in the 
        search result ranks thanks to changes and the cooperation with the SEO team.`,
    }
    return (
        <>
        <HelmetSeo title="TopEvent project"/>
        <HeaderWrapper>
            <MainHeader 
                above='project'
                title='Internett'
                subTitle={`Fresh and dynamic event company needed a modern,
                energetic branding. On the top of that we built together an unusual website reflecting brand strengths.`}
                leftText={true}
                button
                buttonTo='https://www.internett.pl'
                // maxWidth='100'
                imgSrc={internettLogo}
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
            // text1='Straigtforward side navigation for desktop view'
            // text2='Navigation divided into three parts left and right and the top one. Each serves different purpose '
            // text3='Website was designed in dark theme in mind  '
        />
        <OtherProjects logo1={topEventLogo} logo2={OprawaMuzycznaLogo} project1="topevent" project2="oprawamuzyczna"/>
        </>
    )
};

export default InternettPage;