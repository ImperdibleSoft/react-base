import styled from 'styled-components';

import getColor from '../../../../../common/constants/styles/theme';
import { TABLET, HD_DISPLAY } from '../../../../../common/constants/styles/media-queries';
import { HEADER_SIZE, SIDEBAR_SIZE } from '../../../../../common/constants/styles/sizes';
import getLayerPosition from '../../../../../common/constants/styles/z-indexes';
import { ThemedComponent } from '../../../../types/styled-components';

const loadingHeight = 4;

interface WrapperProps extends ThemedComponent {
  fixedSidebar: boolean;
  isLoading?: boolean;
}

export const Wrapper = styled.div`
  background-color: ${({ theme }: WrapperProps) => getColor('LOADING_INDICATOR_BACKGROUND', theme.active)};
  left: 0px;
  overflow: hidden;
  padding-top: ${({ isLoading }: WrapperProps) => (isLoading ? loadingHeight : 0)}px;
  position: fixed;
  top: ${HEADER_SIZE}px;
  transition: background-color 0.2s, padding 0.2s;
  width: 100%;
  z-index: ${getLayerPosition('HEADER')};

  ${HD_DISPLAY} {
    left: ${({ fixedSidebar }: WrapperProps) => (fixedSidebar ? SIDEBAR_SIZE : 0)}px;
    width: calc(100% - ${({ fixedSidebar }: WrapperProps) => (fixedSidebar ? SIDEBAR_SIZE : 0)}px);
  }
`;
Wrapper.displayName = 'Wrapper';

interface LineProps extends ThemedComponent {
  effect?: 'decrease' | 'increase';
  isLoading?: boolean;
}

export const Line = styled.div`
  animation: ${({ effect }: LineProps) => {
    switch (effect) {
      case 'decrease':
        return 'decrease 2s 0.5s infinite';

      case 'increase':
        return 'increase 2s infinite';

      default:
        return 'none';
    }
  }};
  background-color: ${({ theme }: LineProps) => getColor('LOADING_INDICATOR_BAR', theme.active)};
  height: ${({ isLoading }: LineProps) => (isLoading ? loadingHeight : 0)}px;
  left: 0px;
  position: absolute;
  top: 0px;
  transition: background-color 0.2s;

  @keyframes increase {
    from {
      left: -5%;
      width: 5%;
    }
    to {
      left: 130%;
      width: 100%;
    }
  }
  @keyframes decrease {
    from {
      left: -80%;
      width: 80%;
    }
    to {
      left: 110%;
      width: 10%;
    }
  }
`;
Line.displayName = 'SubLine';

export const LineSpacer = styled.div`
  height: ${({ isLoading }: LineProps) => (isLoading ? loadingHeight : 0)}px;
  transition: height 0.2s;
  width: 100%;

  ${TABLET} {
    display: none;
  }
`;
LineSpacer.displayName = 'LineSpacer';
