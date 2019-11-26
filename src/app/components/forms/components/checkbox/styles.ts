import styled from 'styled-components';

import { CONTROL_SIZE } from '../styles';
import getColor from '../../../../../common/constants/styles/theme';
import { ThemedComponent } from '../../../../types/styled-components';

export const CustomCheckbox = styled.div`
  background-color: ${({ theme }: ThemedComponent) => getColor('FIELD_BACKGROUND', theme.active)};
  border-radius: 4px;
  border: 2px solid ${({ theme }: ThemedComponent) => getColor('FIELD_BORDER', theme.active)};
  box-sizing: border-box;
  display: inline-block;
  height: ${CONTROL_SIZE}px;
  margin-right: 10px;
  position: relative;
  transition: background-color 0.2s, border: 0.2s;
  vertical-align: bottom;
  width: ${CONTROL_SIZE}px;

  input:checked ~ div & {
    background-color: ${({ theme }: ThemedComponent) => getColor('CHECKBOX_BACKGROUND_ACTIVE', theme.active)};
  }

  input:disabled ~ div & {
    background-color: ${({ theme }: ThemedComponent) => getColor('DISABLED_BACKGROUND', theme.active)};
    border-color: ${({ theme }: ThemedComponent) => getColor('DISABLED_BORDER', theme.active)};
    cursor: not-allowed;
  }

    &:after {
      border: solid ${({ theme }: ThemedComponent) => getColor('CHECKBOX_TICK_COLOR', theme.active)};
      border-width: 0 3px 3px 0;
      content: ' ';
      display: none;
      height: 12px;
      left: 5px;
      position: absolute;
      top: 1px;
      transform: rotate(45deg);
      transition: border: 0.2s;
      width: 7px;

      input:checked ~ div & {
        display: block;
      }
    }
`;
CustomCheckbox.displayName = 'CustomCheckbox';
