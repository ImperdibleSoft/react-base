import * as React from 'react';

import { Link, Button } from '../../../touchable';
import { StyledTab } from '../../styles';

import { TabProps } from '../../types';

interface OwnProps {
  options: TabProps;
  isActive: boolean;
  handleClick: Function;
  reference: any;
}

const Tab = ({ handleClick, isActive, options, reference }: OwnProps) => (
  <StyledTab
    id={options.id}
    isActive={isActive}
    onClick={() => {
      handleClick(options);
    }}
    role="button"
    ref={reference}
  >
    {options.to ? (
      <Link options={options} shouldInherit />
    ) : (
      <Button options={{ ...options, type: 'button' }} shouldInherit />
    )}
  </StyledTab>
);

export default Tab;
