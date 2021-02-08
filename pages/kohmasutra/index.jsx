import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { backendUrl } from '@utils/config';

const href = backendUrl + '/kohmasutra/posts';
const postId = Math.floor(Math.random() * 100) + 1;
const timeoff = 3;
const hrefRandom = backendUrl + `/kohmasutra/posts/${postId}?t=${timeoff}&r=1`;

const strings = {
  VIEW_LIST: '목록 보기',
  KOHMASUTRA: 'Kohmasutra',
  RANDOM: '랜덤 보기',
};

// ******************************
// ******************************

export default function Kohmasutra() {
  const router = useRouter();

  return (
    <Container maxWidth='lg'>
      <Typography variant='h4' gutterBottom>
        {strings.KOHMASUTRA}
      </Typography>
      <Box
        css={css`
          display: flex;
          flex-flow: row nowrap;
        `}
      >
        <Box mr={1}>
          <Button variant='outlined' href={href}>
            {strings.VIEW_LIST}
          </Button>
        </Box>
        <Box>
          <Button variant='outlined' href={hrefRandom}>
            {strings.RANDOM}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
