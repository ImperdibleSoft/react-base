// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { serverConfiguration, clientConfiguration } from 'universal-webpack';
import webpack from 'webpack';

import { manifestPlugin, universalSettings } from './base.config';
import {
  serverConfig as devServerConfig,
  clientConfig as devClientConfig,
  swConfig as devSwConfig,
} from './dev.config';

const serverConfig = serverConfiguration(
  {
    ...devServerConfig,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('pre'),
      }),
    ],
  },
  universalSettings
);

const clientConfig = clientConfiguration(
  {
    ...devClientConfig,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('pre'),
        'process.env.BROWSER': JSON.stringify('true'),
      }),

      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),

      manifestPlugin,
    ],
  },
  universalSettings
);

const swConfig: webpack.Configuration = {
  ...devSwConfig,

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('pre'),
    }),
  ],
};

const configs = [serverConfig, clientConfig, swConfig];

export default configs;
