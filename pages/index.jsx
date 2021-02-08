import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Fab, // floating action button
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Hidden,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Link as MuiLink,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Snackbar,
  TextField,
  Toolbar,
  Typography,
  useScrollTrigger,
  Zoom,
} from '@material-ui/core';
import { Copyright } from '@components/Copyright';
import Link from 'next/link';
import { menuData } from '@utils/menuData';

export default function Index() {
  return (
    <Container maxWidth='lg'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Next.js
        </Typography>
        <ul>
          {menuData.map(({ href, as, text }, idx) => {
            return (
              <li key={`item__${idx}`}>
                <Link href={href} as={as}>
                  <a>{text}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <Copyright />
      </Box>
    </Container>
  );
}
