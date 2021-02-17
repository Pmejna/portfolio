import React from "react";
import styled from "styled-components";
import {graphql} from "gatsby";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import ProjectsBanner from "../components/ProjectsBanner/ProjectsBanner";
import MainHeader from "../components/MainHeader/MainHeader";

const Wrapper = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  padding-top: 18vh;
  padding-left: 16vw;
  padding-right: 8vw;
  display: flex;
  flex-direction: row;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 60%;
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
`;

const IndexPage = ({data}) => (
  <Wrapper>
    <TextContent>
      <MainHeader />
      <ProjectsBanner />
    </TextContent>
    <ImageContent>
      <MainImage src={data.file.publicURL}/>
    </ImageContent>
  </Wrapper>
)

export const query = graphql`
  {
    file(name: {eq: "Ja"}) {
      publicURL
    }
  }
`

export default IndexPage
