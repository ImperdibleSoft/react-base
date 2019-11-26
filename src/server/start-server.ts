import { server } from 'universal-webpack';
import { serverConfig } from '../../webpack/dev.config';

server(serverConfig, { server: { input: './src/server/index.tsx', output: './dist/server.js' } });
