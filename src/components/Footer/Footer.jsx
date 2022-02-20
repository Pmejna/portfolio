import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 100vw;
    min-height: 7rem;
    padding: 0 8vw 0 16vw;
    background-color: #000;
    color: #fff;
    font-family: 'IntervogueAltLight';

    @media (max-width: 767px) {
        padding: 1.4rem 8vw 1.4rem 6vw;
    }
    
`;

const FooterCopyright = styled.div`
    color: var(--color-main);
`;
const FooterData = styled.ul`
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    width: 100%;
    list-style: none;
    margin-bottom: 1.4rem;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const FooterItem = styled.li`
    margin-right: 4rem;
    display: flex;
    flex-direction: row;

    p {
        font-family: 'IntervogueAltMed';
        margin-right: 1rem;
    }
    a {
        color: #fff;
    }

    @media (max-width: 900px) {
        margin-top: 1rem;
    }
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterData>
                <FooterItem>
                    <p>PHONE NUMBER:  </p>
                    <a href="+447423465591">07423465591</a>                 
                </FooterItem>
                <FooterItem>
                    <p>EMAIL ADDRESS:</p> <span>pmejna@gmail.com</span>
                </FooterItem>
            </FooterData>
            <FooterCopyright>
                © Copyright {new Date().getFullYear()} All Rights Reserved
            </FooterCopyright>
        </FooterWrapper>
    )
};

export default Footer