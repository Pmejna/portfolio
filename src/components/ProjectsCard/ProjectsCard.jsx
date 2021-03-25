import React, {forwardRef} from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import rect from '../../assets/images/Rect.svg';

const ProjectsCardWrapper = styled.div`
    background-color: #F9F9F9;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3.6fr 3fr 1fr;
    justify-items: center;
    align-items: center;
    max-width: 300px;
    padding-bottom: 2rem;
    transition: 0.3s ease-in-out;
    opacity: 0;

    &:hover {
        transform: scale(1.16);
    }

    @media (max-width: 760px) {
        max-width: 400px;
        max-height: 280px;
        margin-top: 3rem;
        font-size: 2rem;
    }
`;

const ProjectsCardLogo = styled.img`
    height: auto;
    width: 10rem;
    max-height: 4rem;

    @media (max-width: 760px) {
        width: 14rem;
        max-height: 5rem;
    }
`;

const ProjectsCardList = styled.ul`
    min-height: 80px;
    width: 100%;
    list-style: none;
    padding-left: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 760px) {
        padding-left: 19vw;
    }

    li {
        position: relative;

        &::before {
        content: "";
        background-color: var(--color-main);
        position: absolute;
        left: -2rem;
        top: 0;
        width: 1rem;
        height: 1rem;

        @media (max-width: 760px) {
        left: -3rem;
        width: 1.8rem;
        height: 1.8rem;
        }
    }
    }
`;

const ProjectsCard = ({to, btnText, image, feature1, feature2 }, ref) => {
    return (
        <ProjectsCardWrapper ref={ref}>
            <ProjectsCardLogo src={image}/>
            <ProjectsCardList>
                <li>{feature1}</li>
                {feature2 && <li>{feature2}</li>}
            </ProjectsCardList>
            <Button to={to}>{btnText}</Button>
        </ProjectsCardWrapper>
    )
};

export default  forwardRef(ProjectsCard);