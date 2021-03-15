import React, {useRef, useEffect} from "react";
import styled from "styled-components";
import GlobalStyles from '../assets/styles/GlobalStyles';
import {graphql} from "gatsby";
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import MainHeader from "../components/MainHeader/MainHeader";
import SectionParagraph from "../components/SectionParagraph/SectionParagraph";
import SectionImage from '../components/SectionParagraph/SectionImage/SectionImage';
import Contact from '../components/Contact/Contact';


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
  console.log(data);
   return (
  <>
    <GlobalStyles/>
    <HeaderWrapper>
      <TextContent>
        <MainHeader 
          above={headerData.author} 
          title={headerData.title}
          subTitle={headerData.subTitle} 
          main
          leftText={true}
        />
        <ProjectsBanner />
      </TextContent>
      <ImageContent>
        <MainImage src={data.file.publicURL}/>
      </ImageContent>
    </HeaderWrapper>
    <SectionParagraph 
      ref={el => (section1Ref = el)}
      title='Lets improve your profits and brand recognition!' 
      above='your brand' 
      subTitle={`What was good enough few years ago is outdated now. My solution is simple: be original, be great, be you. If we mix this with a great product, branding and web presence: 
        you have a success.`} 
      leftText={true}
    >
      <SectionImage src={data.brandImg.publicURL}/>
    </SectionParagraph>
    <SectionParagraph 
      ref={el => (section2Ref = el)}
      title='Branding, webdesign, illustration? All sorted!!' 
      above='services' 
      subTitle={`What was good enough few years ago is outdated now. My solution is simple: be original, be great, be you. If we mix this with a great product, branding and web presence: 
        you have a success.`} 
      leftText={false}
    >
      <SectionImage src={data.servicesImg.publicURL} variant2 imgLeft/>
    </SectionParagraph>
    <SectionParagraph 
      ref={section2Ref}
      title='Who am I?' 
      above='about me' 
      subTitle={`What was good enough few years ago is outdated now. My solution is simple: be original, be great, be you. If we mix this with a great product, branding and web presence: 
        you got a success.`} 
      leftText={true}
      black
    >
    </SectionParagraph>
    <Contact/> 
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
