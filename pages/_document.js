// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { muiTheme } from '@styles/mui';

const description = 'devlog';
const keywords = [
  'blog',
  'react',
  'materialui',
  'webpack',
  'css',
  'javascript',
];
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='_' content='****************' />
          <meta charSet='utf-8' />
          <meta name='theme-color' content={muiTheme.palette.primary.main} />
          <meta name='description' content={description} />
          <meta name='keywords' content={keywords.join(',')} />
          {/* <link
            rel='stylesheet'
            // href='https://fonts.googleapis.com/earlyaccess/notosanskr.css'
            // href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
            href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap'
          /> */}
          <meta name='__' content='****************' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
// // `getInitialProps` belongs to `_document` (instead of `_app`),
// // it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const muiStyleSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        muiStyleSheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key='styles'>
        {initialProps.styles}
        {muiStyleSheets.getStyleElement()}
      </React.Fragment>,
    ],
    // ******************************
    // Code below is an official method that Next.js provided.
    // ******************************

    // // Official Next.js method:
    // Styles fragment is rendered after the app and page rendering finish.
    // styles: [
    //   ...React.Children.toArray(initialProps.styles),
    //   sheets.getStyleElement(),
    // ],
  };
};

export default MyDocument;