import styled from 'styled-components';

import getColor from '../../../common/constants/styles/theme';
import { ThemedComponent } from '../../types/styled-components';

export const Wrapper = styled.div`
  display: block;
  margin: 0px auto;
  margin-bottom: 10px;
  overflow: hidden;
  overflow-x: auto;
  text-align: center;
  width: calc(100% - 10px + 2px);

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;
Wrapper.displayName = 'Wrapper';

interface TabsProps {
  minWidth: number;
}
export const StyledTabs = styled.ul`
  display: block;
  margin: 0 auto;
  min-width: ${({ minWidth }: TabsProps) => `${minWidth}px`};
`;
StyledTabs.displayName = 'StyledTabs';

interface TabProps extends ThemedComponent {
  isActive: boolean;
}
export const StyledTab = styled.li`
  color: ${({ theme }: TabProps) => getColor('TAB_COLOR', theme.active)};
  font-family: inherit;
  font-size: 14px;
  line-height: 1.3em;
  transition: color 0.2s;
  vertical-align: top;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &,
  & > *,
  & > * > * {
    &,
    &:active,
    &:focus,
    &:hover {
      display: inline-block;
      vertical-align: top;
      text-decoration: none;
    }
  }

  & > * {
    &,
    &:active,
    &:focus,
    &:hover {
      border: none;
      padding: 0;

      & > * {
        background-color: ${({ isActive, theme }: TabProps) =>
          getColor(isActive ? 'TAB_BACKGROUND_ACTIVE' : 'TAB_BACKGROUND', theme.active)};
        border: none;
        border-bottom: 1px solid ${({ theme }: TabProps) => getColor('TAB_BORDER', theme.active)};
        border-top: 1px solid transparent;
        color: inherit;
        cursor: pointer;
        padding: 5px 10px;
        transition: background-color 0.2s, color 0.2s;
      }
    }
  }

  &.is-active > *,
  & > *:active,
  & > *:focus,
  & > *:hover {
    & > * {
      background-color: ${({ theme }: ThemedComponent) => getColor('TAB_BACKGROUND_ACTIVE', theme.active)};
    }
  }

  &.is-active > *,
  & > *:active {
    & > * {
      border-bottom-width: 0px;
      padding-bottom: 6px;
    }
  }

  &:first-of-type {
    & > * > * {
      &,
      &:active,
      &:focus,
      &:hover {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
    }
  }

  &:last-of-type {
    & > * > * {
      &,
      &:active,
      &:focus,
      &:hover {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
  }
`;
StyledTab.displayName = 'StyledTab';
