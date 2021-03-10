import React from "react";
import styled from "styled-components";
import GlobalStyles from '../assets/styles/GlobalStyles';
import {graphql} from "gatsby";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import MainHeader from "../components/MainHeader/MainHeader";


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
    bottom: 20vh;
    right: unset;
    left: 0;
    height: 70vh;
  }
    @media (max-width:760px) {
    bottom: 20vh;
    left: -31vh;
    height: 65vh;
  }
`;

const IndexPage = ({data}) => (
  <>
    <GlobalStyles/>
    <HeaderWrapper>
      <TextContent>
        <MainHeader />
        <ProjectsBanner />
      </TextContent>
      <ImageContent>
        <MainImage src={data.file.publicURL}/>
      </ImageContent>
    </HeaderWrapper>
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
