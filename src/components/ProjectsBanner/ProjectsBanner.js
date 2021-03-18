import React, {useEffect, useState} from "react";
import styled from "styled-components";
import TopEvent from "../../assets/images/TopEventLogo.svg";
import Arrow from '../../components/Icons/Arrow';
import {Link} from 'gatsby';

const ProjectsContainer = styled.div`
    position: relative;
    width: 30vw;
    height: 16vh;
    min-width: 490px;
    max-width: 500px;
    display: flex;
    flex-direction: row;
    margin-bottom: 8vh;


    @media (max-width: 1240px) {
        margin-top: 8vh;
        min-width: 330px;
        width: 35vw;
        height: 12vh;
    }
    @media (max-width: 760px) {
        margin-top: 8vh;
        min-width: 260px;
        width:100vw;
        height: 8vh;
    }
`;

const ProjectsLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-basis: 60%;
    background-color: black;

    @media (max-width: 1240px) {
        flex-basis: 84;
    }
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
        svg {
            stroke: ${({color}) => color="#fff"}
        }
    }

    @media (max-width: 1240px) {
        flex-basis: 16%;
    }
`;

const Logo = styled.img`
    width: 60%;
    height: auto;
`;

const ProjectsButton = styled.button`
    position: relative;
    font-family: "IntervogueAltMed";
    font-size: 1.1rem;
    border: none;
    box-shadow: none;
    width: 100%;
    padding: 1rem;
    color: #000;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 1240px) {
        font-size: 1.3rem;
    }

   svg {    
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        height: 1.4rem;
        width: auto;
    }
`;

const ProjectsBannerH2 = styled.h3`
    position: absolute;
    top: -2rem;
    left: 0;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: 'IntervogueAltLight', sans-serif;
    color: #6D6D6D;
`;

const ProjectsBanner = (props) => {
    const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth({
                windowWidth: window.innerWidth
            });
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowWidth
    };

    const size = useWindowSize();
    console.log(size);

    return (
    <ProjectsContainer>
        <ProjectsBannerH2>
            Latest projects
        </ProjectsBannerH2>
        <ProjectsLogo>
            <Logo src={TopEvent} />
        </ProjectsLogo>
        <ProjectsLink to="/projects/topevent">
            <ProjectsButton>
                {size.windowWidth > 1400 ? 'Learn more' : null}
                <Arrow color='black'/>
            </ProjectsButton>
        </ProjectsLink>

    </ProjectsContainer>
    )
}

export default ProjectsBanner