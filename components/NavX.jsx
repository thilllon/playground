import React, { useState } from 'react';
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Mail as MailIcon,
  Menu as MenuIcon,
  MoveToInbox as MoveToInboxIcon,
} from '@material-ui/icons';
import { css, useTheme } from '@emotion/react';
import { drawerWidth } from '@utils/config';
import { menuData } from '@utils/menuData';
import { ToolbarSpacer } from '@components/ToolbarSpacer';

const showIcon = true;
export const NavX = ({ window, open, onClose }) => {
  // const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      {/* <ToolbarSpacer /> */}
      {/* <Divider /> */}
      <List>
        {menuData.map(({ text, href, icon }, idx) => (
          <ListItem
            button
            component={Link}
            key={`menu__${idx}`}
            data-href={href}
            href={href}
          >
            {showIcon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider /> */}
    </div>
  );

  return (
    <nav
      css={css`
        ${theme.breakpoints.up('sm')} {
          width: ${drawerWidth}px;
          flex-shrink: 0;
        }
      `}
      aria-label='mailbox folders'
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation='css'>
        <Drawer
          container={container}
          variant='temporary'
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={open}
          onClose={onClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          css={css`
            .MuiDrawer-paper {
              width: ${drawerWidth}px;
            }
          `}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation='css'>
        <Drawer
          css={css`
            .MuiDrawer-paper {
              width: ${drawerWidth}px;
            }
          `}
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
