import * as React from 'react';
import ReactDOM from 'react-dom';

import { Content as TouchableContent } from '../../../../components/touchable';
import { Wrapper, Toggler, Content } from './styles';

interface OwnProps {
  children: JSX.Element;
  handleClick: (event: React.MouseEvent) => void;
  isOpen: boolean;
  isRight?: boolean;
  right?: number;
  toggler: {
    icon?: string | JSX.Element;
    label?: string;
    to?: string;
  };
}

const Menu: React.FC<OwnProps> = ({ children, handleClick, isOpen, isRight = true, right = 2, toggler }: OwnProps) => {
  const portal = document.getElementById('sidebar-root');

  return (
    <Wrapper isRight={isRight} onClick={handleClick}>
      <Toggler>
        <TouchableContent options={{ ...toggler, iconLast: true }} />
      </Toggler>

      {portal &&
        ReactDOM.createPortal(
          <Content isOpen={isOpen} right={right}>
            {children}
          </Content>,
          portal
        )}
    </Wrapper>
  );
};

export default Menu;
