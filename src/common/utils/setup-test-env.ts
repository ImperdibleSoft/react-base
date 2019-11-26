import 'core-js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});

const globalObject = {
  ...global,
  matchMedia: () => ({
    matches: false,
  }),
  atob: (s: string) => s,
  location: {
    protocol: 'https:',
  },
  navigator: {
    userAgent: 'test-browser',
  },
};

// @ts-ignore
global.window = globalObject;
// @ts-ignore
global.self = globalObject;
// @ts-ignore
window = globalObject;
// @ts-ignore
self = globalObject;

const setupEnv = () => {
  // @ts-ignore
  global.window = globalObject;
  // @ts-ignore
  global.self = globalObject;
  // @ts-ignore
  window = globalObject;
  // @ts-ignore
  self = globalObject;
};

export default setupEnv;
