import * as React from 'react';
import styled from 'styled-components';

import Space from '../../../space';

const Label = styled.span`
  vertical-align: top;
`;
Label.displayName = 'Label';

interface OwnProps {
  options: {
    icon?: string | React.ReactElement<{}>;
    iconLast?: boolean;
    label?: string;
  };
}

const Content = ({ options: { icon, iconLast, label } }: OwnProps) => {
  if (typeof icon === 'string') {
    return (
      <>
        {icon && !iconLast && <i className={`fa fa-${icon}`} />}
        {icon && !iconLast && label && <Space />}
        {label && <Label>{label}</Label>}
        {icon && iconLast && label && <Space />}
        {icon && iconLast && <i className={`fa fa-${icon}`} />}
      </>
    );
  }

  return (
    <>
      {icon && !iconLast && icon}
      {icon && !iconLast && label && <Space />}
      {label && <Label>{label}</Label>}
      {icon && iconLast && label && <Space />}
      {icon && iconLast && icon}
    </>
  );
};

export default Content;
