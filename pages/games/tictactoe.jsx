import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Button, Container, Typography, Link } from '@material-ui/core';
import { css } from '@emotion/react';
import { ToolbarSpacer } from '@components/ToolbarSpacer';
import { SnackBarX } from '@components/SnackbarX';
import { Board } from '@components/games/Board';
import { TurnHistoryList } from '@components/games/tictactoe/TurnHistoryList';

const titleId = 'tictactoe';
const boxIdPrefix = '__box__';

const strings = {
  CLOSE: `닫기`,
  YOU_HAVE_BEEN_PLACED_ALREADY: `본인이 놓은 곳입니다.`,
  OTHER_PLAYER_PLACED_ALREADY: `상대가 놓은 곳입니다.`,
  UNDO: `되돌리기`,
  RESTART: `재시작`,
  CURRENT_PLAYER: `현재 플레이어`,
  GAME_DRAWS: `게임이 무승부로 종료되었습니다.`,
  $PLAYER_WINS: ($) => `Player ${$}가 이겼습니다.`,
};

const STATUS = { ONGOING: 0, FINISHED: 1, DRAW: 2 };

const getStatusMessage = (status, playerId) => {
  return status === STATUS.DRAW ? strings.GAME_DRAWS : $PLAYER_WINS(playerId);
};

const initialTurnHistory = [
  // { playerId, row, col }
];
const initialChecked = [
  // store indices of checked zone
];

const initialValues = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const SIGNS = {
  // 1: 'O',
  // 2: 'X',
  1: '⭕',
  2: '❌',
};

const initialGameState = {
  status: STATUS.ONGOING,
  playerId: 1, // 1, 2
  sign: SIGNS[1], // O, X
};

const initialAlertOptions = {
  show: false,
  message: '',
  severity: 'success',
};

const getGameStatus = (board, sign) => {
  // check row
  let nrow;
  if (
    board.some((row, idx) => {
      const result = row.every((cell) => cell === sign);
      if (result) nrow = idx;
      return result;
    })
  ) {
    console.log(`Row ${nrow + 1} completed`);
    return STATUS.FINISHED;
  }

  // check column
  let ncol;
  if (
    Array(board.length)
      .fill(null)
      .map((_, idx) => idx)
      .some((idx) => {
        const result = board.every((row) => row[idx] === sign);
        if (result) ncol = idx;
        return result;
      })
  ) {
    console.log(`Column ${ncol + 1} completed`);
    return STATUS.FINISHED;
  }

  // check diagonal
  if (board.every((row, idx) => row[idx] === sign)) {
    console.log('Diagonal completed');
    return 1;
  }

  // check skew diagonal
  if (board.every((row, idx) => row[row.length - 1 - idx] === sign)) {
    console.log('Skew diagonal completed');
    return STATUS.FINISHED;
  }

  // all zones are asigned
  if (board.every((row) => row.every((zone) => zone !== null))) {
    console.log('Draw');
    return STATUS.DRAW;
  }

  return STATUS.ONGOING;
};

// ******************************
// ******************************

