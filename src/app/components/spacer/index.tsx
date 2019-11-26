import * as React from 'react';
import { StyledSpacer } from './styles';
import { SizesMap, SizeName } from '../../../common/types/sizes';

const borderSizes: SizesMap = {
  xs: 0,
  sm: 0,
  md: 1,
};
const getBorderSize = (size: SizeName) =>
  // @ts-ignore
  typeof borderSizes[size] !== 'undefined' ? borderSizes[size] : borderSizes.md;

const marginSizes: SizesMap = {
  xs: 10,
  sm: 15,
  md: 20,
};
// @ts-ignore
const getSizeValue = (size: SizeName) => marginSizes[size] || marginSizes.md;

interface OwnProps {
  size?: SizeName;
}

const Spacer = ({ size = 'md' }: OwnProps) => {
  const borderSize = getBorderSize(size);
  const marginSize = getSizeValue(size);

  return <StyledSpacer borderSize={borderSize} marginSize={marginSize} />;
};

export default Spacer;
