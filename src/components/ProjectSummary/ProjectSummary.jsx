import React from 'react';
import styled from 'styled-components';


const ProjectSummaryWrapper = styled.div`
    width: 100%;
    /* min-height: 40vh; */
    display: flex;
    flex-direction: column;
    padding: 2rem 8vw 2rem 16vw;
    background-color: #F5F5F5;

    @media (max-width: 760px) {
            padding-left: 8vw;
            padding-right: 6vw;

            h3 {
            font-size: 1.6rem;
        }
        p {
            font-size: 1.5rem;
        }
        }
        
`;

const ProjectResponsibilities = styled.div`
    margin-bottom: 2rem;

`;

const ProjectBrief = styled.div`

`;

const ProjectSummary = ({responsibilities, brief}) => {
    return (
        <ProjectSummaryWrapper>
            <ProjectResponsibilities>
                <h3>RESPONSIBILITIES</h3>
                <p>{responsibilities}</p>
            </ProjectResponsibilities>
            <ProjectBrief>
                <h3>BRIEF</h3>
                <p>{brief}</p>
            </ProjectBrief>
        </ProjectSummaryWrapper>
    )
};

export default ProjectSummary