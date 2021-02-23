import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --breakpoint-medium: 1365px;
        font-family: "IntervogueAltLight";
    }

    html {
        box-sizing: border-box;
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
        padding: 0;
        font-family: "IntervogueAltMed";
        font-size: 10px;
    }
    p {
        font-family: "IntervogueAltThin";
    }

    span {
        font-family: "IntervogueAltLight";
    }
`;

export default GlobalStyles