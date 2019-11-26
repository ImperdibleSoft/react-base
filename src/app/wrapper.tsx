import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import analyticsApi from '../common/apis/reports/analytics';
import { setLastSession, setStore } from '../common/utils/idb';
import registerServiceWorker from './utils/service-worker';

import { restoreLastRoute, persistStore as shouldPersistStore } from '../common/constants/features';

import { getAppStore } from './selectors';

import View from './view';

import { PAGE_LOAD, APP_LOAD, FINISHED } from '../common/constants/analytics';
import ThemeWrapper from './contexts/theme';

const packageJson = require('../../package.json');
const appVersion = packageJson.version;

interface OwnProps {
  lastRoute: string;
}

const AppWrapper: React.FC<OwnProps> = ({ lastRoute }: OwnProps) => {
  const history = useHistory();
  const location = useLocation();

  const store = useSelector(getAppStore);

  const persistStore = () => {
    if (shouldPersistStore) {
      const ignoredStates: string[] = [];

      const persistedStore: { [index: string]: any } = {};

      Object.keys(store).forEach(key => {
        if (ignoredStates.indexOf(key) < 0) {
          persistedStore[key] = {
            // @ts-ignore
            ...store[key],
            filters: undefined,
            isFetching: undefined,
          };
        }
      });

      setStore(JSON.parse(JSON.stringify(persistedStore)));
    }
  };

  React.useEffect(() => {
    // Init the service worker
    registerServiceWorker(history);

    analyticsApi.logTiming({
      category: PAGE_LOAD,
      label: APP_LOAD,
      variable: FINISHED,
      value: new Date().getTime() - analyticsApi.getInitialTime(),
    });
  }, []);

  React.useEffect(() => {
    if (restoreLastRoute) {
      history.push({
        pathname: lastRoute,
        state: {
          from: location,
          isInitial: true,
        },
      });
    }
  }, [lastRoute]);

  React.useEffect(() => {
    analyticsApi.logPageView(location.pathname);

    setLastSession({
      version: appVersion,
      route: location.pathname,
    });
  }, [location]);

  React.useEffect(() => {
    persistStore();
  }, [store]);

  return (
    <ThemeWrapper>
      <View />
    </ThemeWrapper>
  );
};

export default AppWrapper;
