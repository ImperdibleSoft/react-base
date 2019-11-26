import styled from 'styled-components';

import { Page } from '../../../../components/page';

import { LANDSCAPE_OR_TABLET, TABLET, HD_DISPLAY } from '../../../../../common/constants/styles/media-queries';
import { FOOTER_SIZE, FOOTER_SIZE_TABLET, SIDEBAR_SIZE } from '../../../../../common/constants/styles/sizes';
import getColor from '../../../../../common/constants/styles/theme';
import { ThemedComponent } from '../../../../types/styled-components';

interface WrapperProps extends ThemedComponent {
  fixedSidebar: boolean;
}

export const Wrapper = styled.footer`
  background-color: ${({ theme }: WrapperProps) => getColor('FOOTER_BACKGROUND', theme.active)};
  color: ${({ theme }: WrapperProps) => getColor('FOOTER_COLOR', theme.active)};
  font-size: 10px;
  max-width: none;
  transition: background-color 0.2s, color 0.2s;

  ${LANDSCAPE_OR_TABLET} {
    text-align: center;
  }

  ${HD_DISPLAY} {
    left: ${({ fixedSidebar }: WrapperProps) => (fixedSidebar ? SIDEBAR_SIZE : 0)}px;
    position: relative;
    width: calc(100% - ${({ fixedSidebar }: WrapperProps) => (fixedSidebar ? SIDEBAR_SIZE : 0)}px);
  }
`;
Wrapper.displayName = 'Wrapper';

export const Content = styled(Page)`
  height: ${FOOTER_SIZE}px;
  min-height: 0px;
  padding: 10px;

  ${TABLET} {
    height: ${FOOTER_SIZE_TABLET}px;
    min-height: 0px;
  }
`;
Content.displayName = 'Content';

export const Text = styled.p``;
Text.displayName = 'Text';

export const List = styled.ul`
  display: inline-block;
  margin: 5px;
  vertical-align: top;
  width: calc(50% - 12px);

  ${LANDSCAPE_OR_TABLET} {
    text-align: left;
    width: 150px;
  }
`;
List.displayName = 'List';

export const ListHead = styled.li`
  letter-spacing: 0.2em;
  text-shadow: 0 0 2px ${({ theme }: ThemedComponent) => getColor('FOOTER_TEXT_SHADOW', theme.active)};
  text-transform: uppercase;
  transition: text-shadow: 0.2s;
`;
ListHead.displayName = 'ListHead';

export const ListElement = styled.li`
  &,
  & * {
    color: inherit !important;
  }
`;
ListElement.displayName = 'ListElement';
