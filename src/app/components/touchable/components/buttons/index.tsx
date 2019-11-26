import * as React from 'react';

import Button from '../button';
import { Buttons as StyledButtons } from '../../styles';

import { RIGHT } from '../../../../../common/constants/alignments';
import { Alignment } from '../../../../../common/types/alignments';
import { ButtonProps } from '../../types';

interface OwnProps {
  align?: Alignment;
  options: ButtonProps[];
}

const Buttons: React.FC<OwnProps> = ({ align = RIGHT, options }: OwnProps) => {
  if (!options.length) {
    return null;
  }

  return (
    <StyledButtons align={align}>
      {options.map(button => {
        const isDisabled = (!button.isAlwaysEnabled && button.isDisabled) || button.isAlwaysDisabled;

        return <Button key={button.id} options={{ ...button, isDisabled }} />;
      })}
    </StyledButtons>
  );
};

export default Buttons;
