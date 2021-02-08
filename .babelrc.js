// Base URL is going to be different
// On github pages, base url is to be <<USERNAME>>.github.io/<<REPO_NAME>>
// At localhost, localhost:<<PORT>>

console.info('## .babelrc');

const isProduction = process.env.NODE_ENV === 'production';

// if REPO_NAME is thilllon.github.io, then backend url should be '', empty string

const env = {
  'process.env.BACKEND_URL': isProduction ? `/${process.env.REPO_NAME}` : '',
};

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
    // 'transform-remove-debugger',
    [
      'transform-remove-console',
      { exclude: isProduction ? [] : ['error', 'warn', 'info', 'log'] },
    ],
    [
      '@emotion',
      {
        // sourceMap is on by default but source maps are dead code eliminated in production
        sourceMap: false,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        // cssPropOptimization: true,
        cssPropOptimization: false,
      },
    ],
    [
      'transform-define', // replace codes; suppose process.env.REPO_NAME is is "/playground", then all the code "process.env.REPO_NAME" are replaced by "/playground"
      env,
    ],
  ],
};
