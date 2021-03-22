import React from 'react';
import styled from 'styled-components';

import MainHeader from '../../components/MainHeader/MainHeader';
import ProjectSummary from '../../components/ProjectSummary/ProjectSummary';
import SectionDefault from '../../components/SectionDefault/SectionDefault';
import SectionPresentation from '../../components/SectionPresentation/SectionPresentation';

import challangeSectionImage from '../../assets/images/TopEventChallange.png';
import processSectionImage from '../../assets/images/TopEventProcess.png';
import websitePresentationImage from '../../assets/images/TopEventPresentation.png';

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 56vh;
  display: flex;
  flex-direction: row;
  padding: 0 8vw 0 16vw;

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
    brief: `I received all data needed for branding, the client had as well pretty clear vision about website layout. Website needed to be light, fresh and airy.`
};

const challangeSection = {
    above: `challange`,
    title: `Creating unique wedding industry branding`,
    subTitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `,
    imgSrc: {challangeSectionImage}
}
const processSection = {
    above: `process`,
    title: `Focusing on the website`,
    subTitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut `,
    imgSrc: {processSectionImage}
}
const websiteSection = {
    above: `website`,
    title: `Light website`,
    subTitle: `The website developement was focused on speed and simplicity. I used brand colours to match the theme. Recieved the video from the client as well as the photos. I used in place of lacking photos Adobe Stock ones.`,
}
return (
    <>
    <HeaderWrapper>
        <HeaderText>
            <MainHeader 
                above='project'
                title='Oprawa Muzyczna Wesel'
                subTitle={`Work for a Warsaw based wedding's music company. Brand design needed to reflect modern feel and be easily connected to the industry`}
                leftText={true}
                button
                buttonTo='https://topevent.pl'
                maxWidth='40vw'
                // main
            />
        </HeaderText>
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
    </>)
};

export default OprawaMuzycznaPage