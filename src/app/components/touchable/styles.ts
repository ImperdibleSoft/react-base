import styled from 'styled-components';

import { StyledButtonProps, StyledButtonsProps, StyledLinkProps } from './types';
import getColor from '../../../common/constants/styles/theme';

export const Buttons = styled.div`
  font-size: 16px;
  margin: 10px 5px;
  text-align: ${({ align }: StyledButtonsProps) => align};
  width: calc(100% - 10px);

  & > button,
  & > span {
    border-radius: 0;
    margin: 5px 0;
  }

  & > :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  & > :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
Buttons.displayName = 'Buttons';

const getButtonBackgroundColor = ({ buttonType, isDisabled, isTransparent, theme }: StyledButtonProps) => {
  if (isTransparent) {
    return 'transparent';
  }

  if (isDisabled) {
    return getColor('DISABLED_BACKGROUND', theme.active);
  }

  switch (buttonType) {
    case 'primary':
      return getColor('BUTTON_BACKGROUND_PRIMARY', theme.active);
    case 'link':
      return 'transparent !important';

    case 'success':
      return getColor('SUCCESS_COLOR', theme.active);
    case 'warning':
      return getColor('WARNING_COLOR', theme.active);
    case 'danger':
      return getColor('DANGER_COLOR', theme.active);

    case 'linkedin':
      return getColor('LINKEDIN', theme.active);
    case 'facebook':
      return getColor('FACEBOOK', theme.active);
    case 'google':
      return getColor('GOOGLE', theme.active);
    case 'instagram':
      return getColor('INSTAGRAM', theme.active);
    case 'twitter':
      return getColor('TWITTER', theme.active);

    default:
      return getColor('BUTTON_BACKGROUND', theme.active);
  }
};

const getButtonBorderBottomColor = ({ buttonType, isDisabled, isTransparent, theme }: StyledButtonProps) => {
  if (isTransparent) {
    return 'transparent';
  }

  if (isDisabled) {
    return getColor('DISABLED_BORDER', theme.active);
  }

  switch (buttonType) {
    case 'primary':
      // return `darken(${BRAND_COLOR}, 20)`;
      return getColor('BUTTON_BORDER_PRIMARY', theme.active);
    case 'link':
      return 'transparent !important';

    case 'success':
      // return `darken(${SUCCESS}, 20)`;
      return getColor('SUCCESS_COLOR', theme.active);
    case 'warning':
      // return `darken(${WARNING}, 20)`;
      return getColor('WARNING_COLOR', theme.active);
    case 'danger':
      // return `darken(${DANGER}, 20)`;
      return getColor('DANGER_COLOR', theme.active);

    case 'linkedin':
      // return `darken(${LINKEDIN}, 20)`;
      return getColor('LINKEDIN', theme.active);
    case 'facebook':
      // return `darken(${FACEBOOK}, 20)`;
      return getColor('FACEBOOK', theme.active);
    case 'google':
      // return `darken(${GOOGLE}, 20)`;
      return getColor('GOOGLE', theme.active);
    case 'instagram':
      // return `darken(${INSTAGRAM}, 20)`;
      return getColor('INSTAGRAM', theme.active);
    case 'twitter':
      // return `darken(${TWITTER}, 20)`;
      return getColor('TWITTER', theme.active);

    default:
      // return `darken(${BRAND_COLOR}, 20)`;
      return getColor('BUTTON_BORDER_PRIMARY', theme.active);
  }
};

export const getButtonCursor = ({ isDisabled, isTransparent }: StyledButtonProps) => {
  if (isDisabled) {
    return 'not-allowed';
  }

  if (isTransparent) {
    return 'pointer';
  }

  return 'default';
};

const getButtonTextColor = ({ buttonType, isDisabled, isTransparent, theme }: StyledButtonProps) => {
  if (isDisabled) {
    return getColor('DISABLED_COLOR', theme.active);
  }

  switch (buttonType) {
    case 'primary':
      return getColor(isTransparent ? 'LINK_COLOR' : 'BUTTON_COLOR_PRIMARY', theme.active);
    case 'link':
      return getColor(isTransparent ? 'LINK_COLOR' : 'LINK_COLOR', theme.active);

    case 'success':
      return getColor(isTransparent ? 'SUCCESS_COLOR' : 'BUTTON_COLOR_PRIMARY', theme.active);
    case 'warning':
      return getColor(isTransparent ? 'WARNING_COLOR' : 'BUTTON_COLOR_PRIMARY', theme.active);
    case 'danger':
      return getColor(isTransparent ? 'DANGER_COLOR' : 'BUTTON_COLOR_PRIMARY', theme.active);

    case 'linkedin':
      return getColor(isTransparent ? 'LINKEDIN' : 'BUTTON_COLOR_PRIMARY', theme.active);
    case 'facebook':
      return getColor(isTransparent ? 'FACEBOOK' : 'BUTTON_COLOR_PRIMARY', theme.active);
    case 'google':
      return getColor(isTransparent ? 'GOOGLE' : 'BUTTON_COLOR_PRIMARY', theme.active);
    case 'instagram':
      return getColor(isTransparent ? 'INSTAGRAM' : 'BUTTON_COLOR_PRIMARY', theme.active);
    case 'twitter':
      return getColor(isTransparent ? 'TWITTER' : 'BUTTON_COLOR_PRIMARY', theme.active);

    default:
      return getColor('BUTTON_COLOR', theme.active);
  }
};

const buttonStyles = ({ buttonType, isActive, isDisabled, isTransparent, shouldInherit, theme }: StyledButtonProps) => `
  background-color: ${
    shouldInherit ? 'transparent' : getButtonBackgroundColor({ buttonType, isDisabled, isTransparent, theme })
  };
  border-radius: ${shouldInherit ? 'initial' : '4px'};
  border: none;
  border-bottom: ${isActive || shouldInherit ? 0 : 1}px solid ${getButtonBorderBottomColor({
  buttonType,
  isDisabled,
  isTransparent,
  theme,
})};
  border-top: 1px solid transparent;
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.3em;
  margin: ${shouldInherit ? '0px' : '5px'};
  max-width: ${shouldInherit ? '100%' : 'calc(100% - 10px)'};
  overflow: hidden;
  padding: ${shouldInherit ? '0px' : '5px 10px'};
  padding-bottom: ${isActive ? 6 : 5}px;
  text-align: center;
  text-overflow: ellipsis;
  transition: background-color 0.2s, border: 0.2s, color 0.2s;
  vertical-align: middle;
  white-space: nowrap;
  transition: background-color 0.3s, border 0.3s, width 0.3s;

  &:active {
    border-bottom-width: 0px;
    padding-bottom: 6px;
  }

  &:disabled {
    background-color: ${isTransparent ? 'transparent' : getColor('DISABLED_BACKGROUND', theme.active)};
    border-bottom-color: ${isTransparent ? 'transparent' : getColor('DISABLED_BORDER', theme.active)};
    color: ${getColor('DISABLED_COLOR', theme.active)};
    cursor: not-allowed;
  }

  &,
  & > a {
    color: ${getButtonTextColor({ buttonType, isDisabled, isTransparent, theme })};
    cursor: ${getButtonCursor({ isDisabled, isTransparent, theme })};
    transition: background-color 0.2s, border: 0.2s, color 0.2s;
  }
