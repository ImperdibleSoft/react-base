import * as React from 'react';
import analyticsApi from '../../../../../common/apis/reports/analytics';

import { ButtonAsButton, LinkAsButton } from '../../styles';
import Content from '../content';

import { INTERACTIONS } from '../../../../../common/constants/analytics';
import { SUBMIT } from '../../../forms/models';
import { ButtonProps } from '../../types';
import { Link } from 'react-router-dom';

interface OwnProps {
  options: ButtonProps;
  shouldInherit?: boolean;
}

const Button = ({ options, shouldInherit }: OwnProps) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { label } = options;

    analyticsApi.logSmartEvent({ category: INTERACTIONS, label: `${label} Button` });

    const { isDisabled, isAlwaysDisabled, onClick } = options;

    if (onClick && !isDisabled && !isAlwaysDisabled) {
      onClick(event);
    }
  };

  const touchable = {
    label: options.label,
    icon: options.icon,
    iconLast: options.iconLast,
  };

  if (options.to) {
    return (
      <LinkAsButton
        buttonType={options.buttonType}
        id={options.id}
        isDisabled={options.isDisabled}
        isTransparent={options.isTransparent}
        onClick={e => {
          onClick((e as unknown) as React.MouseEvent<HTMLButtonElement, MouseEvent>);
        }}
        shouldInherit={shouldInherit}
      >
        <Link to={options.to}>
          <Content options={touchable} />
        </Link>
      </LinkAsButton>
    );
  }

  const buttonDisabled =
    (options.type !== SUBMIT && !options.onClick) || options.isDisabled || options.isAlwaysDisabled;

  return (
    <ButtonAsButton
      buttonType={options.buttonType}
      disabled={buttonDisabled}
      id={options.id}
      isDisabled={buttonDisabled}
      isTransparent={options.isTransparent}
      onClick={onClick}
      shouldInherit={shouldInherit}
      type={options.type as 'button' | 'submit' | 'reset'}
    >
      <Content options={touchable} />
    </ButtonAsButton>
  );
};

export default Button;
