import { CSSProperties } from 'react';

import getColor from '../../../../../common/constants/styles/theme';
import { Theme } from '../../../../../common/constants/styles/theme/types';

export const getTextStyles = (theme: Theme): CSSProperties => ({
  appearance: 'none',
  backgroundColor: getColor('FIELD_BACKGROUND', theme),
  borderRadius: '4px',
  border: 'none',
  borderBottom: `1px solid ${getColor('FIELD_BORDER', theme)}`,
  borderTop: '1px solid transparent',
  color: 'inherit',
  cursor: 'inherit',
  display: 'block',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: '1.3em',
  minHeight: '150px',
  padding: '5px 10px',
  resize: 'vertical',
  transition: 'background-color 0.2s, border: 0.2s, color 0.2s',
  userSelect: 'initial',
  width: '100%',
});

export const getDisabledStyles = (theme: Theme) => ({
  ...getTextStyles(theme),
  backgroundColor: getColor('DISABLED_BACKGROUND', theme),
  borderBottom: `1px solid ${getColor('DISABLED_BORDER', theme)}`,
  color: getColor('DISABLED_COLOR', theme),
  cursor: 'not-allowed',
});
