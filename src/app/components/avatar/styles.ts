import styled from 'styled-components';

import { TABLET } from '../../../common/constants/styles/media-queries';
import getColor from '../../../common/constants/styles/theme';
import { ThemedComponent } from '../../types/styled-components';

interface AvatarProps extends ThemedComponent {
  avatarBorder: number;
  avatarFontSize: number;
  avatarSize: number;
  avatarIconSize: number;
  isEmpty?: boolean;
  isExpandable?: boolean;
}

export const Avatar = styled.span`
  align-items: center;
  background-color: ${({ isEmpty, theme }: AvatarProps) =>
    getColor(isEmpty ? 'AVATAR_BACKGROUND_EMPTY' : 'AVATAR_BACKGROUND', theme.active)};
  border-radius: 50%;
  border: ${({ avatarBorder, theme }: AvatarProps) =>
    `${avatarBorder}px solid ${getColor('AVATAR_BORDER', theme.active)}`};
  display: inline-flex;
  font-size: ${({ avatarFontSize }: AvatarProps) => `${avatarFontSize}px`};
  height: ${({ avatarSize }: AvatarProps) => `${avatarSize}px`};
  justify-content: center;
  overflow: hidden;
  position: initial;
  text-align: center;
  transition: background-color 0.2s, border: 0.2s;
  width: ${({ avatarSize }: AvatarProps) => `${avatarSize}px`};

  & .fa {
    color: ${({ theme }: AvatarProps) => getColor('AVATAR_ICONS_COLOR', theme.active)};
    font-size: ${({ avatarIconSize }: AvatarProps) => `${avatarIconSize}px`};
    max-width: 100%;
    transition: color 0.2s;
  }

  ${TABLET} {
    font-size: ${({ avatarFontSize, isExpandable }: AvatarProps) =>
      isExpandable ? `${avatarFontSize * 2}px` : undefined};
    height: ${({ avatarSize, isExpandable }: AvatarProps) => (isExpandable ? `${avatarSize * 2}px` : undefined)};
    width: ${({ avatarSize, isExpandable }: AvatarProps) => (isExpandable ? `${avatarSize * 2}px` : undefined)};

    & .fa {
      font-size: ${({ avatarIconSize, isExpandable }: AvatarProps) =>
        isExpandable ? `${avatarIconSize * 2}px` : undefined};
    }
  }
`;
Avatar.displayName = 'Avatar';

export const AvatarPicture = styled.img`
  max-width: 100%;
`;
AvatarPicture.displayName = 'AvatarPicture';
