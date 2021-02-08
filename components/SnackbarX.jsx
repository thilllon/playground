import React, { useState } from 'react';
import { Snackbar, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const AlertX = (props) => <Alert elevation={6} variant='filled' {...props} />;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const SnackBarX = ({
  message = 'Success',
  onClose = () => {},
  closeText = 'Close',
  severity = 'success',
  open = false,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Snackbar open={open} autoHideDuration={3000} onClose={onClose} {...rest}>
        <AlertX onClose={onClose} severity={severity} closeText={closeText}>
          {message}
        </AlertX>
      </Snackbar>
    </Box>
  );
};
// {/* <Snackbar onClose={handleClose} open={alertOptions.show}>
// <Alert
// onClose={handleClose}
// severity={alertOptions.severity}
// closeText={strings.CLOSE}
// >
//   {/* // {alertOptions.message} */}
// {/* </Alert>; */}
// </Snackbar> */}
