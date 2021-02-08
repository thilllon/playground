import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  List,
  ListItem,
  Link,
} from '@material-ui/core';
import { css } from '@emotion/react';
import { subdirectoryUrl } from '@utils/config';
import { kohmaList } from '@utils/kohmasutra/kohmasutra';
import { LinkX } from '@components/LinkX';

const href = subdirectoryUrl + '/kohmasutra/posts';
const postId = Math.floor(Math.random() * 100) + 1;
const timeoff = 3;
// const randomHref =
// subdirectoryUrl + `/kohmasutra/posts/${postId}` + `?t=${timeoff}&r=1`;
const randomHref = subdirectoryUrl + `/kohmasutra/posts/${postId}`;

const strings = {
  SWITCH_TO_CARD_LIST: 'switch to card list',
  KOHMASUTRA: 'kohmasutra',
  GO_TO_RANDOM: 'go to random',
};

// ******************************
// ******************************

export default function Kohmasutra() {
  // const router = useRouter();

  return (
    <Container maxWidth='lg'>
      <Typography
        css={css`
          text-transform: capitalize;
        `}
        variant='h4'
        gutterBottom
      >
        {strings.KOHMASUTRA}
      </Typography>
      <Box
        css={css`
          display: flex;
          flex-flow: row nowrap;
          & > .MuiButton-root {
            text-transform: uppercase;
            &:first-of-type {
              margin-right: 1rem;
            }
          }
        `}
      >
        <Button variant='outlined' href={href}>
          {strings.SWITCH_TO_CARD_LIST}
        </Button>
        <Button variant='outlined' href={randomHref}>
          {strings.GO_TO_RANDOM}
        </Button>
      </Box>
      <List dense>
        {kohmaList.map(({ id, title, content, file }, idx) => (
          <ListItem key={'_' + idx}>
            <Link href={`${subdirectoryUrl}/kohmasutra/posts/${id}`}>
              {`${id}. ${title}`}
            </Link>
            {/* <LinkX href={href}>{`${id}. ${title}`}</LinkX> */}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
// export const getStaticProps = async () => {
//   return { props: { list: kohmaList } };
// };
