import React from 'react';
import { Typography, Link as MuiLink } from '@material-ui/core';

const href = 'https://thilllon.github.io/';
const linkText = 'thilllon.github.io';

export const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {`Copyright `}
      <MuiLink color='inherit' href={href}>
        {linkText}
      </MuiLink>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  );
};
