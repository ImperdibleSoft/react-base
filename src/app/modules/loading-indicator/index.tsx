import * as React from 'react';
import { useSelector } from 'react-redux';

import { isFetchingAnything } from '../../selectors';

import View from './components/view';

const LoadingIndicator: React.FC = () => {
  const isLoading = useSelector(isFetchingAnything);

  return <View fixedSidebar isLoading={isLoading} />;
};

export default LoadingIndicator;
