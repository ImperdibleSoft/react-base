import * as React from 'react';
import { Th as THeading } from '../styles';

interface OwnProps {
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  children?: any;
  color?: string;
  singleLine?: boolean;
}

const Th = ({ align, children, singleLine, ...props }: OwnProps) => {
  const verticalAlign = !singleLine ? 'top' : align !== 'left' ? 'bottom' : 'top';

  return (
    <THeading align={align} singleLine={singleLine} verticalAlign={verticalAlign} {...props}>
      {children}
    </THeading>
  );
};

export default Th;
