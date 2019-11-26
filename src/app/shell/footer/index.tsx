import * as React from 'react';

import View from './components/view';

const packageJson = require('../../../../package.json');
const APP_VERSION = packageJson.version;

const Footer: React.FC = () => <View appVersion={APP_VERSION} fixedSidebar />;

export default Footer;
