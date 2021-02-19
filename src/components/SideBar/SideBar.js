import React from "react";
import styled from "styled-components";
import Link from "gatsby";
import Logomark from "../../components/Icons/Logomark";
import Instagram from "../../components/Icons/Instagram";
import LinkedIn from "../../components/Icons/LinkedIn";
import Behance from "../../components/Icons/Behance";
import EmailIcon from "../../components/Icons/Email";

const StyledContainer = styled.aside`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 6vw;
    max-width: 90px;
    min-width: 68px;
    height: 100vh;
    background-color: #0AFCD3;
    color: black;
    padding-top: 2rem;
    padding-bottom: 4rem;

    @media(max-width: 650px) {
        display: none;
    }
`;

const LogoBox = styled.div`
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LogoMark = styled.img`
    width: 40%;
    height: auto;
`;

const LinksBox = styled.div`
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    
`;

const LinksIcon = styled.img`
    width: auto;
    height: 20%;
`;

const EmailBox = styled.div`
    height: 3rem;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 30%;
        height: auto;
    }
    :hover {
        cursor: pointer;
        transition: 0.3s ease-in-out;
        svg {
            fill: ${({color}) => color="#0AFCD3"}
        }
    }
`;

const LinkIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    svg {
        width: 30%;
        height: auto;
    }
    :hover {
        background-color: black;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        svg {
            fill: ${({color}) => color="white"}
        }
    }
`;


const SideBar = () => {
    return (
        <>
            <StyledContainer>
                <LogoBox>
                    <Logomark hovered="true" color="black"/>
                </LogoBox>
                <LinksBox>
                    <LinkIcon hovered >
                        <Instagram hovered="true" color="black"/>
                    </LinkIcon>
                    <LinkIcon hovered>
                        <LinkedIn hovered="true" color="black" />
                    </LinkIcon>
                    <LinkIcon>
                        <Behance hovered="true" color="black" />
                    </LinkIcon>
                </LinksBox>
                <EmailBox>
                    <EmailIcon color="white" />
                </EmailBox>
            </StyledContainer>
        </>
    )
}

export default SideBar