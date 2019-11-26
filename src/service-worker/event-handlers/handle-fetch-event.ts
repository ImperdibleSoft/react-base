import { log } from '../../common/utils/logger';

import { BASE_URL } from '../../common/constants/apiRoutes';
import { APP_WEB } from '../../common/constants/branding';
import { cacheOnDemand } from '../../common/constants/features';
import { cacheName } from '../constants';

const handler = async (event: any) => {
  const requestUrl = new URL(event.request.url);
  const cacheFilter = `^${APP_WEB.replace('https', 'https?').replace('www', '(.+)')}/(.+)`;

  log('New request', { cacheFilter, requestUrl });
  if (
    // Cache is not enabled
    !cacheOnDemand ||
    // Chrome extension script
    requestUrl.protocol.indexOf('chrome-extension') >= 0 ||
    // Not a ManApp resource
    new RegExp(cacheFilter).test(requestUrl.href) === false
  ) {
    log('File is not going to be cached', requestUrl);
    return await fetch(event.request);
  }

  const cachedFile = await caches.match(event.request);
  if (cachedFile) {
    log('Serving cached file', cachedFile);
    return cachedFile;
  }

  log('No cached request');
  const response = await fetch(event.request);

  // Making API requests
  if (requestUrl.href.indexOf(BASE_URL) >= 0) {
    log('Request to API');

    // Assets requests
  } else {
    log('Request a file');
    log('Opening caches');
    const cache = await caches.open(cacheName);

    const responseToCache = response.clone();
    log('Storing requested file in cache', responseToCache);

    cache.put(requestUrl.toString(), responseToCache);
  }

  return response;
};

/**
 * TS TODO: Find RequestEvent or ExtendableEvent definition
 */
const handleFetchEvent = (event: any) => {
  event.respondWith(handler(event));
};

export default handleFetchEvent;
