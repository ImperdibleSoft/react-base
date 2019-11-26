import * as React from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';

import { getTheme } from '../../common/constants/styles/theme';
import { ThemedComponent, StyledTheme } from '../types/styled-components';

export const useThemeContext = (): ThemedComponent['theme'] =>
  React.useContext<StyledTheme>(ThemeContext) || { active: 'light' };

interface Props {
  children: React.ReactElement;
}

const ThemeWrapper: React.FC<Props> = ({ children }: Props) => (
  <ThemeProvider theme={{ active: getTheme() }}>{children}</ThemeProvider>
);

export default ThemeWrapper;
