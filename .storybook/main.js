const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register'
  ],
  // webpackFinal: async (config, { configType }) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader', 'css-loader', 'sass-loader'],
  //     include: path.resolve(__dirname, '../'),
  //   });

  //   // config.module.resolve = {
  //   //   alias: {
  //   //     '@': path.resolve(__dirname, '../src/'),
  //   //     '@atoms': path.resolve(__dirname, '../src/components/atoms')
  //   //   }
  //   // };

  //   return config;
  // },
  // webpackFinal: (config) => {
  //   return { ...config, module: { ...config.module, rules: custom.module.rules } };
  // },
};
