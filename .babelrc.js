console.info('## .babelrc');
const isProduction = process.env.NODE_ENV === 'production';
const env = {};

module.exports = {
  comments: false,
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    'transform-remove-debugger',
    [
      'transform-remove-console',
      { exclude: isProduction ? [] : ['error', 'warn', 'info', 'log'] },
    ],
    [
      '@emotion',
      {
        // sourceMap sets true by default but source maps are dead code eliminated in production
        sourceMap: false,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: isProduction,
      },
    ],
    ['transform-define', env], // replace code: "process.env.*"
  ],
};
