const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: 'src',
      },
    },
  ],
};
