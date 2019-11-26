import * as ReactGA from 'react-ga';
import { log } from '../../utils/logger';
import { isProduction } from '../../utils/platforms';
import {
  TrackingEvent,
  SmartEvent,
  AnalyticsInitParameter,
  CustomDimension,
  AnalyticsUser,
  TimeTracking,
} from './analytics.types';

const isDebug = false;
const isVerbose = true;
const isTracking = isDebug || isProduction();
let initialization: number;

/**
 * This "middleware" checks if event should be sent to Analytics and if that
 * should be reported through devTools
 */
const dispatch = (track: Function, report: Function) => {
  if (isTracking) {
    track();
  }

  if (isVerbose && !isTracking) {
    report();
  }
};

/**
 * Collection of methods to interact with Google Analytics
 */
const analyticsApi = {
  init: ({ tag }: AnalyticsInitParameter) =>
    new Promise(resolve => {
      initialization = new Date().getTime();

      dispatch(
        () => {
          ReactGA.initialize(tag, {
            debug: isDebug,
          });
        },
        () => {
          log(`GA: Analytics <${tag}> has been initialized`);
        }
      );
      resolve();
    }),

  getInitialTime: () => initialization,

  /**
   * Set the user that is navigating
   */
  setUser: (user: AnalyticsUser | void) => analyticsApi.set({ key: 'userId', value: user ? user.id : undefined }),

  /**
   * Creates a custom dimension in GA
   */
  set: ({ key, value }: CustomDimension) =>
    new Promise(resolve => {
      dispatch(
        () => {
          ReactGA.set({ [key]: value });
        },
        () => {
          log(`GA: Custom dimension <${key}> has been setup`);
        }
      );
      resolve();
    }),

  /**
   * Log a navigation
   */
  logPageView: (pathname: string) =>
    new Promise(resolve => {
      dispatch(
        () => {
          ReactGA.pageview(pathname);
        },
        () => {
          log(`GA: Page navigation to <${pathname}> has been logged`);
        }
      );
      resolve();
    }),

  /**
   * This function will create a tracking event based on parameters and track it
   */
  logEvent: ({ category, action = 'Click', label, value }: TrackingEvent) =>
    new Promise(resolve => {
      const event = {
        category,
        action,
        label,
        value,
      };

      dispatch(
        () => {
          ReactGA.event(event);
        },
        () => {
          log(`GA: <${event.action}> has been logged`, event);
        }
      );
      resolve();
    }),

  /**
   * This function will infer the hierarchy of the element that was used,
   * create a tracking event, and track it
   *
   * TODO: Need to make this function smart
   */
  logSmartEvent: ({ category, action = 'Click', label, value }: SmartEvent) =>
    new Promise(resolve => {
      const event = {
        category,
        action,
        label,
        value,
      };

      dispatch(
        () => {
          ReactGA.event(event);
        },
        () => {
          log(`GA: <${event.action}> has been logged`, event);
        }
      );
      resolve();
    }),

  /**
   * Log time values
   */
  logTiming: ({ category, variable = '', label = '', value = 0 }: TimeTracking) =>
    new Promise(resolve => {
      const event = {
        category,
        variable,
        label,
        value,
      };

      dispatch(
        () => {
          ReactGA.timing(event);
        },
        () => {
          log(`GA: <${category}> has been logged`, event);
        }
      );
      resolve();
    }),
};

export default analyticsApi;
