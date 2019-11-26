import styled from 'styled-components';

import { TABLET } from '../../../common/constants/styles/media-queries';
import getColor from '../../../common/constants/styles/theme';
import { ThemedComponent } from '../../types/styled-components';

interface CardProps extends ThemedComponent {
  width?: string;
}

export const Card = styled.div`
  background-color: ${({ theme }: CardProps) => getColor('CARD_BACKGROUND', theme.active)};
  border-radius: 4px;
  display: inline-block;
  margin: 5px;
  padding: 10px;
  text-align: left;
  transition: background-color 0.2s;
  vertical-align: top;
  width: calc(100% - 10px);

  ${TABLET} {
    margin: 10px;
    padding: 20px;
    width: ${({ width = '100%' }: CardProps) => `calc(${width} - 20px)`};
  }
`;
Card.displayName = 'Card';

export const CardSection = styled.div`
  margin-top: 10px;
`;
CardSection.displayName = 'CardSection';
