import React from "react";
import styled from "styled-components";
import TopEvent from "../../assets/images/Group 56.svg";
import Arrow from '../../assets/images/Arrow.svg';
import {Link} from 'gatsby';
console.log(Arrow);

const ProjectsContainer = styled.div`
    width: 30vw;
    height: 16vh;
    min-width: 430px;
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

const ProjectsLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-basis: 40%;
    background-color: #0AFCD3;
    color: black;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    :hover {
        background-color: #000;
        button { color: white;}
    }
`;

const Logo = styled.img`
    width: 60%;
    height: auto;
`;

const ProjectsButton = styled.button`
    position: relative;
    font-family: "IntervogueAltMed";
    font-size: 1.3rem;
    border: none;
    box-shadow: none;
    width: 100%;
    padding: 1rem;
    color: #000;
    background-color: transparent;

    img {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        height: 1.4rem;
        width: auto;
    }
`;

const ProjectsBanner = (props) => {
    return (
    <ProjectsContainer>
        <ProjectsLogo>
            <Logo src={TopEvent} />
        </ProjectsLogo>
        <ProjectsLink to="/projects/topevent">
            <ProjectsButton>
                Learn more
                <img src={Arrow}></img>
            </ProjectsButton>
        </ProjectsLink>

    </ProjectsContainer>
    )
}

export default ProjectsBanner