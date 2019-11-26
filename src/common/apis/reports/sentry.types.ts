export { User, Severity } from '@sentry/types';

interface SentryTags {
  [id: string]: string;
}

export interface SentryInitParameters {
  url?: string;
  environment?: string;
  release?: string;
  tags?: SentryTags;
  logger?: string;
}
