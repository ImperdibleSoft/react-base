import { FieldProps } from '../../forms/types';
import { Alignment } from '../../../../common/types/alignments';
import { ThemedComponent } from '../../../types/styled-components';

export type ButtonType =
  | 'primary'
  | 'disabled'
  | 'link'
  | 'success'
  | 'warning'
  | 'danger'
  | 'linkedin'
  | 'facebook'
  | 'google'
  | 'twitter'
  | 'instagram';

export interface ButtonProps extends FieldProps {
  buttonType?: ButtonType;
  isTransparent?: boolean;
  to?: string;
}

export interface LinkProps {
  id: string;
  className?: string;
  label?: string;
  icon?: string | React.ReactElement<{}>;
  iconLast?: boolean;
  isExternal?: boolean;
  to?: any;
  onClick?: Function;
}

export interface StyledButtonProps extends ThemedComponent {
  buttonType?: ButtonType;
  isActive?: boolean;
  isDisabled?: boolean;
  isTransparent?: boolean;
  shouldInherit?: boolean;
}

export interface StyledButtonsProps {
  align: Alignment;
}

export interface StyledLinkProps extends ThemedComponent {
  shouldInherit?: boolean;
}
