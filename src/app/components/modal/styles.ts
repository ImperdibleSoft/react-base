import styled, { createGlobalStyle } from 'styled-components';

import { Card } from '../card';

import { TABLET, MOBILE_LANDSCAPE_OR_TABLET } from '../../../common/constants/styles/media-queries';
import getColor from '../../../common/constants/styles/theme';
import getLayerPosition from '../../../common/constants/styles/z-indexes';
import { ThemedComponent } from '../../types/styled-components';

const headerSize = 50;
const footerSize = 60;

export const LockBodyScreen = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Backdrop = styled.div`
  background-color: ${({ theme }: ThemedComponent) => getColor('BACKDROP_BACKGROUND', theme.active)};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color 0.2s;
  z-index: ${getLayerPosition('MODAL')};
`;
Backdrop.displayName = 'Backdrop';

export const Wrapper = styled(Card)`
  position: fixed;
  top: 10px;
  left: 50%;
  margin: 0 auto;
  max-height: calc(100vh - 20px);
  max-width: calc(100vw - 20px);
  padding: 5px 0px;
  transform: translateX(-50%);
  z-index: ${getLayerPosition('MODAL')};

  ${MOBILE_LANDSCAPE_OR_TABLET} {
    max-height: calc(100vh - 40px);
    max-width: calc(100vw - 40px);
    padding: 10px 0px;
    top: 20px;
    width: auto;
  }
`;
Wrapper.displayName = 'Wrapper';

export const Header = styled.div`
  display: block;
  padding: 5px 10px;

  & > div {
    margin: 0;
    width: 100%;

    & > * {
      margin: 0;
    }
  }

  ${TABLET} {
    padding: 10px 20px;
  }
`;
Header.displayName = 'Header';

export const Body = styled.div`
  display: block;
  max-height: calc(90vh - ${headerSize}px - ${footerSize}px);
  overflow: hidden;
  overflow-y: auto;
  padding: 5px 10px;
  word-break: keep-all;

  ${TABLET} {
    padding: 10px 20px;
  }
`;
Body.displayName = 'Body';

export const Footer = styled.div`
  display: block;
  padding: 5px 10px;

  & > div {
    margin: 0 auto;
    width: 100%;

    & > * {
      margin: 0;
    }
  }

  ${TABLET} {
    padding: 10px 20px;
  }
`;
Footer.displayName = 'Footer';
