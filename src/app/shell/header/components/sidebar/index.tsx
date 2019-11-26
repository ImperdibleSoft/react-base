import * as React from 'react';
import ReactDOM from 'react-dom';

import { Wrapper, Toggler, Content } from './styles';

interface OwnProps {
  children: JSX.Element;
  handleClick: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<OwnProps> = ({ children, handleClick, isOpen }: OwnProps) => {
  const portal = document.getElementById('sidebar-root');

  return (
    <Wrapper>
      <Toggler onClick={handleClick}>
        <i className="fa fa-bars" />
      </Toggler>

      {portal && ReactDOM.createPortal(<Content isOpen={isOpen}>{children}</Content>, portal)}
    </Wrapper>
  );
};

export default Sidebar;
