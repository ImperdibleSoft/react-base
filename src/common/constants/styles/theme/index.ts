import { warn } from '../../../utils/logger';

/* eslint-disable no-restricted-imports */
import dark from './do-not-export/dark';
import light from './do-not-export/light';
/* eslint-enable no-restricted-imports */
import { Theme, ColorName } from './types';

const isDarkModeOS = () =>
  typeof window !== 'undefined' && 'matchMedia' in window && window.matchMedia('(prefers-color-scheme: dark)').matches;

const getLocalStorageTheme = () =>
  typeof window !== 'undefined' && 'localStorage' in window ? (localStorage.getItem('theme') as Theme) : undefined;

export const getTheme = (): Theme => {
  if (isDarkModeOS() || getLocalStorageTheme() === 'dark') {
    return 'dark';
  }

  return 'light';
};

const getColor = (colorName: ColorName, theme: Theme = getTheme()) => {
  // @ts-ignore
  const defaultReturn = light[colorName] || 'fuchsia';

  switch (theme) {
    case 'dark':
      if (!dark[colorName]) {
        warn(`Color not found in <${theme}> theme <${colorName}:${dark[colorName]}>. Using default <${defaultReturn}>`);
        return defaultReturn;
      }

      // @ts-ignore
      return dark[colorName];

    default:
      if (!light[colorName]) {
        warn(
          `Color not found in <${theme}> theme <${colorName}:${light[colorName]}>. Using default <${defaultReturn}>`
        );
        return defaultReturn;
      }

      return defaultReturn;
  }
};

export default getColor;
