import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Container } from '@material-ui/core';
// import { darken, makeStyles } from '@material-ui/core/styles';
import { darken, makeStyles } from '@material-ui/core';

/**
 * style priority
 * The sooner, the stronger
 * 1 inline
 * 2 classNames
 * 3 makeStyles(mui)
 * 4 css(emotion)
 */

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

const cssEmotion = css`
  background-color: blue;
  /* background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%); */
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;
// console.info(cssEmotion);
// console.info(cssEmotion.styles);

const useStyles = makeStyles((theme) => {
  // console.info('@@@@', theme);
  return {
    root: {
      display: 'flex',
      flexFlow: 'row nowrap',
      background: 'blue',
    },
    veryGreen: {
      background: 'green',
    },
    veryYellow: {
      background: 'yellow',
    },
  };
});
const useStyles2 = makeStyles((theme) => ({
  outlinedSizeLarge: {
    fontSize: '1rem',
  },
  outlinedPrimary: {
    fontSize: '3rem',
  },
  // label: {
  // fontSize: '3rem',
  // },
}));

// We just assign them the Button's className attribute
export const EmotionTestButtons = () => {
  const theme = useTheme();
  const classes = useStyles();
  const classes2 = useStyles2();
  // console.info('classes', { ...classes2 });
  return (
    <Container>
      <Button variant='contained' color='primary'>
        Material-UI
      </Button>
      <Button
        css={css`
          /* background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%); */
          border-radius: 3px;
          border: 0;
          color: orange;
          height: 48px;
          padding: 0 30px;
          box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
        `}
      >
        emotion css(simple)
      </Button>
      <Button
        css={css`
          background: green;
        `}
      >
        emotion css(simple) + theme
      </Button>
      <Button
        css={css`
          background: blue;
          background-color: ${theme.palette.primary.main};
          color: #fff;
          box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
            0 1px 3px rgba(0, 0, 0, 0.08);
          padding: 4px 10px;
          font-size: 13px;
          &:hover {
            background-color: ${darken(theme.palette.primary.main, 0.2)};
            /* background: blue; */
          }
          ${theme.breakpoints.up('sm')} {
            background: yellow;
            font-size: 2rem;
            font-weight: bold;
            padding: 7px 14px;
          }
        `}
      >
        emotion css + theme (complex)
      </Button>

      <Button
        variant='outlined'
        color='primary'
        size='large'
        css={css`
          font-size: 5rem;
          background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
          border-radius: 3px;
          border: 0;
          color: white;
          height: 48px;
          padding: 0 30px;
          box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
        `}
      >
        complex
      </Button>
      <StyledButton>emotion styled</StyledButton>
    </Container>
  );
};
