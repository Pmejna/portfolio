import React, {useRef, useEffect} from "react"
import styled from 'styled-components';
import HelmetSeo from "../components/Helmet/HelmetSeo";
import rebelImage from "../assets/images/SVG/rebel-icon.svg"
import valuesImage from "../assets/images/values-image.jpg"
import activeTimeOffImage from "../assets/images/active-time-off.jpg"

import MainHeader from '../components/MainHeader/MainHeader';
import SectionDefault from '../components/SectionDefault/SectionDefault';

const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 46vh;
  display: flex;
  flex-direction: row;
  padding: 0 8vw 0 16vw;

  @media (max-width: 760px) {
        padding-left: 8vw;
        padding-right: 6vw;
    }
`;

const MainHeaderProjects = styled(MainHeader)`
  &.mainHeaderProjects {
    display: flex;
  }
`;

const SkillsContainer = styled.section`
  width: 100vw;
  background-color: #000;
  min-height: 30vh;
  position: relative;
  margin-top: 5rem;
`;

const SkillsList = styled.ul`

`;

const SkillsOther = styled.div`
  position: absolute;
  right: 8vw;
  bottom: 0;
  width: 26vw;
  max-width: 400px;
  min-height: 36vh;
  background-color: var(--color-main);
`;


const AboutPage = () => {
  let section1Ref = useRef(null);
  let section2Ref = useRef(null);

  return (
  <>
    <HelmetSeo title="About Przemyslaw Mejna"/>
    <HeaderWrapper>
        <MainHeaderProjects
          above='about'
          title='Some extra information'
          subTitle={`I really appriciate the time you spend hanging out on my website. My bet is that you are familiar already with my skills. Here you will find 
          some additional informations.`}
          leftText={true}
          className='mainHeaderProjects'
          imgSrc={rebelImage}
        />
    </HeaderWrapper>
    <SectionDefault 
      above='work culture'
      title='I value exchange of knowldge'
      subTitle={`I have been working with many different people. I try to learn all the good stuff from anybody and filter out the bad ones. 
      I can work on my own as I have been working like that in the past freelancing. Although I rather prefer to work as a part of the team. From my 
      experience the exchange of the information and knowledge is priceless. If you ask me My perfect week of work would be 4 days in the office, 1 day working remote.
      `}
      leftText={true}
      image
      imgSrc={valuesImage}
      noAnimation={true}
    />
    <SectionDefault 
      above='my time off'
      title='Reading books, excercising and watching football'
      subTitle={`If I would choose to spend my time outside of work on something not relited to programming that would be reading for sure. I am a huge fan
      of a comic books and fantasy. I consider myself active - I try to stay fit and excercise. I enjoy watching football, especially Polish national team. My 
      music taste is rather unusual - good hardcore or punk rock music keeps me positive.`} 
      leftText={false}
      image
      imgSrc={activeTimeOffImage}
    />
  </>
)
}

export default AboutPage