import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Container,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import { css, useTheme } from '@emotion/react';
import { kohmaList } from '@utils/kohmasutra/kohmasutra';
import { subdirectoryUrl } from '@utils/config';
import { useGoBack } from '@utils/hooks/useGoBack';

const strings = {
  SEE_MORE: 'see more',
  DESCRIPTION: '100 Kamasutra sex positions',
  GO_BACK: 'go back',
  RANDOM: 'random',
  KOHMASUTRA: 'kohmasutra',
};

// ******************************
// ******************************

export default function KohmasutraPosts() {
  const theme = useTheme();
  const router = useRouter();
  const onClickGoBack = useGoBack(router);

  const href = `${subdirectoryUrl}/kohmasutra/posts/${
    kohmaList[Math.floor(Math.random() * kohmaList.length)].id
  }`;

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
      <Box>
        <Typography variant='h6' gutterBottom>
          {strings.DESCRIPTION}
        </Typography>
      </Box>
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
        <Button variant={'outlined'} onClick={onClickGoBack}>
          {strings.GO_BACK}
        </Button>
        <Button color={'secondary'} variant={'contained'} href={href}>
          {strings.RANDOM}
        </Button>
      </Box>
      <Box
        css={css`
          display: flex;
          flex-flow: row wrap;
        `}
      >
        {kohmaList.map(({ id: postId, title, content, file }, idx) => {
          const image = `${subdirectoryUrl}/images/kohmasutra/${file}`;
          const href = `${subdirectoryUrl}/kohmasutra/posts/${postId}`;

          return (
            <Card
              id={`card__${idx}`}
              key={`card__${idx}`}
              css={css`
                max-width: 45%;
                margin: ${theme.spacing(2, 2)};
                height: 14rem;
                ${theme.breakpoints.down('sm')} {
                  max-width: 100%;
                }
                display: flex;
              `}
              title={title}
            >
              <CardActionArea>
                <CardMedia
                  css={css`
                    width: 150px;
                  `}
                  title={title}
                  component={'img'}
                  image={image}
                  alt={file}
                />
              </CardActionArea>
              <Box
                css={css`
                  display: flex;
                  flex-flow: column nowrap;
                  justify-content: space-between;
                `}
              >
                <CardContent
                  css={css`
                    padding-bottom: 0;
                  `}
                >
                  <Typography gutterBottom variant='h5' component='h2'>
                    {`${postId}. ${title}`}
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    css={css`
                      overflow: hidden;
                      text-overflow: ellipsis;
                      display: -moz-box;
                      display: -webkit-box;
                      -webkit-line-clamp: 5;
                      -webkit-box-orient: vertical;
                    `}
                  >
                    {content}
                  </Typography>
                </CardContent>
                <CardActions
                  css={css`
                    display: flex;
                    justify-content: flex-end;
                  `}
                >
                  <Button
                    size='large'
                    color='secondary'
                    // component={Link}
                    href={href}
                  >
                    {strings.SEE_MORE}
                  </Button>
                </CardActions>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Container>
  );
}
