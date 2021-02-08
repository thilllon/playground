import React, { useState } from 'react';
import Head from 'next/head';
import { Container, Typography } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import { css } from '@emotion/react';
import { lorem } from 'faker';
import shortid from 'shortid';
// import Link from 'next/link';
// import Image from 'next/image';

// :root {
//   --color-container: skyblue;
// }
// #container {
//   width: 800px;
//   height: 400px;
//   position: relative;
//   background: var(--color-container);
// }

// .animal {
//   background-repeat: no-repeat !important;
//   background-color: white !important;
//   background-position: center !important;
//   background-size: contain !important;
//   width: 50px;
//   height: 50px;
//   position: absolute;
//   text-align: center;
//   vertical-align: middle;
// }

const title = 'Animal Run';

const AnimalRun = () => {
  return (
    <Container maxWidth='lg'>
      <Head>
        <title>{title}</title>
      </Head>
      <Typography variant='h1'>{title}</Typography>
      <Typography variant='body1'>TBD</Typography>
    </Container>
  );
};

export default AnimalRun;