export default function TicTacToe() {
  const [turnHistory, setTurnHistory] = useState(initialTurnHistory);
  const [board, setBoard] = useState(initialValues);
  const [gameState, setGameState] = useState(initialGameState);
  const [checked, setChecked] = useState(initialChecked);
  const [alertOptions, setAlertOptions] = useState(initialAlertOptions);
  const boxes = useRef(null);

  const onClose = useCallback(
    (event, reason) => {
      // reason: click away, timeout
      // 간접 이벤트이므로 항상 박스 클릭 다음에 실행됨
      // 이벤트가 박스 클릭 이벤트면 전부 흘리기
      if (event?.path?.some((elem) => elem?.id?.startsWith(boxIdPrefix))) {
        return;
      }
      console.info(event, reason);
      setAlertOptions({ ...alertOptions, show: false });
    },
    [gameState.status, alertOptions, setAlertOptions]
  );

  const makeOnClickHistory = (idx) => () => {
    setChecked(
      checked.indexOf(idx) === -1
        ? [...checked, idx]
        : checked.filter((i) => i !== idx)
    );
  };

  const onClickRestart = () => {
    console.info(initialGameState);
    setGameState(initialGameState);
    setBoard(initialValues);
    setTurnHistory(initialTurnHistory);
    setChecked(initialChecked);
  };

  const onClickUndo = () => {
    const { playerId, row, col } = turnHistory.slice(-1)[0];
    if (turnHistory.length > 0) {
      setGameState({
        status: STATUS.ONGOING,
        playerId,
        sign: SIGNS[playerId],
      });
      board[row][col] = null;
      setBoard(board);
      setTurnHistory([...turnHistory.slice(0, turnHistory.length - 1)]);
    }
  };

  const onAction = (_, rowIdx, colIdx) => {
    const { status, sign, playerId } = gameState;
    if (status) {
      setAlertOptions({
        show: true,
        message: getStatusMessage(
          status,
          turnHistory?.slice(-1)?.[0]?.playerId
        ),
        severity: 'success',
      });
      return;
    }
    // ******************************
    // populate the board
    // ******************************
    let isValidAction = true;
    const newBoard = [];
    for (let rr = 0; rr < 3; rr++) {
      const newRow = [];
      for (let cc = 0; cc < 3; cc++) {
        const val = board[rr][cc];
        if (rr === rowIdx && cc === colIdx) {
          if (val === null) {
            newRow.push(sign);
          } else {
            setAlertOptions({
              show: true,
              message:
                val === sign
                  ? strings.YOU_HAVE_BEEN_PLACED_ALREADY
                  : strings.OTHER_PLAYER_PLACED_ALREADY,
              severity: 'warning',
            });
            newRow.push(val);
            isValidAction = false;
          }
        } else {
          newRow.push(val);
        }
      }
      newBoard.push(newRow);
    }

    setBoard(newBoard);

    if (isValidAction) {
      const currentStatus = getGameStatus(newBoard, sign);
      setGameState({
        status: currentStatus,
        playerId: playerId === 1 ? 2 : 1, // next playerId
        sign: playerId === 1 ? SIGNS[2] : SIGNS[1], // next sign
      });
      setTurnHistory([...turnHistory, { playerId, row: rowIdx, col: colIdx }]);
      if (currentStatus) {
        setAlertOptions({
          show: true,
          message: getStatusMessage(currentStatus, playerId),
          severity: 'success',
        });
      } else {
        setAlertOptions({
          ...alertOptions,
          show: false,
        });
      }
    }
  };

  return (
    <Container
      maxWidth='lg'
      css={css`
        display: flex;
        justify-content: center;
        flex-flow: column nowrap;
        align-items: center;
      `}
    >
      <ToolbarSpacer id={titleId} />
      <Typography
        variant='h6'
        component={Link}
        href={`#${titleId}`}
        gutterBottom
      >
        TicTacToe
      </Typography>
      <Box
        css={css`
          margin: 1rem 0;
        `}
      >
        <Button
          variant={'contained'}
          onClick={onClickUndo}
          disabled={turnHistory.length === 0}
          color={'primary'}
          css={css`
            margin-right: 1rem;
          `}
        >
          {strings.UNDO}
        </Button>
        <Button variant={'contained'} onClick={onClickRestart}>
          {strings.RESTART}
        </Button>
      </Box>
      <Box
        css={css`
          margin: 1rem 0;
        `}
      >
        {gameState.status !== STATUS.ONGOING ? (
          <Typography variant='h6'>
            {gameState.status === STATUS.DRAW
              ? `Draws!`
              : `Player ${turnHistory?.slice(-1)?.[0]?.playerId} wins!`}
          </Typography>
        ) : (
          <Typography variant='h6'>
            {strings.CURRENT_PLAYER}: Player{gameState.playerId} [
            {gameState.sign}]
          </Typography>
        )}
      </Box>
      <Board
        boxIdPrefix={boxIdPrefix}
        list={board}
        onAction={onAction}
        ref={(element) => {
          console.info(element);
          boxes.current = element;
        }}
        checkedCoord={turnHistory
          .filter((_, idx) => checked.includes(idx))
          .map((_) => [_.row, _.col])}
      />
      <TurnHistoryList
        turnHistory={turnHistory}
        onClick={makeOnClickHistory}
        checked={checked}
      />
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
