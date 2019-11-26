import * as React from 'react';
import { Td as TData } from '../styles';

interface OwnProps {
  align?: 'left' | 'center' | 'right';
  bold?: boolean;
  children?: any;
  color?: string;
  colSpan?: number;
  singleLine?: boolean;
  verticalAlign?: string;
}

const Td = ({ align, children, singleLine, verticalAlign, ...props }: OwnProps) => {
  const vAlign = verticalAlign ? verticalAlign : !singleLine ? 'top' : align !== 'left' ? 'bottom' : 'top';

  return (
    <TData align={align} singleLine={singleLine} verticalAlign={vAlign} {...props}>
      {children}
    </TData>
  );
};

export default Td;
