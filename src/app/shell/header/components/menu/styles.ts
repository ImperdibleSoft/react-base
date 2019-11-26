import styled from 'styled-components';

import { HEADER_SIZE, SIDEBAR_SIZE } from '../../../../../common/constants/styles/sizes';
import getColor from '../../../../../common/constants/styles/theme';
import getLayerPosition from '../../../../../common/constants/styles/z-indexes';
import { ThemedComponent } from '../../../../types/styled-components';

interface WrapperProps {
  isRight?: boolean;
}

export const Wrapper = styled.div`
  display: inline-block;
  float: ${({ isRight }: WrapperProps) => (isRight ? 'right' : 'none')};
  height: ${HEADER_SIZE}px;
  vertical-align: top;
`;
Wrapper.displayName = 'Wrapper';

export const Toggler = styled.span`
  align-items: center;
  color: ${({ theme }: ThemedComponent) => getColor('HEADER_COLOR', theme.active)};
  cursor: pointer;
  display: inline-flex;
  font-size: 24px;
  height: 100%;
  justify-content: center;
  line-height: 2.2em;
  min-width: ${HEADER_SIZE}px;
  position: relative;
  text-align: center;

  & > div {
    top: 3px;
  }

  & > span:first-child {
    font-size: 14px;
    max-width: calc(100vw - ${HEADER_SIZE * 4}px);
    padding-left: 5px;
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
Toggler.displayName = 'Toggler';

interface ContentProps extends ThemedComponent {
  isOpen: boolean;
  right: number;
}

export const Content = styled.div`
  background-color: ${({ theme }: ContentProps) => getColor('SIDEBAR_BACKGROUND', theme.active)};
  border: 1px solid ${({ theme }: ContentProps) => getColor('SIDEBAR_BORDER', theme.active)};
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: ${({ theme }: ContentProps) => getColor('SIDEBAR_COLOR', theme.active)};
  max-height: calc(100vh - ${HEADER_SIZE}px);
  max-width: ${({ right }: ContentProps) => `calc(100% - ${right}px)`};
  overflow: hidden;
  overflow-y: auto;
  position: fixed;
  right: ${({ right }: ContentProps) => `${right}px`};
  top: ${({ isOpen }: ContentProps) => (isOpen ? `${HEADER_SIZE}px` : `calc(-100vh - ${HEADER_SIZE}px)`)};
  transition: background-color 0.2s, border 0.2s, color 0.2s, top 0.2s;
  width: ${SIDEBAR_SIZE}px;
  z-index: ${getLayerPosition('SIDEBAR')};
`;
Content.displayName = 'Content';
