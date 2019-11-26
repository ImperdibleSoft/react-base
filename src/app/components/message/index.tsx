import * as React from 'react';

import getColor from '../../../common/constants/styles/theme';
import { useThemeContext } from '../../contexts/theme';
import { Wrapper } from './styles';

interface OwnProps {
  children: JSX.Element;
  type?: 'default' | 'success' | 'warning' | 'error';
}

const Message = ({ children, type = 'default' }: OwnProps) => {
  const theme = useThemeContext();

  let backgroundColor = getColor('INFO_BACKGROUND', theme.active);
  let color = getColor('INFO_COLOR', theme.active);

  switch (type) {
    case 'success':
      backgroundColor = getColor('SUCCESS_BACKGROUND', theme.active);
      color = getColor('SUCCESS_COLOR', theme.active);
      break;

    case 'warning':
      backgroundColor = getColor('WARNING_BACKGROUND', theme.active);
      color = getColor('WARNING_COLOR', theme.active);
      break;

    case 'error':
      backgroundColor = getColor('DANGER_BACKGROUND', theme.active);
      color = getColor('DANGER_COLOR', theme.active);
      break;

    default:
  }

  return (
    <Wrapper backgroundColor={backgroundColor} color={color}>
      {children}
    </Wrapper>
  );
};

export default Message;
