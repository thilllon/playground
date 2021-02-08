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
import { backendUrl, drawerWidth } from '@utils/config';
import { menuData } from '@utils/menuData';

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
//  {false && (
//           <Hidden smDown implementation='css'>
//             {menuData.map(({ text, href }, idx) => {
//               return (
//                 <Button
//                   key={`menu__${idx}`}
//                   title={text}
//                   css={css`
//                     margin-left: 1rem;
//                     * {
//                       /* color: inherit; */
//                       color: white;
//                       text-decoration: none;
//                       text-transform: none;
//                       font-size: 1rem;
//                       /* font-weight: bold; */
//                     }
//                   `}
//                 >
//                   <Link href={href} as={`${backendUrl}${href}`}>
//                     {text}
//                   </Link>
//                 </Button>
//               );
//             })}
//           </Hidden>
//         )}
