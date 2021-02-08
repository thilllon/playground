import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import Image from 'next/image';
import { postIdcommentIdList } from 'pages/posts/[postId]/[commentId]';
import { postIdList } from 'pages/posts/[postId]/index';
import Link from 'next/link';
import { backendUrl } from '@utils/config';

export default function Posts() {
  return (
    <Container maxWidth='lg'>
      <Typography variant='h4'>Posts</Typography>
      <Box>
        <Typography>postId List</Typography>
        {postIdList.map((postId, idx) => (
          <Box>
            <Link key={`link__${idx}`} href={`${backendUrl}/posts/${postId}`}>
              {`${backendUrl}/posts/${postId}`}
            </Link>
          </Box>
        ))}
      </Box>
      <Box>
        <Typography>postId commentId List</Typography>
        {postIdcommentIdList.map(({ postId, commentId }, idx) => (
          <Box>
            <Link
              key={`link__${idx}`}
              href={`${backendUrl}/posts/${postId}/${commentId}`}
            >
              {`${backendUrl}/posts/${postId}/${commentId}`}
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
