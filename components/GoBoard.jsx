import React from 'react';
import clsx from 'clsx';
import styled from '@emotion/styled';

const Cross = styled.div`
  display: flex;
  flex-flow: row nowrap;
  border: none;
  box-sizing: border-box;
  background-color: gainsboro;
  border-width: 9999px;
  /* cursor: pointer; */
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.isBlack ? 'black' : 'white')};
  }
  div {
    width: 50%;
    min-width: 50%;
    max-width: 50%;
    border: 1px solid black;
    box-sizing: border-box;
    &.q11 {
      border-width: 0 1px 1px 0;
      &.t {
        border-right-width: 0;
      }
      &.l {
        border-bottom-width: 0;
      }
    }
    &.q12 {
      border-width: 0 0 1px 1px;
      &.t {
        border-left-width: 0;
      }
      &.r {
        border-bottom-width: 0;
      }
    }
    &.q21 {
      border-width: 1px 1px 0 0;
      &.b {
        border-right-width: 0;
      }
      &.l {
        border-top-width: 0;
      }
    }
    &.q22 {
      border-width: 1px 0 0 1px;
      &.b {
        border-left-width: 0;
      }
      &.r {
        border-top-width: 0;
      }
    }
  }
`;

const Row = ({ row }) => {
  return (
    <>
      {[...Array(19).keys()].map((_, col) => {
        return (
          <Cross
            className={clsx(
              row === 0 && 't',
              row === 18 && 'b',
              col === 0 && 'l',
              col === 18 && 'r',
              [3, 9, 15].includes(row) && [3, 9, 15].includes(col) && 'eye'
            )}
          >
            <div className={'q11'}></div>
            <div className={'q12'}></div>
            <div className={'q21'}></div>
            <div className={'q22'}></div>
          </Cross>
        );
      })}
    </>
  );
};

const GoBoard = () => {
  return (
    <div className={'board'}>
      {[...Array(19).keys()].map((_, row) => (
        <Row row={row} />
      ))}
    </div>
  );
};

const size = '2rem';
const nblock = 19;
export const Board = () => {
  return (
    <div>
      {Array(nblock).map((_, row) => {
        return (
          <div
            key={`box_${row}`}
            id={`box_${row}`}
            className={clsx(`row_${row}`)}
          >
            {Array(nblock).map((_, col) => (
              <div
                key={`box_${row}_${col}`}
                id={`box_${row}_${col}`}
                className={clsx(`row_${row}`, `col_${col}`)}
                css={css`
                  width: ${size};
                  height: ${size};
                `}
              >
                dd
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
