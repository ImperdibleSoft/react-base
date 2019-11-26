import styled from 'styled-components';

import { TABLET } from '../../../common/constants/styles/media-queries';
import { HEADER_SIZE, FOOTER_SIZE, FOOTER_SIZE_TABLET } from '../../../common/constants/styles/sizes';
import getLayerPosition from '../../../common/constants/styles/z-indexes';

interface PageProps {
  isCentered?: boolean;
  maxWidth?: number;
}

export const Page = styled.div`
  margin: 0 auto;
  max-width: ${({ maxWidth }: PageProps) => (maxWidth ? `${maxWidth}px` : 'none')};
  min-height: calc(100vh - ${HEADER_SIZE}px - ${FOOTER_SIZE}px);
  padding: 10px;

  text-align: ${({ isCentered }: PageProps) => (isCentered ? 'center' : 'inherit')};
  z-index: ${getLayerPosition('CONTENT')};

  ${TABLET} {
    min-height: calc(100vh - ${HEADER_SIZE}px - ${FOOTER_SIZE_TABLET}px);
    padding: 20px;
  }
`;
Page.displayName = 'Page';

export const PageHeading = styled.h1`
  display: block;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
  padding: 10px 0;
  text-align: center;
  width: 100%;
`;
PageHeading.displayName = 'PageHeading';

export const PageTitle = styled(PageHeading)`
  ${TABLET} {
    display: none;
  }
`;
PageTitle.displayName = 'PageTitle';

export const PageH1 = styled(PageHeading)`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;
PageH1.displayName = 'PageH1';

export const PageH2 = styled(PageHeading)`
  font-size: 22px;
  font-weight: 400;
  text-align: left;
`;
PageH2.displayName = 'PageH2';

export const PageH3 = styled(PageHeading)`
  font-size: 20px;
  font-weight: 300;
  text-align: left;
`;
PageH3.displayName = 'PageH3';

export const PageH4 = styled(PageHeading)`
  font-size: 18px;
  font-weight: 300;
  text-align: left;
`;
PageH4.displayName = 'PageH4';
