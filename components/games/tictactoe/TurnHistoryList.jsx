import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Checkbox,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { css } from '@emotion/react';

export const TurnHistoryList = ({
  turnHistory,
  onClick,
  checked,
  title = 'Game History',
}) => {
  return (
    <Box>
      {turnHistory && turnHistory.length > 0 && (
        <Box
          mt={3}
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <Typography variant={'h5'} title={title}>
            {title}
          </Typography>
        </Box>
      )}
      <List dense>
        {turnHistory.map(({ playerId, row, col }, idx) => {
          const labelId = '';
          const key = 'done_' + idx;
          return (
            <ListItem
              key={key}
              // role={undefined}
              button
              onClick={onClick(idx)}
            >
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  checked={checked.indexOf(idx) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText
                primary={`Player ${playerId}: [row ${row + 1}, column ${
                  col + 1
                }]`}
              />
            </ListItem>
          );
        })}
      </List>
      {false && (
        <ol>
          {turnHistory.map(({ playerId, row, col }, idx) => (
            <li key={'action_' + idx}>
              Player{playerId}: [row{row}, col{col}]
            </li>
          ))}
        </ol>
      )}
    </Box>
  );
};

TurnHistoryList.propTypes = {
  turnHistory: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.array.isRequired,
};
