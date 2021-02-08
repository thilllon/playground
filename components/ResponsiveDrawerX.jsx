import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, CssBaseline } from '@material-ui/core';
import { css, useTheme } from '@emotion/react';
import { AppBarX } from '@components/AppBarX';
import { ToolbarSpacer } from '@components/ToolbarSpacer';
import { NavX } from '@components/NavX';

// How to add a link to a List in material-ui 1.0?
// https://stackoverflow.com/questions/47206639/how-to-add-a-link-to-a-list-in-material-ui-1-0/48252439#48252439

export const ResponsiveDrawerX = ({ window, children }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box display='flex'>
      <CssBaseline />
      <AppBarX onClickDrawerToggle={handleDrawerToggle} />
      <NavX window={window} open={mobileOpen} onClose={handleDrawerToggle} />
      <main
        css={css`
          flex-grow: 1;
          padding: ${theme.spacing(3, 3)};
          ${theme.breakpoints.down('md')} {
            padding: 0;
          }
        `}
      >
        <ToolbarSpacer />
        {children}
      </main>
    </Box>
  );
};

ResponsiveDrawerX.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
