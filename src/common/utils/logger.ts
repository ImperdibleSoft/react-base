/* eslint-disable no-console */
import { isProduction } from './platforms';
import sentryApi from '../apis/reports/sentry';
import { Severity } from '@sentry/types';

const shouldDebug = !isProduction();
const prefix = 'man-app.com';

export const info = (...args: any[]) => {
  console.info(`[${prefix}]: `, ...args);
};

export const log = (...args: any[]) => {
  if (shouldDebug) console.log(`[${prefix}]: `, ...args);
};

export const warn = (...args: any[]) => {
  if (shouldDebug) console.warn(`[${prefix}]: `, ...args);
  sentryApi.report(Severity.Warning, ...args);
};

export const error = (...args: any[]) => {
  if (shouldDebug) console.error(`[${prefix}]: `, ...args);
  sentryApi.report(Severity.Error, ...args);
};
