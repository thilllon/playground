import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button, Container, Typography } from '@material-ui/core';
import { useAxios } from '@utils/hooks/useAxios';

const title = 'Movies';

export default function MovieDetails({ id }) {
  const config = {
    method: 'GET',
    url: 'https://yts-proxy.now.sh/list_movies.json',
    params: { sort_by: 'rating', limit },
  };
  const [getMovieList, { called, loading, error, data }] = useAxios(config);

  useEffect(() => {
    getMovieList();
  }, [limit]);

  return (
    <Container maxWidth='lg'>
      <Head>
        <title>{title}</title>
      </Head>
      {data?.data && JSON.stringify(data.data)}
    </Container>
  );
}

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  return { props: { id: params.id } };
};
