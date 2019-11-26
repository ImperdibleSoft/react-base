import styled from 'styled-components';

import { TABLET, DESKTOP } from '../../../common/constants/styles/media-queries';
import { MAX_WIDTH } from '../../../common/constants/styles/sizes';
import getColor from '../../../common/constants/styles/theme';
import { ThemedComponent } from '../../types/styled-components';

interface WrapperProps extends ThemedComponent {
  isOpen: boolean;
}

export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }: WrapperProps) => getColor('FILTERS_BORDER', theme.active)};
  height: ${({ isOpen }: WrapperProps) => (isOpen ? 'auto' : '0px')};
  margin: 0 auto;
  max-width: ${MAX_WIDTH}px;
  overflow: ${({ isOpen }: WrapperProps) => (isOpen ? 'visible' : 'hidden')};
  padding: 0;
  padding-bottom: ${({ isOpen }: WrapperProps) => (isOpen ? '10px' : '0px')}
  transition: border 0.2s, height 0.2s, padding 0.2s, overflow 0.2s;
`;
Wrapper.displayName = 'Wrapper';

export const Filter = styled.div`
  ${TABLET} {
    display: inline-block;
    margin: 0 5px;
    width: calc(50% - 10px);
  }

  ${DESKTOP} {
    width: calc(25% - 10px);
  }
`;
Filter.displayName = 'Filter';
