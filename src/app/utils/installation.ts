import uuid from 'uuid';
import { getCookie, setCookie } from '../../common/utils/cookies';

import { INSTALLATION_ID } from '../../common/constants/cookies';

/**
 * Get Installation ID
 */
const getInstallationId = () => getCookie(INSTALLATION_ID);

/**
 * If no installation ID available, create it
 */
const setInstallationId = () => {
  if (!getInstallationId()) {
    const value = uuid();
    setCookie(INSTALLATION_ID, value);
  }
};

export interface InstallationData {
  installationId: string;
  userAgent: string;
}

/**
 * Get installation data:
 * - Installation id
 * - User Agent
 */
export const getInstallationData = () => {
  const data: InstallationData = {
    installationId: getInstallationId(),
    userAgent: navigator.userAgent,
  };

  return data;
};

/**
 * Set installation data:
 * - Installation id
 */
export const setInstallationData = () => {
  setInstallationId();
};
