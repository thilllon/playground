import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { muiTheme } from '@styles/mui';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider as MuiStylesProvider } from '@material-ui/styles';
import {
  useTheme as useEmotionTheme,
  withTheme as withEmotionTheme,
  ThemeProvider as EmotionThemeProvider,
} from '@emotion/react';
import { ResponsiveDrawerX } from '@components/ResponsiveDrawerX';
import { backendUrl } from '@utils/config';

console.info('NODE_ENV:', process.env.NODE_ENV);
console.info('LOCATION:', process.env.LOCATION);

const title = 'Thilllon';

const viewportOptions = [
  'minimum-scale=1', // Use minimum-scale=1 to enable GPU rasterization
  'initial-scale=1',
  'width=device-width',
  // 'shrink-to-fit=no',
];

const MyApp = ({ Component, pageProps }) => {
  // console.log('## app pageProps', pageProps);

  useEffect(() => {
    // Remove the server-side injected CSS.
    // console.log('## useEffect app');
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  return (
    <>
      <Head>
        <meta name='a1' content='********************' />
        <link rel='shortcut icon' href={`${backendUrl}/favicon.ico`} />
        <title>{title}</title>
        <meta name='viewport' content={viewportOptions.join(',')} />
        <link
          rel='stylesheet'
          href={`https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@${fontWeights.join(
            ';'
          )}&display=swap`}
        />
        <meta name='a2' content='********************' />
      </Head>
      <MuiThemeProvider theme={muiTheme}>
        <MuiStylesProvider injectFirst>
          {/* To be able to access MUI theme from emotion props */}
          <EmotionThemeProvider theme={muiTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ResponsiveDrawerX>
              <Component {...pageProps} />
            </ResponsiveDrawerX>
          </EmotionThemeProvider>
        </MuiStylesProvider>
      </MuiThemeProvider>
    </>
  );
};

// MyApp.getInitialProps = async ({ Component, router, ctx }) => {
//   // console.warn(router);
//   let pageProps = {};

//   // // 실행하고자 하는 Component에 getInitialprops가 있으면 실행하여 props를 받아올 수 있다.
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   // console.warn('given props:', pageProps);
//   return { pageProps };
// };

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
