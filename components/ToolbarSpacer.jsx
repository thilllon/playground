import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// necessary for content to be below app bar
const useStyles = makeStyles((theme) => ({ toolbar: theme.mixins.toolbar }));

export const ToolbarSpacer = ({ id }) => {
  const classes = useStyles();
  return <Box id={id} className={classes.toolbar} />;
};
