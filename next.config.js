const path = require('path');
// const withImages = require('next-images');

console.info('## next.config');

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
// https://nextjs.org/docs/api-reference/next.config.js/introduction

const isProduction = process.env.NODE_ENV === 'production';
const subdirectory = process.env.SUBDIRECTORY ?? '';
const assetPrefix = subdirectory ? `/${subdirectory}/` : '';
const imageLoader = 'imgix';
const imagePath = 'https://example.com/myaccount/';

console.info(process.env.SUBDIRECTORY);
console.info(process.env.SUBDIRECTORY);
console.info(process.env.SUBDIRECTORY);
console.info(process.env.SUBDIRECTORY);
console.info(process.env.SUBDIRECTORY);
console.info(typeof process.env.SUBDIRECTORY);
console.info(typeof process.env.SUBDIRECTORY);
console.info(typeof process.env.SUBDIRECTORY);
console.info(typeof process.env.SUBDIRECTORY);
console.info(typeof process.env.SUBDIRECTORY);
console.info(typeof process.env.SUBDIRECTORY);
console.info('isProduction', isProduction);
console.info('assetPrefix', assetPrefix);

module.exports = {
  // basePath: '.',
  // async headers() {
  //   return [
  //     { source: '/about', headers: [{ key: 'x-thilllon', value: 'thilllon' }] },
  //   ];
  // },
  poweredByHeader: false,
  generateEtags: false,
  // pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  compress: isProduction,
  productionBrowserSourceMaps: isProduction,
  assetPrefix,
  // trailingSlash: false, // end of url; "false" by default
  images: { loader: imageLoader, path: imagePath },
  exportPathMap: async (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) => {
    console.info(defaultPathMap);
    return defaultPathMap;
    // const paths = {
    //   '/': { page: '/' },
    //   '/about': { page: '/about' },
    //   '/kohmasutra': { page: '/kohmasutra' },
    //   // '/feelgood': { page: '/kohmasutra/random' },
    //   // '/feel': { page: '/kohmasutra' },
    //   // ******************************
    //   '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
    //   '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
    //   '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    // };

    // [...new Array(100)].forEach((_, idx) => {
    //   paths[`/kohmasutra/cards/${idx + 1}`] = {
    //     page: `/kohmasutra/cards/[postId]`,
    //     query: { postId: String(idx + 1) },
    //   };
    // });
    // console.info(paths);
    // return paths;
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Perform customizations to webpack config
    if (!isProduction) {
      // console.log('webpack', config.module.rules, dev);
    }
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });
    const rules = [{ test: /\.test.{js,ts,jsx}$/, loader: 'ignore-loader' }];
    config.module.rules = config.module.rules.concat(rules);
    // ******************************
    // ******************************
    const plugins = [
      new webpack.IgnorePlugin(/\/__tests__\//),
      new webpack.IgnorePlugin(/\/.scripts\//),
    ];
    config.plugins = config.plugins.concat(plugins);

    return config; // ⚠💥 It is important that it returns the modified config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config;
  },
  // // ******************************
  // // when <<next-images>> module used:
  // fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  // inlineImageLimit: 16384,
  // exclude: path.resolve(__dirname, 'src/assets/svg'),
  // esModule: true,
  // // ******************************
};
