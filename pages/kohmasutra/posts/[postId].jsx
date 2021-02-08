import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { kohmaList } from '@utils/kohmasutra/kohmasutra';
import { PrevNextButton } from '@components/kohmasutra/PrevNextButton';
import { css } from '@emotion/react';
import { subdirectoryUrl } from '@utils/config';

const totalPost = 100;

const ButtonDiv = ({ postId }) => {
  return (
    <Box
      mt={2}
      css={css`
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
      `}
    >
      <PrevNextButton type={'prev'} postId={postId} />
      <PrevNextButton type={'next'} postId={postId} />
    </Box>
  );
};

export default function KohmasutraPost(props) {
  const router = useRouter();
  const { postId, t: timeoff, r: random } = router.query;

  console.info('props', props);
  console.info('router', router);
  console.info('router.query', router.query);

  const { title, content, file } = kohmaList.filter(
    ({ id }) => String(id) === postId
  )[0];

  useEffect(() => {
    if (timeoff) {
      // alert(timeoff);
      const timer = setTimeout(() => {
        const nextId =
          Number(random) === 1
            ? Array(totalPost)
                .fill(null)
                .map((_, idx) => String(idx + 1))
                .filter((id) => id !== postId)[
                Math.floor(Math.random() * (totalPost - 1))
              ]
            : (Number(postId) % totalPost) + 1;

        router.push(
          `${subdirectoryUrl}/kohmasutra/posts/${nextId}?t=${timeoff}&r=${
            random ?? ''
          }`
        );
      }, timeoff * 1000);
      return () => {
        // clearTimeout(timer);
      };
    }
  }, []);

  const src = `${subdirectoryUrl}/images/kohmasutra/${file}`;

  return (
    <Container maxWidth='sm'>
      <ButtonDiv postId={postId} />
      <Box>
        <img
          src={src}
          alt={file}
          css={css`
            width: 100%;
          `}
        />
        <Typography variant='h4' gutterBottom>
          {`${postId}. ${title}`}
        </Typography>
        <Typography variant='body1'>{content}</Typography>
      </Box>
      <ButtonDiv postId={postId} />
    </Container>
  );
}

export const getStaticPaths = async () => {
  const paths = kohmaList.map(({ id }) => ({
    params: { postId: String(id) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  console.info(params);
  return { props: { _name: 1234 } };
};
