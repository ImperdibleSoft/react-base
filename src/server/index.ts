import express from 'express';
import path from 'path';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { log } from '../common/utils/logger';

import ReactApp from '..';
import buildHtml from './html';

const startServer = (parameters: any) => {
  const server = express();

  server.set('port', 8080);

  const statics = path.resolve(__dirname, '../dist');

  server.use(express.static(statics));

  server.use('/', (req, res) => {
    const body = renderToString(React.createElement(ReactApp));
    const html = buildHtml(body, parameters.chunks());

    res.send(html);
  });

  server.listen(server.get('port'), () => {
    log(`Listening at ${server.get('port')}`);
  });
};

export default startServer;
