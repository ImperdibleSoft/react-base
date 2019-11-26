import styled from 'styled-components';

import { CONTROL_SIZE } from '../styles';
import getColor from '../../../../../common/constants/styles/theme';
import { ThemedComponent } from '../../../../types/styled-components';

export const CustomSwitch = styled.div`
  background-color: ${({ theme }: ThemedComponent) => getColor('SWITCH_BACKGROUND', theme.active)};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: inherit;
  display: inline-block;
  height: ${CONTROL_SIZE}px;
  margin-right: 10px;
  position: relative;
  transition: background-color 0.2s;
  vertical-align: bottom;
  width: ${CONTROL_SIZE * 2 - 2}px;

  input:disabled ~ div & {
    background-color: ${({ theme }: ThemedComponent) => getColor('DISABLED_BACKGROUND', theme.active)};
    cursor: not-allowed;
  }

  &:after {
    background-color: ${({ theme }: ThemedComponent) => getColor('SWITCH_SWITCHER_BACKGROUND', theme.active)};
    border-radius: 2px;
    content: ' ';
    display: inline-block;
    height: ${CONTROL_SIZE - 4}px;
    left: 2px;
    position: absolute;
    transition: background-color 0.2s, left 0.2s;
    top: 2px;
    width: ${CONTROL_SIZE - 4}px;

    input:checked ~ div & {
      background-color: ${({ theme }: ThemedComponent) => getColor('SWITCH_SWITCHER_BACKGROUND_ACTIVE', theme.active)};
      left: ${CONTROL_SIZE}px;
    }

    input:disabled ~ div & {
      background-color: ${({ theme }: ThemedComponent) => getColor('DISABLED_BORDER', theme.active)};
    }
  }
`;
CustomSwitch.displayName = 'CustomSwitch';
