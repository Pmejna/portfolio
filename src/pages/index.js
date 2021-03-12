import React from "react";
import styled from "styled-components";
import GlobalStyles from '../assets/styles/GlobalStyles';
import {graphql} from "gatsby";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import MainHeader from "../components/MainHeader/MainHeader";
import SectionParagraph from "../components/SectionParagraph/SectionParagraph";


const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 16vh;
  display: flex;
  flex-direction: row;
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

const IndexPage = ({data}) => (
  <>
    <GlobalStyles/>
    <HeaderWrapper>
      <TextContent>
        <MainHeader 
          above={headerData.author} 
          title={headerData.title}
          subTitle={headerData.subTitle} 
          main
        />
        <ProjectsBanner />
      </TextContent>
      <ImageContent>
        <MainImage src={data.file.publicURL}/>
      </ImageContent>
    </HeaderWrapper>
    <SectionParagraph 
      title='Lets improve your profits and branding!' 
      above='your brand' 
      subTitle={`What was good enough few years ago is outdated now. My solution is simple: be original, be great, be you. If we mix this with a great product, branding and web presence: 
        you have a success.`} 
      leftText={true}
    >
    </SectionParagraph>
    <SectionParagraph 
      title='Branding, webdesign, illustration? All sorted!!' 
      above='services' 
      subTitle={`What was good enough few years ago is outdated now. My solution is simple: be original, be great, be you. If we mix this with a great product, branding and web presence: 
        you have a success.`} 
      leftText={false}
    >
    </SectionParagraph>
</>
)

export const query = graphql`
  {
    file(name: {eq: "Ja"}) {
      publicURL
    }
  }
`

export default IndexPage
