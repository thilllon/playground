// https://material-ui.com/customization/typography/
import { createMuiTheme, darken } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
export const muiTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Noto Sans KR"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  props: {
    MuiTypography: {
      variantMapping: {
        // // ******************************
        // // default values
        // // ******************************
        // h1: 'h1',
        // h2: 'h2',
        // h3: 'h3',
        // h4: 'h4',
        // h5: 'h5',
        // h6: 'h6',
        // subtitle1: 'h6',
        // subtitle2: 'h6',
        // body1: 'p',
        // body2: 'p',
        // ******************************
        // custom values
        // ******************************
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h6',
        subtitle2: 'h6',
        body1: 'p',
        body2: 'span',
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
});
