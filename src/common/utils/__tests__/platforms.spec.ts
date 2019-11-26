import setupEnv from '../setup-test-env';

import { isProduction, isPre, isDev, isElectron, isInstalledPWA, isAnyApp, isAndroid, isIOS } from '../platforms';

beforeEach(() => {
  setupEnv();
});

afterEach(() => {
  // @ts-ignore
  delete global.self;
});

describe('Platform utils', () => {
  describe('isProduction', () => {
    it('should return false', () => {
      const output = isProduction();

      expect(output).toBe(false);
    });
  });

  describe('isPre', () => {
    it('should return false', () => {
      const output = isPre();

      expect(output).toBe(false);
    });
  });

  describe('isDev', () => {
    it('should return false', () => {
      const output = isDev();

      expect(output).toBe(false);
    });
  });

  describe('isElectron', () => {
    it('should return false', () => {
      const output = isElectron();

      expect(output).toBe(false);
    });
  });

  describe('isInstalledPWA', () => {
    it('should return false', () => {
      const output = isInstalledPWA();

      expect(output).toBe(false);
    });
  });

  describe('isAnyApp', () => {
    it('should return false', () => {
      const output = isAnyApp();

      expect(output).toBe(false);
    });
  });

  describe('isAndroid', () => {
    it('should return false', () => {
      const output = isAndroid();

      expect(output).toBe(false);
    });
  });

  describe('isIOS', () => {
    it('should return false', () => {
      const output = isIOS();

      expect(output).toBe(false);
    });
  });
});
