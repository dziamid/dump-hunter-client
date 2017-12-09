module.exports = {
  components: 'src/components/**/index.tsx',
  ignore: [
    '**/*.test.(ts|tsx)',
  ],
  propsParser: require('react-docgen-typescript').withDefaultConfig('./tsconfig.json').parse,
  webpackConfig: require('./config/webpack.config.dev.js')
};