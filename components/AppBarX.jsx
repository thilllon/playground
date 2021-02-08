import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  Toolbar,
  Hidden,
  Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { css } from '@emotion/react';
import Link from 'next/link';
import { drawerWidth } from '@utils/config';

const title = 'Playground';

const buttonStyle = (theme) => css`
  margin-right: ${theme.spacing(2, 2)};
  background: ${theme.palette.primary.main};
  ${theme.breakpoints.up('sm')} {
    /* display: none; */
  }
`;

const headerStyle = (theme) => css`
  ${theme.breakpoints.down('md')} {
    background: ${theme.palette.primary.main};
  }
  ${theme.breakpoints.up('sm')} {
    width: calc(100% - ${drawerWidth}px);
    margin-left: ${drawerWidth};
  }
  flex-flow: row wrap;
  /* justify-content: flex-end; */
`;

export const AppBarX = ({ onClickDrawerToggle }) => {
  return (
    <AppBar position='fixed' css={headerStyle}>
      <Toolbar>
        {/* ****************************** */}
        <Hidden smUp implementation='css'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={onClickDrawerToggle}
            css={buttonStyle}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography
          css={css`
            margin-right: auto;
          `}
          variant='h6'
          // noWrap
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

AppBarX.propTypes = {
  // children
};
