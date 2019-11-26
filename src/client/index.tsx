import 'core-js';
import 'pwacompat';
import * as React from 'react';
import * as ReactDom from 'react-dom';

import ReactApp from '..';

ReactDom.render(<ReactApp />, document.querySelector('#app-wrapper'));
