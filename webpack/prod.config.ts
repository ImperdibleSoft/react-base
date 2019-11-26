// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { serverConfiguration, clientConfiguration } from 'universal-webpack';
import webpack from 'webpack';

import { manifestPlugin, uglifyPlugin, universalSettings } from './base.config';
import {
  serverConfig as devServerConfig,
  clientConfig as devClientConfig,
  swConfig as devSwConfig,
} from './dev.config';

const serverConfig = serverConfiguration(
  {
    ...devServerConfig,

    mode: 'production',

    devtool: false,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],

    optimization: {
      minimizer: [uglifyPlugin],
    },
  },
  universalSettings
);

const clientConfig = clientConfiguration(
  {
    ...devClientConfig,

    mode: 'production',

    devtool: false,

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.BROWSER': JSON.stringify('true'),
      }),

      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),

      manifestPlugin,
    ],

    optimization: {
      minimizer: [uglifyPlugin],
    },
  },
  universalSettings
);

const swConfig: webpack.Configuration = {
  ...devSwConfig,

  mode: 'production',

  devtool: false,

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],

  optimization: {
    minimizer: [uglifyPlugin],
  },
};

const configs = [serverConfig, clientConfig, swConfig];

export default configs;
