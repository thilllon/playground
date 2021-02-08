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

const hasElementInArray = (elem, arr) =>
  // array duplication check
  // when elem is an array
  arr.some((arrElem) => arrElem.every((e, idx) => e === elem[idx]));

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
  FAILURE: 2,
};

const strings = {
  GAME_ENDS: '게임이 종료되었습니다.',
};

const inputs = [
  {
    htmlId: 'input__rows',
    label: '행',
    name: 'rows',
    adornment: (
      <InputAdornment>
        <FormatAlignJustifyIcon />
      </InputAdornment>
    ),
    // placeholder: '1 이상 100 이하',
  },
  {
    name: 'cols',
    htmlId: 'input__cols',
    label: '열',
    adornment: (
      <InputAdornment
        css={css`
          transform: rotate(90deg);
        `}
      >
        <FormatAlignJustifyIcon />
      </InputAdornment>
    ),
    // placeholder: '1 이상 100 이하',
  },
  {
    name: 'mines',
    htmlId: 'input__mines',
    label: '지뢰 수',
    adornment: (
      <InputAdornment>
        <Brightness7Icon />
      </InputAdornment>
    ),
    // placeholder: '1 이상 100 이하',
  },
];

const titleId = 'minesweeper';
const title = 'Mine Sweeper';

const createAnswer = (rows, cols, mines) => {
  const mineIdx = shuffle(
    Array(rows * cols)
      .fill(0)
      .map((_, idx) => idx)
  ).slice(0, mines);

  const onlyMines = Array(rows * cols)
    .fill(null)
    .reduce((arr, _, idx) => {
      const val = mineIdx.includes(idx) ? types.MINE : types.VEILED;
      arr.push(idx % cols === 0 ? [val] : [...arr.pop(), val]);
      return arr;
    }, []);

  const answer = onlyMines.map((row, rowIdx) => {
    const tmprow = row.map((zone, colIdx) => {
      if (zone === types.MINE) {
        return types.MINE;
      } else {
        const ss = getCurrentZoneVal([rowIdx, colIdx], onlyMines);
        return ss;
      }
    });
    console.info(tmprow);
    return tmprow;
  });
  return answer;
};

const getConnectedSafeZones = ([row, col], answer, list = []) => {
  if (answer[row][col] !== 0) {
    return list;
  } else {
    // 주변 최대 8칸
    const adj = getAdjacentCoordList([row, col]);
    // 중복확인 로직
    if (!hasElementInArray([row, col], list)) {
      list.push([row, col]);
    }
    adj.forEach(([row, col]) => {
      list = getConnectedSafeZones([row, col], answer, list);
    });
    return list;
  }
};

const createBoard = (rows, cols) => {
  const board = [];
  const list = Array(rows * cols).fill(types.VEILED);
  while (list.length) {
    board.push(list.splice(0, cols));
  }
  return board;
};

const getCurrentZoneVal = ([row, col], answer) => {
  return getAdjacentCoordList([row, col], answer).reduce(
    (sum, [row, col], idx) => sum + (answer[row][col] === -1 ? 1 : 0),
    0
  );
};

const getAdjacentCoordList = ([row, col], board) => {
  const list = [];
  const maxRow = board.length;
  const maxCol = board[0].length;
  for (let i = Math.max(row - 1, 0); i < Math.min(row + 2, maxRow); i++) {
    for (let j = Math.max(col - 1, 0); j < Math.min(col + 2, maxCol); j++) {
      list.push([i, j]);
    }
  }
  // console.info(list);
  return list;
};

// ******************************
// ******************************
const initialGameState = {
  status: false,
};
const initialAlertOptions = {
  show: false,
  message: '',
  severity: 'success',
};
const initialUserInput = {
  rows: 14,
  cols: 17,
  mines: 8,
};

// ******************************
// ******************************

