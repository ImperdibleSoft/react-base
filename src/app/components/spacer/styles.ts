import styled from 'styled-components';

import getColor from '../../../common/constants/styles/theme';
import { ThemedComponent } from '../../types/styled-components';

interface SpacerProps extends ThemedComponent {
  borderSize?: number;
  marginSize: number;
}

export const StyledSpacer = styled.div`
  border-bottom: ${({ borderSize = 1, theme }: SpacerProps) =>
    `${borderSize}px solid ${getColor('SPACER_BORDER', theme.active)}`};
  display: block;
  margin: ${({ marginSize }: SpacerProps) => `${marginSize}px auto`};
  transition: border 0.2s;
  width: 100%;
`;
StyledSpacer.displayName = 'StyledSpacer';
