import styled, { createGlobalStyle } from 'styled-components';

import { HD_DISPLAY } from '../common/constants/styles/media-queries';
import { SIDEBAR_SIZE } from '../common/constants/styles/sizes';
import getLayerPosition from '../common/constants/styles/z-indexes';
import getColor from '../common/constants/styles/theme';
import { ThemedComponent } from './types/styled-components';

export const GlobalStyle = createGlobalStyle`
  // Google fonts
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

  html {
    background-color: ${({ theme }: ThemedComponent) => getColor('GLOBAL_BACKGROUND', theme.active)};
    transition: background-color 0.2s;
  }

  body {
    color: ${({ theme }: ThemedComponent) => getColor('GLOBAL_COLOR', theme.active)};
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    height: 100%;
    line-height: 1.5em;
    min-width: 320px;
    position: relative;
    /* Disables pull-to-refresh but allows overscroll glow effects. */
    overscroll-behavior-y: contain;
    transition: color 0.2s;
  }

  * {
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 20px;
  }
  h3 {
    font-size: 18px;
  }
  h4 {
    font-size: 16px;
  }

  a,
  a:hover,
  a:visited,
  a:active {
    text-decoration: none;
  }

  .is-inherit,
  .is-inherit:hover,
  .is-inherit:visited,
  .is-inherit:active {
    color: inherit;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;
Wrapper.displayName = 'Wrapper';

interface ContentProps {
  fixedSidebar?: boolean;
}

export const Content = styled.div`
  margin: 0;
  z-index: ${getLayerPosition('CONTENT')};

  ${HD_DISPLAY} {
    left: ${({ fixedSidebar }: ContentProps) => (fixedSidebar ? SIDEBAR_SIZE : 0)}px;
    position: relative;
    vertical-align: top;
    width: calc(100% - ${({ fixedSidebar }: ContentProps) => (fixedSidebar ? SIDEBAR_SIZE : 0)}px);
  }
`;
Content.displayName = 'Content';
