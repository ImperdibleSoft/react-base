import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './modules/landing';
import LoadingIndicator from './modules/loading-indicator';
import Footer from './shell/footer';
import Header from './shell/header';
import { GlobalStyle, Wrapper, Content } from './styles';

import * as routes from '../common/constants/appRoutes';

const View: React.FC = () => (
  <Wrapper id="app">
    <GlobalStyle />

    <Header />
    <div id="sidebar-root"></div>

    <Content fixedSidebar>
      <LoadingIndicator />

      <Switch>
        <Route path={routes.HOME} component={Landing} />
      </Switch>
    </Content>

    <Footer />

    <div id="modal-root"></div>
  </Wrapper>
);

export default View;
