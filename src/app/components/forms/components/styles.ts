import styled from 'styled-components';

import getColor from '../../../../common/constants/styles/theme';
import { ThemedComponent } from '../../../types/styled-components';

export const CONTROL_SIZE = 24;

export const Wrapper = styled.div`
  color: ${({ theme }: ThemedComponent) => getColor('FIELD_COLOR', theme.active)};
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  margin-top: 5px;
  padding: 5px;
  width: calc(100% - 10px);
`;
Wrapper.displayName = 'Wrapper';

export const Label = styled.label`
  cursor: inherit;
`;
Label.displayName = 'Label';

export const Input = styled.input`
  appearance: none;
  background-color: ${({ theme }: ThemedComponent) => getColor('FIELD_BACKGROUND', theme.active)};
  border-radius: 4px;
  border: none;
  border-bottom: 1px solid ${({ theme }: ThemedComponent) => getColor('FIELD_BORDER', theme.active)};
  border-top: 1px solid transparent;
  color: inherit;
  cursor: inherit;
  display: block;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.3em;
  min-height: 38px;
  padding: 5px 10px;
  width: 100%;

  user-select: initial;
  -webkit-touch-callout: initial;
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;

  &:disabled {
    background-color: ${({ theme }: ThemedComponent) => getColor('DISABLED_BACKGROUND', theme.active)};
    border-color: ${({ theme }: ThemedComponent) => getColor('DISABLED_BORDER', theme.active)};
    border-top-color: transparent;
    color: ${({ theme }: ThemedComponent) => getColor('DISABLED_COLOR', theme.active)};
    cursor: not-allowed;
  }

  .vdp-datepicker__clear-button {
    position: absolute;
    right: 10px;
    top: 2px;
  }

  .vdp-datepicker__calendar .cell.selected {
    background-color: ${({ theme }: ThemedComponent) => getColor('FIELD_BACKGROUND_ACTIVE', theme.active)};
    border-radius: 4px;
    color: ${({ theme }: ThemedComponent) => getColor('FIELD_COLOR_ACTIVE', theme.active)};
  }
`;
Input.displayName = 'Input';

export const HiddenInput = styled.input`
  display: none;
`;
HiddenInput.displayName = 'HiddenInput';

export const Description = styled.div`
  cursor: inherit;
  line-height: ${CONTROL_SIZE}px;
`;
Description.displayName = 'Description';

export const ErrorMessage = styled.span`
  background-color: ${({ theme }: ThemedComponent) => getColor('DANGER_BACKGROUND', theme.active)};
  border: 1px solid ${({ theme }: ThemedComponent) => getColor('DANGER_COLOR', theme.active)};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 0;
  color: ${({ theme }: ThemedComponent) => getColor('DANGER_COLOR', theme.active)};
  display: block;
  padding: 5px 10px;
`;
ErrorMessage.displayName = 'ErrorMessage';