`;

const linkStyles = ({ shouldInherit, theme }: StyledLinkProps) => `
  &,
  & > a {
    ${shouldInherit ? '' : 'background-color: transparent;'}
    ${shouldInherit ? '' : 'border: none;'}
    color: ${shouldInherit ? 'inherit' : getColor('LINK_COLOR', theme.active)};
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    height: 100%;
    text-decoration: none;
    transition: background-color 0.2s, border: 0.2s, color 0.2s;
    width: ${shouldInherit ? '100%' : 'auto'};

    &:hover {
      text-decoration: ${shouldInherit ? 'inherit' : 'underline'};
    }
  }
`;

export const ButtonAsButton = styled.button`
  ${buttonStyles}
`;
ButtonAsButton.displayName = 'ButtonAsButton';

export const ButtonAsLink = styled.button`
  ${linkStyles}
`;
ButtonAsLink.displayName = 'ButtonAsLink';

export const LinkAsButton = styled.span`
  ${buttonStyles}
`;
LinkAsButton.displayName = 'LinkAsButton';

export const LinkAsLink = styled.span`
  ${linkStyles}
`;
LinkAsLink.displayName = 'LinkAsLink';

export const TextAsButton = styled.span`
  ${buttonStyles}
`;
TextAsButton.displayName = 'TextAsButton';
