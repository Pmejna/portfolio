import React from 'react';
import styled from 'styled-components';
import MainHeader from '../../components/MainHeader/MainHeader';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDefault from '../../components/SectionDefault/SectionDefault';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';
import Contact from '../../components/Contact/Contact';
import ImageBoxAnimated from '../../components/ImageBoxAnimated/ImageBoxAnimated';

import challangeSectionImage from '../../assets/images/TopEventChallange.png';
import processSectionImage from '../../assets/images/TopEventProcess.png';
import websitePresentationImage from '../../assets/images/TopEventPresentation.png';
import topEventLogo from '../../assets/images/TopEventSygnet.png';


const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 56vh;
  display: flex;
  flex-direction: row;
  padding: 0 8vw 0 16vw;

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
        brief: `Client had a lot of experience in the event organisation field. The new emerged product needed to be modern, energetic and recognizable.`
    };

    const challangeSection = {
        above: `challange`,
        title: `Creating simple and effective logo`,
        subTitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `,
        imgSrc: {challangeSectionImage}
    }
    const processSection = {
        above: `process`,
        title: `Finding the brand voice`,
        subTitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `,
        imgSrc: {processSectionImage}
    }
    const websiteSection = {
        above: `website`,
        title: `Website solution`,
        subTitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `,
    }
    return (
        <>
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
            text1='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod '
            text2='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod '
            text3='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod '
        />
        </>
    )
};

export default TopEventPage