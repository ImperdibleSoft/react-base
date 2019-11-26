import webpack from 'webpack';
import baseConfig from './base.config';

const electronConfig: webpack.Configuration = {
  ...baseConfig,

  output: {
    ...baseConfig.output,

    publicPath: './',
  },
};

export default electronConfig;
