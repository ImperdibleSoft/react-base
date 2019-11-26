import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HD_DISPLAY } from '../../../../../common/constants/styles/media-queries';
import getLayerPosition from '../../../../../common/constants/styles/z-indexes';
import getColor from '../../../../../common/constants/styles/theme';
import { ThemedComponent } from '../../../../types/styled-components';

export const Header = styled.header`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 100%;
  z-index: ${getLayerPosition('HEADER')};
`;
Header.displayName = 'Header';

export const HeaderSpacer = styled.div`
  display: block;
  height: 56px;
  margin: 0 auto;
  margin-top: 0 !important;
  min-width: 320px;
  width: 100%;
`;
HeaderSpacer.displayName = 'HeaderSpacer';

export const HeaderBar = styled(HeaderSpacer)`
  background-color: ${({ theme }: ThemedComponent) => getColor('HEADER_BACKGROUND', theme.active)};
  left: 0;
  position: fixed;
  top: 0;
  transition: background-color 0.2s;
`;
HeaderBar.displayName = 'HeaderBar';

export const LogoLink = styled(Link)`
  color: ${({ theme }: ThemedComponent) => getColor('HEADER_COLOR', theme.active)};
  display: inline-block;
  height: 100%;
  transition: color 0.2s;
  vertical-align: top;
`;
LogoLink.displayName = 'LogoLink';

export const Logo = styled.img`
  height: 100%;
  padding: 10px;

  div ~ a > & {
    padding: 10px 0;

    ${HD_DISPLAY} {
      padding: 10px;
    }
  }
`;
Logo.displayName = 'Logo';
