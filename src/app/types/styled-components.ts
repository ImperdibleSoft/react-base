import { Theme } from '../../common/constants/styles/theme/types';

export interface StyledTheme {
  active: Theme;
}

export interface ThemedComponent {
  theme: StyledTheme;
}
