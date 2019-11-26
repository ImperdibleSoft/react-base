import styled from 'styled-components';

import { HD_DISPLAY } from '../../../../../common/constants/styles/media-queries';
import { HEADER_SIZE, SIDEBAR_SIZE } from '../../../../../common/constants/styles/sizes';
import getColor from '../../../../../common/constants/styles/theme';
import getLayerPosition from '../../../../../common/constants/styles/z-indexes';
import { ThemedComponent } from '../../../../types/styled-components';

export const Wrapper = styled.div`
  display: inline-block;
`;
Wrapper.displayName = 'Wrapper';

export const Toggler = styled.div`
  color: ${({ theme }: ThemedComponent) => getColor('HEADER_COLOR', theme.active)};
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  height: ${HEADER_SIZE}px;
  line-height: 2.2em;
  text-align: center;
  transition: color 0.2s;
  width: ${HEADER_SIZE}px;

  ${HD_DISPLAY} {
    display: none;
  }
`;
Toggler.displayName = 'Toggler';

interface ContentProps extends ThemedComponent {
  isOpen: boolean;
}

export const Content = styled.div`
  background-color: ${({ theme }: ContentProps) => getColor('SIDEBAR_BACKGROUND', theme.active)};
  box-shadow: ${({ isOpen, theme }: ContentProps) =>
    isOpen ? `1px 1px 20px 1px ${getColor('SIDEBAR_SHADOW', theme.active)}` : 'none'};
  color: ${({ theme }: ContentProps) => getColor('SIDEBAR_COLOR', theme.active)};
  height: calc(100vh - ${HEADER_SIZE}px);
  left: ${({ isOpen }: ContentProps) => (isOpen ? 0 : -SIDEBAR_SIZE)}px;
  overflow: hidden;
  overflow-y: auto;
  position: fixed;
  top: ${HEADER_SIZE}px;
  transition: left 0.2s;
  transition: background-color 0.2s, box-shadow 0.2s, color 0.2s left: 0.2s;
  width: ${SIDEBAR_SIZE}px;
  z-index: ${getLayerPosition('SIDEBAR')};

  ${HD_DISPLAY} {
    border-right: 1px solid ${({ theme }: ContentProps) => getColor('SIDEBAR_BORDER', theme.active)};
    box-shadow: none;
    left: 0px;
  }
`;
Content.displayName = 'Content';
