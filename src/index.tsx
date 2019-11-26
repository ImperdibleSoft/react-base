import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppInit from './app';
import AppWrapper from './app/wrapper';
import ScrollTop from './app/components/scroll-top';

const ReactApp: React.FC = () => (
  <AppInit>
    {({ lastRoute, store }) => (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollTop>
            <AppWrapper lastRoute={lastRoute} />
          </ScrollTop>
        </BrowserRouter>
      </Provider>
    )}
  </AppInit>
);

export default ReactApp;
