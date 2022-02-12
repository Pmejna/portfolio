import React from 'react';
import styled from 'styled-components';
import MainHeader from '../../components/MainHeader/MainHeader';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDefault from '../../components/SectionDefault/SectionDefault';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import OtherProjects from '../../components/OtherProjects/OtherProjects';
import SEO from '../../components/SEO/SEO';

import challangeSectionImage from '../../assets/images/TopEventChallange.png';
import processSectionImage from '../../assets/images/TopEventProcess.png';
import websitePresentationImage from '../../assets/images/TopEventPresentation.png';
import topEventLogo from '../../assets/images/TopEventSygnet.png';
import ElPadoLogo from '../../assets/images/ElPadoWhite.svg';
import OprawaMuzycznaLogo from '../../assets/images/OprawaMuzycznaWhite.svg';


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

const TopEventPage = () => {
    const summary = {
        responsibilities: `branding, website redesign, website developement`,
        brief: `Client had a lot of experience in the event organisation field. The new emerged company needed to be modern, energetic and recognizable.`
    };

    const challangeSection = {
        above: `challange`,
        title: `Creating simple and effective logo`,
        subTitle: `Simple is not equal easy. During the process I made tons of logo sketches. I connected few concepts in one. Mountain at the bottom as a 
        mountain "top/peak", pillars of light on left and right as ones during a big events lighting up the night sky, and diamond/gem on the top. Simultanously I been working
        on typography for the title `,
        imgSrc: {challangeSectionImage}
    }
    const processSection = {
        above: `process`,
        title: `From branding to webdesign`,
        subTitle: `Initially my task was to focus on the logo design and all print materials creating brand design (applied in business cards, proposals, stage equipement brand stickers etc).
        I was not responsible for UI/UX design process of the initial website. After a while the company deided that website based on Wordpress doesn't meet their
        needs. I been asked to design User Interface and create mockups.`,
        imgSrc: {processSectionImage}
    }
    const websiteSection = {
        above: `website`,
        title: `Website redesign`,
        subTitle: `Migration from Wordpress to custom CMS solution wasn't straightforward as not only content changed but as well the whole design and approach to UI/UX.
        We decided that previous website was boring and confusing. Design was esthetic but didn't represented the company as modern and energetic. Top Event hired for CMS solution 
        Alakhaine Specialist Consulting. I been asked to create working model of a website written in HTML, CSS and JavaScript. That have been transfered onto CMS using PHP by ALakhaine. The final
        website is designed in dark mode which align with the company branding.`,
    }
    return (
        <>
        <SEO title="TopEvent project"/>
        <HeaderWrapper>
                <MainHeader 
                    above='project'
                    title='Top Event'
                    subTitle={`Fresh and dynamic event company needed a modern,
                    energetic branding. On the top of that we built together an unusual website reflecting brand strengths.`}
                    leftText={true}
                    button
                    buttonTo='https://topevent.pl'
                    // maxWidth='100'
                    imgSrc={topEventLogo}
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
            text1='Straigtforward side navigation for desktop view'
            text2='Navigation divided into three parts left and right and the top one. Each serves different purpose '
            text3='Website was designed in dark theme in mind  '
        />
        <OtherProjects logo1={ElPadoLogo} logo2={OprawaMuzycznaLogo} project1="elpado" project2="oprawamuzyczna"/>
        </>
    )
};

export default TopEventPage