export default function MineSweeper() {
  const [board, setBoard] = useState();
  const [answer, setAnswer] = useState();
  const [showAnswer, setShowAnswer] = useState(true);
  const [userInputs, setUserInputs] = useState(initialUserInput);
  const [gameState, setGameState] = useState(initialGameState);
  const [alertOptions, setAlertOptions] = useState(initialAlertOptions);

  useHotkeys('ctrl+alt+k', () => setShowAnswer((showAnswer) => !showAnswer));

  useEffect(() => {
    const { rows, cols, mines } = userInputs;
    onClickNewGame(rows, cols, mines)();
  }, []);

  const onClickNewGame = (rows, cols, mines) => () => {
    setBoard(createBoard(rows, cols));
    setAnswer(createAnswer(rows, cols, mines));
    // setShowAnswer(false);
    // setUserInputs
    setGameState(initialGameState);
    setAlertOptions(initialAlertOptions);
  };

  const makeOnClick = (row, col) => (ev) => {
    console.info('onClick', ev.buttons, ev.button, ev.detail, ev.eventPhase);
    if (gameState.status) {
      return;
    }
    if (ev.buttons === 0 && ev.button === 0) {
      const v = board[row][col];
      if (v === types.VEILED) {
        if (answer[row][col] === types.MINE) {
          board[row][col] = types.MINE;
          setBoard([...board]);
          setShowAnswer(true);
          setGameState({
            ...gameState,
            status: STATUS.FAILURE,
          });
          setAlertOptions({
            show: true,
            message: strings.GAME_ENDS,
            severity: 'error',
          });
          return;
        } else {
          const safeZones = getConnectedSafeZones([row, col], answer);
          console.info(safeZones);
          // board[row][col] = types.SAFE;
          board[row][col] = answer[row][col];
          setBoard([...board]);
          return;
        }
        // ******************************
        // ******************************
        // ******************************
        // ******************************
        // ******************************
        // ******************************
        // ******************************
        // ******************************
        // ******************************
        // const ans = answer[row][col];
        // board[row][col] = ans;
        // setBoard([...board]);
        // if (ans === types.MINE) {
        //   // setGameState({ ...gameState, status: 1 });
        // }
      } else {
        // pass
      }
    } else {
      //composite
    }
  };

  const makeOnContextMenu = (row, col) => (ev, ...args) => {
    // lrlr: up click / up con
    // lrrl: up con / up (click)
    // rllr: up click / up con
    // rlrl: up con / up (click)
    // console.info(ev);
    console.info(
      'onContextMenu',
      ev.buttons,
      ev.button,
      ev.detail,
      ev.eventPhase
    );

    ev.preventDefault();
    if (ev.buttons === 0 && ev.button === 2) {
      //
      if (gameState.status) {
        return false;
      }
      // const v = ev.currentTarget.value;
      const v = board[row][col];
      if (v === types.VEILED) {
        board[row][col] = types.SUSPICIOUS;
        setBoard([...board]);
      } else if (v === types.SUSPICIOUS) {
        board[row][col] = types.UNDETERMINED;
        setBoard([...board]);
      } else if (v === types.UNDETERMINED) {
        board[row][col] = types.VEILED;
        setBoard([...board]);
      } else {
        // pass
      }
    } else {
      // composite
    }
  };

  const makeOnAuxClick = (row, col) => (ev) => {
    console.info('onAuxClick');
    // const v = ev.currentTarget.value;

    // if (v === 0) {
    //   // 인접칸에 물음표가 없고, 지뢰플래그 수가 칸 값과 같으면
    //   // 지뢰 플래그가 정확히 지뢰에 있는지 확인
    //   const list = getAdjacentCoordList([row, col], board);
    //   const actualMines = list.filter(([row, col]) => {
    //     answer[row][col] === types.MINE;
    //   });
    // } else {
    //   // pass
    // }
  };

  const onChangeUserInput = ({ target: { name, value } }) => {
    setUserInputs({ ...userInputs, [name]: value });
  };

  const onClose = () => {
    setAlertOptions({ ...alertOptions, show: false });
  };

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
      <Box mt={1} mb={1}>
        <Button size='large' onClick={onClickNewGame(8, 8, 5)}>
          새 게임(초급)
        </Button>
        <Button size='large' onClick={onClickNewGame(12, 20, 20)}>
          새 게임(중급)
        </Button>
        <Button size='large' onClick={onClickNewGame(18, 30, 40)}>
          새 게임(고급)
        </Button>
      </Box>
      <Box mt={1} mb={1}>
        <Button
          size='large'
          onClick={onClickNewGame(
            userInputs.rows,
            userInputs.cols,
            userInputs.mines
          )}
        >
          새 게임(사용자 정의)
        </Button>
        {inputs.map(({ name, htmlId, label, adornment, placeholder }) => {
          return (
            <FormControl variant='outlined' key={htmlId}>
              <InputLabel htmlFor={htmlId}>{label}</InputLabel>
              <OutlinedInput
                id={htmlId}
                name={name}
                value={userInputs[name]}
                onChange={onChangeUserInput}
                label={label}
                startAdornment={adornment}
                type='number'
                placeholder={placeholder ?? ''}
                // maxValue={5}
              />
            </FormControl>
          );
        })}
      </Box>
      <Box>
        <Typography>시간 타임 아웃</Typography>
      </Box>
      {board && board.length > 0 && (
        <Paper
          css={css`
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
          `}
        >
          <MineBoard
            list={board}
            onClick={makeOnClick}
            onContextMenu={makeOnContextMenu}
            onAuxClick={makeOnAuxClick}
          />
          {showAnswer && (
            <MineBoard
              list={answer}
              onClick={makeOnClick}
              onContextMenu={makeOnContextMenu}
              onAuxClick={makeOnAuxClick}
              disabled={true}
            />
          )}
        </Paper>
      )}
      <SnackBarX
        onClose={onClose}
        open={alertOptions.show}
        message={alertOptions.message}
        closeText={strings.CLOSE}
        severity={alertOptions.severity}
      />
    </Container>
  );
}
