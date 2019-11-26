import * as React from 'react';

import { Avatar as AvatarStyled, AvatarPicture } from './styles';

import { MD } from '../../../common/constants/sizes';
import { SizeName, SizesMap } from '../../../common/types/sizes';

const sizes: SizesMap = {
  xs: 24,
  sm: 48,
  md: 75,
  lg: 100,
  xl: 150,
  xxl: 200,
};
// @ts-ignore
const getSize = (size: SizeName) => sizes[size] || sizes.md;

const TEXT_FACTOR = 2.083333;
const textFactorMultiplier: SizesMap = {
  xs: 1,
  sm: 1,
  md: 1,
  lg: 1.5,
  xl: 1.5,
  xxl: 2,
};
// @ts-ignore
const getTextFactorMultiplier = (size: SizeName) => textFactorMultiplier[size] || textFactorMultiplier.md;

const ICON_FACTOR = 1.78571;
const iconFactorMultiplier: SizesMap = {
  xs: 0.4,
  sm: 1,
  md: 1,
  lg: 1.5,
  xl: 1.5,
  xxl: 2,
};
// @ts-ignore
const getIconFactorMultiplier = (size: SizeName) => iconFactorMultiplier[size] || iconFactorMultiplier.md;

interface OwnProps {
  profile: {
    picture?: string | JSX.Element;
    fullName?: string;
    name?: string;
  };
  size?: SizeName;
  isExpandable?: boolean;
}

const Avatar = ({ profile, size = MD, isExpandable = false }: OwnProps) => {
  const avatarBorder = getSize(size) / 10;
  const avatarFontSize = getSize(size) / TEXT_FACTOR / getTextFactorMultiplier(size);
  const avatarSize = getSize(size);
  const avatarIconSize = getSize(size) / ICON_FACTOR / getIconFactorMultiplier(size);

  return (
    <AvatarStyled
      avatarBorder={avatarBorder}
      avatarFontSize={avatarFontSize}
      avatarSize={avatarSize}
      avatarIconSize={avatarIconSize}
      isEmpty={!profile || !profile.picture}
      isExpandable={isExpandable}
    >
      {!profile.picture && profile.fullName && <i className="fa fa-user" />}
      {!profile.picture && profile.name && <i className="fa fa-globe" />}
      {profile.picture && typeof profile.picture !== 'string' && profile.picture}
      {profile.picture && typeof profile.picture === 'string' && <AvatarPicture src={profile.picture} />}
    </AvatarStyled>
  );
};

export default Avatar;
