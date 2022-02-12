import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import GlobalStyles from '../assets/styles/GlobalStyles';
import {graphql} from "gatsby";
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import MainHeader from "../components/MainHeader/MainHeader";
import SectionParagraph from "../components/SectionParagraph/SectionParagraph";
import SectionImage from '../components/SectionParagraph/SectionImage/SectionImage';
import TopEvent from "../assets/images/TopEventLogo.svg";
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

    @media (max-width:760px) {
    bottom: 20vh;
    left: -38vh;
    height: 65vh;
  }
`;

const headerData = {
  author: 'Przemyslaw Mejna',
  title: 'Great should be a new standard',
  subTitle: `I believe that combining both of the above is a must for great online success. The 'regular' never will be enough.`
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
        <ProjectsBanner logoSrc={TopEvent} project="topevent"/>
      </TextContent>
      <ImageContent>
        <MainImage src={data.file.publicURL}/>
      </ImageContent>
    </HeaderWrapper>
    <SectionParagraph 
      ref={el => (section1Ref = el)}
      title='Lets improve your profits and brand recognition!' 
      above='your brand' 
      subTitle={`What was good enough few years ago might be outdated now. My solution is simple: be original, be truly yourself. If we add this to a great product, branding and web presence: 
      you have a success. Great design is timeless.`} 
      leftText={true}
      maxWidth='45vw'
    >
      <SectionImage src={data.brandImg.publicURL}/>
    </SectionParagraph>
    <SectionParagraph 
      ref={el => (section2Ref = el)}
      title='Branding, webdesign, illustration? All sorted!' 
      above='services' 
      subTitle={`I am skilled in illustration, design and front end web technologies. I love solving problems and creating solutions. Being multiskilled
      gives me not only broad range of skills but what is the most important: completely different view and approach to design, UI/UX, or developement process.`} 
      leftText={false}
      maxWidth='45vw'
    >
      <SectionImage src={data.servicesImg.publicURL} variant2 imgLeft/>
    </SectionParagraph>
    <SectionParagraph 
      ref={section2Ref}
      title='Who am I?' 
      above='about me' 
      subTitle={`In short: I am self-taught designer/developer. I am addicted to learning new skills.  
      I am currently based in Norhamptonshire UK. Been working as a freelancer since 2017. `} 
      leftText={true}
      maxWidth='45vw'
      background='#000'
      textColor='#fff'
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
