import React from "react"
import styled from 'styled-components';

import MainHeader from '../components/MainHeader/MainHeader';
import SEO from '../components/SEO/Seo';

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

const ApproachWrapper = styled.section`
  @media (max-width: 760px) {
        padding: 2rem 8vw 2rem 6vw;
    }
`;

const ApproachHeadline = styled.article`

`;

const ApproachList = styled.ul`
  list-style: none;
`;

const ApproachListItem = styled.li`
  h3 {
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }

  margin-bottom: 1.2rem;

  @media (max-width: 760px) {
        
        p, h3 {
          margin-bottom: 2rem;
        }
    }
`;

const ApproachEnd = styled.p`
    font-family: 'Intervogue-alt-bold', sans-serif;
    font-size: 2rem;
`;

const ApproachPage = () => (
  <>
    <SEO title="Practical Software Developement with Attractive Design in mind"/>
    <HeaderWrapper>
        <MainHeaderProjects
          above='approach'
          title='My approach'
          subTitle={`Experience and skills are just half of succesful project. Right communication, and process is the second half. Here you will find my approach to make both parts of a succesfull project.`}
          leftText={true}
          className='mainHeaderProjects'
        />
    </HeaderWrapper>
    <ApproachWrapper>
      <ApproachList>
        <ApproachListItem>
          <h3>1. Figuring out needs of your business or initiative</h3>
          <p>Initial part of the process is for sure a building block for the project. I will find out what are your needs. We will discuss the best suitable
            technology. In this part we will touch on brand subject. Every business is different and every business needs different solutions there as well. 
            I can estimate your project and you will have an rough idea how long your project might take and what will be the next steps. 
          </p>
        </ApproachListItem>
        <ApproachListItem>
          <h3>2. Establishing brand voice and content</h3>
          <p>Before we will get into design we need to establish content. I might get in touch with the right
            content creators and copywriters if this is something you need or you can provide me with your content or contact to someone who will work on that.
            Content should play well with the brand voice and only when is done we might process to the next part. In this stage we will create as well your site map and wireframe.
             </p>
        </ApproachListItem>
        <ApproachListItem>
          <h3>3. Designing your branding/website</h3>
          <p>This proces is quite complex and depends on many elements. Do you have already established brand/branding? Do you need only website?
            Is there work from scratch on the whole complex project or we just create your website?
            Variables responsible for timeline are: website complexity, style of the website, choosen technology. Style is responsible for elements
            like custom icons, custom illustrations, animations, custom 3d elements. Technology determine how creative your website might be in the end.
            I tend to create 3 initial concepts of your landing page. All of three aligned with your brand voice and design, but with individual energy to make 
            sure that we will choose the right direction. After that I work on your mockups. I am working usually using Adobe XD - software strictly for User Interface/
            User Experience design. All of the illustrations, icons design, brand elements or logo design are created in Adobe Illustrator, I use Photoshop to 
            image compression and photo-retouching. If needed I can design 3d elements/illustrations using Blender - software dedicated to 3d work.
          </p>
        </ApproachListItem>
        <ApproachListItem>
          <h3>4. Building your website</h3>
          <p>After design stage there comes exciting part where your project will get form and shape. If your website is simple and have limited features
            I am working alone. If project is complex and schedule is tight I might work with other developers as a team. If thats the case we will
            prioritize different stages of developement. The focus will be on MVP (minimum viable project) to ensure that everything will work perfectly.
          </p>
        </ApproachListItem>
        <ApproachListItem>
          <h3>5. Testing and bug fixing. Deploying</h3>
          <p>To ensure that everything works well there is a need of testing. This starts usually in stage 4 while developing. More complex projects 
            needs more complex testing. After that the next part of the process is bug fixing. Up to 4 weeks from website/project being deployed I ensured
            all bugs are fixed if needed and all of that free of charge. 
          </p>
        </ApproachListItem>
        <ApproachListItem>
          <h3>6. Maintaining your project</h3>
          <p>This is optional: I can manage maintaining your project. If there are needed updates regular checks or audits they can be provided.</p>
        </ApproachListItem>
      </ApproachList>
      <ApproachEnd>
        Thank you for your time! 
      </ApproachEnd>
    </ApproachWrapper>
  </>
)

export default ApproachPage