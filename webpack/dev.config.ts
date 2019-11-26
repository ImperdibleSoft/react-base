import path from 'path';
import webpack from 'webpack';
import { clientConfiguration, serverConfiguration } from 'universal-webpack';
// @ts-ignore
import HtmlWebpackPlugin from 'html-webpack-plugin';
import baseConfig, {
  paths,
  regex,
  loaderPostCSS,
  loaderSass,
  loaderImages,
  manifestPlugin,
  universalSettings,
} from './base.config';

const rules = [
  // CSS
  {
    test: regex.css,
    include: [/node_modules/],
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      loaderPostCSS,
      loaderSass,
    ],
  },

  // Fonts
  {
    test: regex.fonts,
    include: paths.root,
    loader: 'file-loader',
    options: {
      name: '[path][name]_[hash].[ext]',
    },
  },

  // HTML
  {
    test: regex.html,
    include: paths.src,
    exclude: /node_modules/,
    loader: 'html-loader',
  },

  // Audio
  {
    test: regex.audio,
    include: paths.src,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash].[ext]',
        },
      },
    ],
  },

  // Images
  {
    test: regex.img,
    include: paths.src,
    exclude: /node_modules/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
      loaderImages,
    ],
  },

  // JSON
  {
    test: regex.json,
    include: paths.src,
    exclude: /node_modules/,
    loader: 'file-loader',
    options: {
      sourceMap: true,
    },
  },

  // @ts-ignore
  ...baseConfig.module.rules,
];

export const serverConfig = serverConfiguration(
  {
    ...baseConfig,

    mode: 'development',

    devtool: 'source-map',

    target: 'node',

    entry: path.resolve(paths.src, 'server/index.ts'),

    output: {
      path: paths.dist,
      filename: 'server.js',
      publicPath: '/',
    },

    module: {
      rules,
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('dev'),
      }),

      new webpack.HotModuleReplacementPlugin(),

      new webpack.NamedModulesPlugin(),
    ],
  },
  universalSettings
);

export const clientConfig = clientConfiguration(
  {
    ...serverConfig,

    target: 'web',

    entry: path.resolve(paths.src, 'client/index.tsx'),

    externals: undefined,

    output: {
      path: paths.dist,
      filename: '[name]-[hash].js',
      publicPath: '/',
    },

    module: {
      rules,
    },

    plugins: [
      // @ts-ignore
      ...serverConfig.plugins,

      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('dev'),
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

export const swConfig: webpack.Configuration = {
  ...serverConfig,

  target: 'webworker',

  entry: { sw: path.resolve(paths.src, 'sw.ts') },

  externals: undefined,

  output: {
    ...baseConfig.output,
    filename: 'sw.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev'),
    }),
  ],
};

const configs = [serverConfig, clientConfig, swConfig];

export default configs;
