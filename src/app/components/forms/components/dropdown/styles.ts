import { Styles } from 'react-select/src/styles';

import getColor from '../../../../../common/constants/styles/theme';
import { Theme } from '../../../../../common/constants/styles/theme/types';

const getDropdownStyles = (theme?: Theme): Partial<Styles> => ({
  control: (provided, { isDisabled }) => ({
    ...provided,
    backgroundColor: getColor(isDisabled ? 'DISABLED_BACKGROUND' : 'FIELD_BACKGROUND', theme),
    borderRadius: '4px',
    border: 'none',
    borderColor: getColor(isDisabled ? 'DISABLED_BORDER' : 'FIELD_BORDER', theme),
    borderBottom: `1px solid ${getColor(isDisabled ? 'DISABLED_BORDER' : 'FIELD_BORDER', theme)}`,
    borderTop: '1px solid transparent',
    boxShadow: 'none',
    color: getColor(isDisabled ? 'DISABLED_COLOR' : 'FIELD_COLOR', theme),
    cursor: isDisabled ? 'not-allowed' : 'inherit',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: '1.3em',
    position: 'relative',
    transition: 'background-color 0.2s, border: 0.2s, color 0.2s',

    '&:hover': {
      borderTop: '1px solid transparent',
    },
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: getColor('FIELD_BACKGROUND', theme),
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:
      state.isActive || state.isSelected ? getColor('FIELD_BACKGROUND_ACTIVE', theme) : provided.backgroundColor,
    transition: 'background-color 0.2s',

    '&:active, &:focus, &:hover': {
      backgroundColor: getColor('FIELD_BACKGROUND_ACTIVE', theme),
    },
  }),
  singleValue: () => ({
    color: 'inherit !important',
  }),
});

export default getDropdownStyles;
