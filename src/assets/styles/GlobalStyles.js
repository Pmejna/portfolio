import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --breakpoint-medium: 1365px;
        --color-main: #0AFCD3;
        font-family: "IntervogueAltLight";
        font-size: 20px;
    }

    html {
        box-sizing: border-box;
    }

    html, body {
        overflow-x: hidden;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 16vh 0 0;
        font-family: "IntervogueAltMed";
        scroll-behavior: smooth;
    }
    p {
        font-family: "IntervogueAltThin";
    }

    span {
        font-family: "IntervogueAltLight";
    }

    a {
        text-decoration: none;
    }

    section {
        padding: 4rem 8vw 4rem 16vw;
    }
    @media (max-width: 1240px) {
    :root {
        font-size: 16px;
    }
  }
    @media (max-width: 760px) {
    :root {
        font-size: 12px;
    }
  }
`;

export default GlobalStyles