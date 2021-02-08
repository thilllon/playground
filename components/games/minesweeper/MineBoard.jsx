import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Button } from '@material-ui/core';
import { css } from '@emotion/react';

// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button

const boxIdPrefix = '__box__';
// const boxIdPrefix = shortid.generate();
const width = '1rem';
const height = '1rem';

export const convertMineBoard = (id) => {
  /**
   * -1: mine
   * 0-8: safe
   * 10: veiled
   * 11: suspicious
   * 12: undetermined
   */
  if (0 <= id && id <= 8) id = 0;

  const types = [
    { id: -1, sign: '*', className: 'mine', color: 'red' },
    { id: 0, sign: null, className: 'safe', color: 'white' },
    { id: 10, sign: null, className: 'veiled', color: 'gainsboro' },
    { id: 11, sign: '!', className: 'suspicious', color: 'gainsboro' },
    { id: 12, sign: '?', className: 'undetermined', color: 'gainsboro' },
  ];

  return types.filter((type) => type.id === id)?.[0] ?? {};
};

export const MineBoard = ({
  list,
  onClick,
  onContextMenu,
  onAuxClick,
  disabled,
  ...rest
}) => {
  const onMouseDown = (ev) => {
    // console.info(
    //   'onMouseDown',
    //   ev.buttons,
    //   ev.button,
    //   ev.detail,
    //   ev.eventPhase
    // );
    return ev;
  };

  const onMouseUp = (ev) => {
    // console.info(
    //   'onMouseUp',
    //   ev.buttons,
    //   ev.button,
    //   ev.detail,
    //   ev.eventPhase,
    //   ev.nativeEvent.aa
    // );
    if (ev.buttons === 2 && ev.button === 0) {
      ev.stopPropagation();
      ev.preventDefault();
      // ev.stopImmediatePropagation();
    }

    // return ev;
  };

  return (
    <Box>
      {list.map((row, rowIdx) => (
        <Box
          key={`box_${rowIdx}`}
          css={css`
            display: flex;
          `}
        >
          {row.map((val, colIdx) => {
            const { sign, className } = convertMineBoard(val);
            return (
              <Box
                {...rest}
                disableRipple={disabled}
                className={className}
                id={`${boxIdPrefix}_${rowIdx}_${colIdx}`}
                // ref={(box) => {
                //   // boxes.current = box;
                // }}
                component={Button}
                key={`box_${rowIdx}_${colIdx}`}
                css={css`
                  box-sizing: content-box;
                  border: 1px solid black;
                  width: ${width};
                  height: ${height};
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-width: 0;
                  min-height: 0;
                  line-height: 0;
                  border-radius: 0;
                  transition: none;
                  &.veiled,
                  &.suspicious,
                  &.undetermined {
                    background-color: gainsboro;
                  }
                  &.safe {
                    background-color: white;
                  }
                  &.mine {
                    background-color: red;
                  }
                `}
                onClick={disabled ? undefined : onClick(rowIdx, colIdx)}
                onContextMenu={
                  disabled ? undefined : onContextMenu(rowIdx, colIdx)
                }
                onMouseDown={disabled ? undefined : onMouseDown}
                onMouseUp={disabled ? undefined : onMouseUp}
              >
                {sign ? sign : val === 10 || val === 0 ? '' : val}
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};
