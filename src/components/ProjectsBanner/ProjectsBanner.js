import React from "react";
import styled from "styled-components";
import TopEvent from "../../assets/images/Group 56.svg";

const ProjectsContainer = styled.div`
    width: 30vw;
    height: 16vh;
    min-width: 380px;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    margin-bottom: 8vh;
`;

const ProjectsLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-basis: 60%;
    background-color: black;
`;

const ProjectsLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-basis: 40%;
    background-color: #0AFCD3;
    color: black;
`;

const Logo = styled.img`
    width: 60%;
    height: auto;
`;

const ProjectsButton = styled.button`
    font-family: "IntervogueAltThin";
    border: none;
    box-shadow: none;
    width: 80%;
    padding: 1rem;
    color: inherit;
`;

const ProjectsBanner = (props) => {
    return (
    <ProjectsContainer>
        <ProjectsLogo>
            <Logo src={TopEvent} />
        </ProjectsLogo>
        <ProjectsLink>
            <ProjectsButton>
                Learn more
            </ProjectsButton>
        </ProjectsLink>

    </ProjectsContainer>
    )
}

export default ProjectsBanner