import * as React from 'react';
import { isProduction } from '../../../../../common/utils/platforms';

import { Wrapper, Content, Text } from './styles';

import { APP_NAME, APP_DEVELOPER } from '../../../../../common/constants/branding';
import { MAX_WIDTH_LG } from '../../../../../common/constants/styles/sizes';

interface OwnProps {
  appVersion: string;
  fixedSidebar: boolean;
}

const View: React.FC<OwnProps> = ({ appVersion, fixedSidebar }: OwnProps) => (
  <Wrapper fixedSidebar={fixedSidebar}>
    <Content maxWidth={MAX_WIDTH_LG}>
      <Text>
        {APP_NAME} {!isProduction() && `v${appVersion}`} &copy; is a registered property of {APP_DEVELOPER} &copy;{' '}
        {new Date().getFullYear()}
      </Text>
    </Content>
  </Wrapper>
);

export default View;
