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
  Paper,
} from '@material-ui/core';
import { css } from '@emotion/react';
import {
  AcUnit as AcUnitIcon,
  Brightness7 as Brightness7Icon,
  FormatAlignJustify as FormatAlignJustifyIcon,
} from '@material-ui/icons';
import { ToolbarSpacer } from '@components/ToolbarSpacer';
import { MineBoard } from '@components/games/minesweeper/MineBoard';
import { shuffle } from '@utils/common';
import { SnackBarX } from '@components/SnackbarX';
import { useHotkeys } from 'react-hotkeys-hook';

const types = {
  MINE: -1,
  SAFE: 0,
  VEILED: 10,
  SUSPICIOUS: 11,
  UNDETERMINED: 12,
};

const STATUS = {
  ONGOING: 0,
  SUCCESS: 1,
  FAILURE: 1,
};

const strings = {
  GAME_ENDS: '게임이 종료되었습니다.',
};

const titleId = 'minesweeper';
const title = 'Mine Sweeper';

export default function RushHour() {
  return (
    <Container maxWidth='lg'>
      <ToolbarSpacer id={titleId} />
      <Typography
        variant='h6'
        component={Link}
        href={`#${titleId}`}
        gutterBottom
      >
        {title}
      </Typography>
      <SnackBarX
      // onClose={onClose}
      // open={alertOptions.show}
      // message={alertOptions.message}
      // closeText={strings.CLOSE}
      // severity={alertOptions.severity}
      />
    </Container>
  );
}
