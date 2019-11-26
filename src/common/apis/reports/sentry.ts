import { init, setTags, setUser, captureException, setContext } from '@sentry/browser';
import { isProduction, isPre } from '../../utils/platforms';
import { SENTRY_URL } from '../../constants/branding';
import { SentryInitParameters, User, Severity } from './sentry.types';

const packageJson = require('../../../../package.json');
const appVersion: string = packageJson.version;

const env = process.env.NODE_ENV;
const shouldReport = isProduction() || isPre();
let hasBeenInit = false;
let sentryInitialization: Promise<unknown>;

const sentryDefaultConf = {
  url: SENTRY_URL,
};

/**
 * Collection of methods to interact with Sentry
 */
const sentryApi = {
  /**
   * Initialize Sentry API
   */
  init: ({
    url = SENTRY_URL,
    environment = env,
    release = appVersion,
    tags,
  }: SentryInitParameters = sentryDefaultConf) =>
    new Promise(resolve => {
      if (shouldReport) {
        hasBeenInit = true;

        init({
          dsn: url,
          environment,
          release,
        });

        if (tags) {
          setTags(tags);
        }

        setContext('logger', {});
      }

      resolve();
    }),

  /**
   * Setup user data, so Sentry can add it to errors
   */
  setUser: (user?: User) =>
    new Promise(resolve => {
      if (hasBeenInit) {
        if (user) {
          setUser({
            id: String(user.id),
            email: user.email,
            username: user.fullName,
          });
        } else {
          setUser(null);
        }
      }

      resolve();
    }),

  /**
   * Send a custom log to Sentry
   */
  report: (level: Severity, ...args: any[]) =>
    new Promise(resolve => {
      if (!sentryInitialization && !hasBeenInit) {
        sentryInitialization = sentryApi.init({ url: SENTRY_URL, tags: { scenario: 'sw' } });
      }

      switch (level) {
        case Severity.Error:
        case Severity.Critical:
        case Severity.Fatal:
          captureException(new Error(JSON.stringify(args)));
          break;

        default:
      }

      resolve();
    }),
};

export default sentryApi;
