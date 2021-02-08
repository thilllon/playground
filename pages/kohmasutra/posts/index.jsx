import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
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
import Link from 'next/link';
import { css } from '@emotion/react';
import { kohmaList } from '@utils/kohmasutra/kohmasutra';
import { backendUrl } from '@utils/config';

const strings = {
  SEE_MORE: '더보기',
  DESCRIPTION: '100 Kamasutra sex positions',
};

// ******************************
// ******************************

export default function KohmasutraPosts() {
  const router = useRouter();
  const href = `${backendUrl}/kohmasutra/posts/${
    kohmaList[Math.floor(Math.random() * kohmaList.length)].id
  }`;

  const onClickGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Container maxWidth='lg'>
      <Box>
        <Button onClick={onClickGoBack}>Go Back</Button>
        <Button
          id={'randomButton'}
          color={'secondary'}
          variant={'contained'}
          href={href}
        >
          Random
        </Button>
      </Box>
      <Box>
        <Typography variant='h4'>{strings.DESCRIPTION}</Typography>
      </Box>
      <Box
        css={css`
          display: flex;
          flex-flow: row wrap;
        `}
      >
        {kohmaList.map(({ id: postId, title, content, file }, idx) => {
          const image = `${backendUrl}/images/kohmasutra/${file}`;
          const href = `${backendUrl}/kohmasutra/posts/${postId}`;

          return (
            <Card
              id={`card__${idx}`}
              key={`card__${idx}`}
              css={(theme) => css`
                max-width: 45%;
                margin: ${theme.spacing(2, 2)};
                /* min-height: 6rem; */
                /* height: fit-content; */
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
