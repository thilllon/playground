import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Button } from '@material-ui/core';
import { css } from '@emotion/react';

const boxSize = '2rem';
const boxStyle = (theme) => {
  // console.info(theme);

  return css`
    box-sizing: content-box;
    border: 1px solid black;
    width: ${boxSize};
    height: ${boxSize};

    font-weight: bold;
    font-size: 2rem;
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 0;
    &.checked {
      background-color: gainsboro;
    }
  `;
};

export const Board = React.forwardRef(
  ({ list, onAction, boxIdPrefix, checkedCoord, ...rest }, boxesRef) => {
    const makeOnClick = (rowIdx, colIdx) => (ev) => {
      onAction(ev, rowIdx, colIdx);
      // if (boxesRef .current) {
      //
      // boxesRef .current.click();
      // }
    };

    console.info(checkedCoord);

    return (
      <Box {...rest}>
        {list.map((row, rowIdx) => (
          <Box
            key={`box_${rowIdx}`}
            css={css`
              display: flex;
            `}
          >
            {row.map((val, colIdx) => {
              return (
                <Box
                  id={`${boxIdPrefix}_${rowIdx}_${colIdx}`}
                  ref={(box) => {
                    // boxesRef .current = box;
                  }}
                  component={Button}
                  key={`box_${rowIdx}_${colIdx}`}
                  css={boxStyle}
                  onClick={makeOnClick(rowIdx, colIdx)}
                  className={
                    checkedCoord.some(
                      (coord) => coord[0] === rowIdx && coord[1] === colIdx
                    )
                      ? 'checked'
                      : undefined
                  }
                >
                  {val ?? ''}
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    );
  }
);
