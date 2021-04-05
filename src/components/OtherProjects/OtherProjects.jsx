import React from 'react';
import styled from 'styled-components';

import ProjectsBanner from '../ProjectsBanner/ProjectsBanner';

const OtherProjectsWrapper  = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`;
const OtherProjects = ({logo1, project1, logo2, project2}) => {
    return (
        <OtherProjectsWrapper>
            <ProjectsBanner logoSrc={logo1} project={project1} above="see also" other/>
            <ProjectsBanner logoSrc={logo2} project={project2} above="see also" other/>
        </OtherProjectsWrapper>
    )
};

export default OtherProjects