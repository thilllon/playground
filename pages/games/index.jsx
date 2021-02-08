import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Snackbar,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Link,
  IconButton,
} from '@material-ui/core';
import {
  Mail as MailIcon,
  Menu as MenuIcon,
  MoveToInbox as MoveToInboxIcon,
  Movie as MovieIcon,
  Warning as WarningIcon,
  BrightnessLow as BrightnessLowIcon,
  RemoveRedEye as RemoveRedEyeIcon,
  Spa as SpaIcon,
  Home as HomeIcon,
  DirectionsRun as DirectionsRunIcon,
  Info as InfoIcon,
  Autorenew as AutorenewIcon,
} from '@material-ui/icons';

import { css } from '@emotion/react';
import { Alert } from '@material-ui/lab';
import {
  FileCopy as FileCopyIcon,
  FormatAlignJustify as FormatAlignJustifyIcon,
} from '@material-ui/icons';
import { ToolbarSpacer } from '@components/ToolbarSpacer';
import { MineBoard } from '@components/games/minesweeper/MineBoard';
import { shuffle } from '@utils/common';
import { menuData } from '@utils/menuData';

export default function Games() {
  const list = menuData.filter((elem) => elem.href.includes('/games'));

  return (
    <Container>
      {list.map((game, idx) => {
        return (
          <li key={'game__' + idx}>
            <a href={game.href}>{game.text}</a>
          </li>
        );
      })}
    </Container>
  );
}
