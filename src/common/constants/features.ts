import { isProduction, isPre } from '../utils/platforms';

export const restoreLastRoute = false;
export const cacheOnDemand = isProduction() || isPre();
export const persistStore = true;
export const pushNotifications = true;

export const paginationSize = 24;

export const notificationCloseTimeout = 0;

export const pollingFrequency = 0;
