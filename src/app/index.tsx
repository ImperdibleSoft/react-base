import 'font-awesome/css/font-awesome.css';
import * as React from 'react';
import { Store, AnyAction } from 'redux';
import sentryApi from '../common/apis/reports/sentry';
import analyticsApi from '../common/apis/reports/analytics';
import buildStore from '../common/utils/buildStore';
import { setInstallationData } from './utils/installation';
import { error } from '../common/utils/logger';
import { isInstalledPWA } from '../common/utils/platforms';
import {
  setWorkerConfig,
  getStore,
  getLastSession,
  clearStore,
  setLastSession,
  clearWorkerConfig,
} from '../common/utils/idb';

import { ANALYTICS_TAG } from '../common/constants/branding';
import { PAGE_LOAD, APP_LOAD, STARTED } from '../common/constants/analytics';
import { RootState } from './types';

const defaultBadgeUrl = require('../images/badge.png');
const defaultIconUrl = require('../images/logo.png');
const packageJson = require('../../package.json');

interface OwnState {
  isNewRelease: boolean;
  lastRoute: string;
  store?: Store<RootState, AnyAction>;
}

interface ChildrenProps extends OwnState {
  store: Store<RootState, AnyAction>;
}

interface OwnProps {
  children: (initialParams: ChildrenProps) => React.ReactNode;
}

const AppInit: React.FC<OwnProps> = ({ children }: OwnProps) => {
  const [initialParameters, setInitialParameters] = React.useState({
    isNewRelease: false,
    lastRoute: '',
    store: undefined,
  } as OwnState);

  const initAPIs = async () => {
    /**
     * Some package that need to be initialized before app starts
     */
    const requiredInits: Promise<any>[] = [
      analyticsApi.init({ tag: ANALYTICS_TAG }),
      sentryApi.init({ tags: { scenario: 'web-client' } }),
    ];

    Promise.all(requiredInits).then(
      () => {},
      err => {
        error('There was an error while initializing an SDK', err);
      }
    );
  };

  const firstSteps = async () => {
    await initAPIs();

    analyticsApi.set({ key: 'dimension1', value: isInstalledPWA() });
    analyticsApi.set({ key: 'dimension5', value: packageJson.version });

    analyticsApi.logTiming({
      category: PAGE_LOAD,
      label: APP_LOAD,
      variable: STARTED,
      value: new Date().getTime() - analyticsApi.getInitialTime(),
    });

    // Set installation data (installationId)
    setInstallationData();

    // Get last session data
    const lastSession = await getLastSession();
    const isNewRelease = packageJson.version !== lastSession.version;
    let persistedStore: RootState | void;

    // If this is the firs time visiting application, or it's a different version
    if (isNewRelease) {
      // Remove persisted store and worker config
      await Promise.all([clearStore(), clearWorkerConfig()]);

      // If user is using the same version than last visit
    } else {
      // Get persisted store
      persistedStore = await getStore();
    }

    // Update last session data
    setLastSession({
      version: packageJson.version,
      route: location.pathname,
    });

    // Update service worker config
    setWorkerConfig({
      defaultBadgeUrl,
      defaultIconUrl,
    });

    const store = await buildStore(persistedStore);

    setInitialParameters({ isNewRelease, lastRoute: lastSession.route, store });
  };

  React.useEffect(() => {
    firstSteps();
  }, []);

  if (typeof initialParameters.store === 'undefined') {
    return null;
  }

  return <>{children(initialParameters as ChildrenProps)}</>;
};

export default AppInit;
