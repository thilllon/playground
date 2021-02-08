import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from '@material-ui/core';
import {
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
} from '@material-ui/icons';

const headCells = [
  { name: 'turn', align: 'left', label: '#' },
  { name: 'player', align: 'left', label: 'Player' },
  { name: 'sign', align: 'left', label: 'Sign' },
];

const EnhancedTableHead = (props) => {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(({ name, align }) => (
          <TableCell key={name} align={align}>
            AAAAA
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// ******************************
// ******************************

export const TurnHistoryTable = ({ rows }) => {
  const [selected, setSelected] = useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((row) => row.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <Paper>
      <TableContainer>
        <Table size={'small'} aria-label='enhanced table'>
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={rows.length}
          />
          <TableBody>
            {rows.map((row, idx) => {
              const isItemSelected = isSelected(row.name);
              const labelId = `enhanced-table-checkbox-${idx}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.name)}
                  role='checkbox'
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.name}
                  selected={isItemSelected}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </TableCell>
                  <TableCell
                    component='th'
                    id={labelId}
                    scope='row'
                    padding='none'
                  >
                    {row.turn}
                  </TableCell>
                  <TableCell align='right'>{row.player}</TableCell>
                  <TableCell align='right'>{row.sign}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
