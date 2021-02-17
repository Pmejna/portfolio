import {createGlobalStyle} from "styled-components";

import thinEot from "./fonts/Thin/IntervogueAlt-Thin.eot";
import thinWoff from "./fonts/Thin/IntervogueAlt-Thin.woff";
import thinSVG from "./fonts/Thin/IntervogueAlt-Thin.svg";

import boldEot from "./fonts/Bold/IntervogueAlt-Bold.eot";
import boldWoff from "./fonts/Bold/IntervogueAlt-Bold.woff";
import boldSVG from "./fonts/Bold/IntervogueAlt-Bold.svg";

import lightEot from "./fonts/Light/IntervogueAlt-Light.eot";
import lightWoff from "./fonts/Light/IntervogueAlt-Light.woff";
import lightSVG from "./fonts/Light/IntervogueAlt-Light.svg";

import medEot from "./fonts/Med/IntervogueAlt-Med.eot";
import medWoff from "./fonts/Med/IntervogueAlt-Med.woff";
import medSVG from "./fonts/Med/IntervogueAlt-Med.svg";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "IntervogueAltThin";
        src: url(${thinEot});
        src: url(${thinWoff}) format("woff"),
        url(${thinSVG}) format("svg");
    }
    @font-face {
        font-family: "IntervogueAltMed";
        src: url(${medEot});
        src: url(${medWoff}) format("woff"),
        url(${medSVG}) format("svg");
    }
    @font-face {
        font-family: "IntervogueAltBold";
        src: url(${boldEot});
        src: url(${boldWoff}) format("woff"),
        url(${boldSVG}) format("svg");
    }
    @font-face {
        font-family: "IntervogueAltLight";
        src: url(${lightEot});
        src: url(${lightWoff}) format("woff"),
        url(${lightSVG}) format("svg");
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
`;

export default GlobalStyles