import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }

 #root, html, body {
  height : 100%;
 }

 :root {
    --color-border: #dbdbdb;
    --color-placehloder: #929292;
    --color-GNB-placehloder: #8e8e8e;
    --color-gray: #fafafa;
    --color-dark-gray: #efefef;
    --color-blue: #bfdffd;
    --color-dark-blue: #0095f6;
    --color-red: #ff3b23;
    --color-black: #000000;
    --color-white: #ffffff;
  }
`;

export default GlobalStyles;
