console.info('## next.config');

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
// https://nextjs.org/docs/api-reference/next.config.js/introduction

// const withImages = require('next-images');
const isProduction = process.env.NODE_ENV === 'production';
const isLocal = process.env.LOCATION === 'LOCAL';
const assetPrefix = isProduction ? `/${process.env.REPO_NAME}/` : '';

console.info('isProduction', isProduction);
console.info('assetPrefix', assetPrefix);

module.exports = {
  productionBrowserSourceMaps: true,
  compress: isProduction,
  productionBrowserSourceMaps: isProduction,
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
  // pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  assetPrefix,
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    if (process.env.NODE_ENV === 'development') {
      // console.log('webpack', config.module.rules, dev);
    }
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    return config; // ⚠💥 It is important that return the modified config
  },
  images: {
    loader: 'imgix',
    path: 'https://example.com/myaccount/',
  },
  // webpackDevMiddleware: (config) => {
  //   // Perform customizations to webpack dev middleware config
  //   // console.log('webpackDevMiddleware');
  //   // console.log(config);
  //   // Important: return the modified config
  //   return config
  // },
  // // ******************************
  // // when <<next-images>> module used:
  // fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
  // inlineImageLimit: 16384,
  // exclude: path.resolve(__dirname, 'src/assets/svg'),
  // esModule: true,
  // // ******************************
};
