import * as React from 'react';

import { Wrapper, Line, LineSpacer } from './styles';

interface OwnProps {
  fixedSidebar: boolean;
  isLoading?: boolean;
}

const View: React.FC<OwnProps> = ({ fixedSidebar, isLoading = false }: OwnProps) => (
  <>
    <Wrapper fixedSidebar={fixedSidebar} isLoading={isLoading}>
      <Line effect="increase" isLoading={isLoading} />
      <Line effect="decrease" isLoading={isLoading} />
    </Wrapper>

    <LineSpacer isLoading={isLoading} />
  </>
);

export default View;
