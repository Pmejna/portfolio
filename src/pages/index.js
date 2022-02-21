import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import {graphql} from "gatsby";
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import MainHeader from "../components/MainHeader/MainHeader";
import SectionParagraph from "../components/SectionParagraph/SectionParagraph";
import SectionImage from '../components/SectionParagraph/SectionImage/SectionImage';
import internettLogo from "../assets/images/SVG/internett-logo-white.svg";
import HelmetSeo from "../components/Helmet/HelmetSeo";



const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 84vh;
  display: flex;
  flex-direction: row;
  padding: 0 8vw 0 16vw;

  @media (max-width: 760px) {
        padding-left: 8vw;
        padding-right: 6vw;
    }
`;
const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 60%;

    @media (max-width: 1240px) {
    flex-basis: 50%;
  }

  @media screen
    and (max-width: 1024px)
    and (orientation: portrait) {
      max-height: 60vh;      
    }


`;

const ImageContent = styled.div`
  flex-basis: 40%;
  max-height: 100vh;
  position: relative;
`;

const MainImage = styled.img`
    position: absolute;
    height: 90vh;
    width: auto;
    bottom: 0;
    right: 0; 

    @media (max-width: 1240px) {
    /* bottom: 20vh;
    right: unset;
    left: 0; */
      right: -12rem;
      height: 90vh;
    }

    @media screen
      and (max-width: 1024px)
      and (orientation: portrait) {
        left: -12vw;
    }

    @media (max-width: 768px) and (orientation: landscape) {
      bottom: 20vh;
      left: -14vh;
      height: 70vh;
    }

    @media (max-width:760px) {
      bottom: 20vh;
      left: -38vh;
      height: 65vh;
    }
    @media (max-width:450px) {
      bottom: 20vh;
      left: -34vh;
      height: 61vh;
    }
    @media (max-width: 375px) {
      left: -30vh;
    }

    @media (max-width: 370px) {
      display: none;
    }
`;

const headerData = {
  author: 'Przemyslaw Mejna',
  title: 'Software Developer with UI and Design Background',
  subTitle: `I believe in clean, effective code, best UI/UX practices, and modern design. They are the key to successful modern applications and happy users. `
}


const IndexPage = ({data}) => {

  let section1Ref = useRef(null);
  let section2Ref = useRef(null);
   return (
  <>
    <HelmetSeo title="Web and Software Developement with Design in mind"/>
    <HeaderWrapper>
      <TextContent>
        <MainHeader 
          above={headerData.author} 
          title={headerData.title}
          subTitle={headerData.subTitle} 
          main={true}
          leftText={true}
        />
        <ProjectsBanner logoSrc={internettLogo} project="internett"/>
      </TextContent>
      <ImageContent>
        <MainImage src={data.file.publicURL}/>
      </ImageContent>
    </HeaderWrapper>
    <SectionParagraph 
      ref={el => (section1Ref = el)}
      above='my workflow' 
      title='I am a big fan of simple and effective solutions' 
      subTitle={`In my opinion project starting with clear vision and well specified goals will provide the simple and great solution for all the challanges. 
      From there you can deep dive into more specific problems and based on defined direction you can branch out the problems into smaller pieces to provide better
      solution with the main project goals and direction in mind.`} 
      leftText={true}
      maxWidth='45vw'
    >
      <SectionImage src={data.brandImg.publicURL}/>
    </SectionParagraph>
    <SectionParagraph 
      ref={el => (section2Ref = el)}
      title='Hard work, passion and open mind' 
      above='my values' 
      subTitle={`I don't think that there is a passion without hard work, or neither the hard work without a passion. In the end life is about
      hapiness and one of the core ingredients of hapiness is mentioned "passion". For me programming and developing software, making a new website, learning a new skills
      is a pure Joy. I am really addicted to the technology and constant growth which is reflected in my work. My design experience helped me to keep an open mind and
      be prepared for constructive criticism. I like to experiment with new tech stack and design solutions.`} 
      leftText={false}
      maxWidth='45vw'
    >
      <SectionImage src={data.servicesImg.publicURL} variant2 imgLeft/>
    </SectionParagraph>
    <SectionParagraph 
      ref={section2Ref}
      title='Who am I?' 
      above='about me' 
      subTitle={`In short: I am self-taught software developer with over one year of freelance experience and one year of full-time developer job experience as a junior full-stack dev/UI designer.
      I have as well background in design, illustration and animation working over 4 years as a freelancer in this field.`} 
      leftText={true}
      maxWidth='45vw'
      background='#000'
      textColor='#fff'
      linkButton="about"
      linkButtonText="more"
      borderColor='#dedede'
    >
    </SectionParagraph>
  </>
  ) 
};

export const query = graphql`
  {
    file(name: {eq: "Ja"}) {
      publicURL
    }
    brandImg: file(name: {eq: "brandRecognition"}) {
      publicURL
    }
    servicesImg: file(name: {eq: "Section2Img"}) {
      publicURL
    }
  }
`

export default IndexPage
