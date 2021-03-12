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
        padding-top: 16vh;
        padding: 16vh 8vw 0 16vw;
        font-family: "IntervogueAltMed";
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

    @media (max-width: 1240px) {
    :root {
        font-size: 16px;
    }
  }
    @media (max-width: 760px) {
    :root {
        font-size: 12px;
    }
    body {
        padding-left: 8vw;
        padding-right: 6vw;
    }
  }
`;

export default GlobalStyles