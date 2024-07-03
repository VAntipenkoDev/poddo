import { createGlobalStyle } from 'styled-components';

import {
  MontserratBold,
  MontserratMedium,
  MontserratRegular,
  MontserratSemiBold,
} from '../assets/fonts/index';
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  html,
  body,
  #root {
    height: 100%;
    line-height: 1;
  }

  @font-face {
    font-family: 'MontserratBold';
    src: local('MontserratBold'), local('MontserratBold'),
    url(${MontserratBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'MontserratMedium';
    src: local('MontserratMedium'), local('MontserratMedium'),
    url(${MontserratMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'MontserratRegular';
    src: local('MontserratRegular'), local('MontserratRegular'),
    url(${MontserratRegular}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'MontserratSemiBold';
    src: local('MontserratSemiBold'), local('MontserratSemiBold'),
    url(${MontserratSemiBold}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
`;

export { GlobalStyle };
