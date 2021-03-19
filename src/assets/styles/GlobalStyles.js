import {createGlobalStyle} from "styled-components";
import up from '../images/Up2.svg';
import down from '../images/Down2.svg';

const GlobalStyles = createGlobalStyle`
    :root {
        --breakpoint-medium: 1365px;
        --color-main: #0AFCD3;
        font-family: "IntervogueAltLight";
        font-size: 20px;
    }
    ::-webkit-scrollbar {
        width: 1.4rem;
        background-color: #F9F9F9;
    }
    /* the scrollbar. */
    ::-webkit-scrollbar-button {

    }
    /* the buttons on the scrollbar (arrows pointing upwards and downwards). */
    ::-webkit-scrollbar-thumb {
        background-color: #0AFCD3;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #00E8D0;
    }
    ::-webkit-scrollbar-button {
        /* background: #000; */
    }
    /* the draggable scrolling handle. */
    ::-webkit-scrollbar-track {

    }
    /* the track (progress bar) of the scrollbar. */
    ::-webkit-scrollbar-track-piece {

    }
    /* the track (progress bar) NOT covered by the handle. */
    ::-webkit-scrollbar-corner {

    } 
    /* the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet. */
    ::-webkit-resizer {

    }
    /* the draggable resizing handle that appears at the bottom corner of some elements. */

    /* ::-webkit-scrollbar-button:single-button:vertical:decrement {
        height: 2rem;
        width: 16px;
        background-position: center 4px;
        background-image: url(${down});
        background-position: 50% 0.5rem;
        background-size: 1rem;
        background-repeat: no-repeat;
    } */
    /* ::-webkit-scrollbar-button:single-button:vertical:increment {
        height: 12px;
        width: 16px;
        background-position: center 4px;
        background-image: url(${up});
    } */
    
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
        margin-bottom: 2rem;
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