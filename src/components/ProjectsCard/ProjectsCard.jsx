import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const ProjectsCardWrapper = styled.div`

`;

const ProjectsCardLogo = styled.img`

`;

const ProjectsCardList = styled.ul`

    li {

    }
`;

const ProjectsCard = ({to, btnText, image, feature1, feature2 }) => {
    return (
        <ProjectsCardWrapper>
            <ProjectsCardLogo src={image}/>
            <ProjectsCardList>
                <li>{feature1}</li>
                {feature2 && <li>{feature2}</li>}
            </ProjectsCardList>
            <Button to={to}>{btnText}</Button>
        </ProjectsCardWrapper>
    )
};

export default ProjectsCard