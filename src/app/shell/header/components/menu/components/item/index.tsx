import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import getColor from '../../../../../../../common/constants/styles/theme';
import { ThemedComponent } from '../../../../../../types/styled-components';

interface CSSProps extends ThemedComponent {
  align?: 'flex-start' | 'center' | 'flex-end';
}

const CSS = css`
  align-items: center;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }: CSSProps) => getColor('SIDEBAR_BORDER', theme.active)};
  color: inherit;
  display: inline-flex;
  justify-content: ${({ align = 'flex-start' }: CSSProps) => align};
  padding: 10px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: background-color 0.2s;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background-color: ${({ theme }: CSSProps) => getColor('BRAND_COLOR_ACTIVE', theme.active)};
  }
`;

const ExternalItem = styled.a`
  ${CSS}
`;

const LocalItem = styled(NavLink)`
  ${CSS}
`;

interface ItemProps extends CSSProps {
  children: React.ReactChild;
  isExternal?: boolean;
  onClick?: () => void;
  to: string;
}

export const Item: React.FC<ItemProps> = ({ align, children, isExternal, onClick, to }: ItemProps) => {
  if (isExternal) {
    return (
      <ExternalItem align={align} href={to} onClick={onClick} target="_blank" rel="noopener noreferer">
        {children}
      </ExternalItem>
    );
  }

  return (
    <LocalItem align={align} onClick={onClick} to={to}>
      {children}
    </LocalItem>
  );
};
