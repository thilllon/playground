import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button, Container, Typography } from '@material-ui/core';
import { MovieCard } from '@components/movies/MovieCard';
import { useAxios } from '@utils/hooks/useAxios';

const title = 'Movies';
const initialLimit = 10;

const renderMovies = (movieList) =>
  movieList.map((movie) => {
    return (
      <MovieCard
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        rating={movie.rating}
        genres={movie.genres}
      />
    );
  });

export default function Movies() {
  const [limit, setLimit] = useState(initialLimit);
  const config = {
    method: 'GET',
    url: 'https://yts-proxy.now.sh/list_movies.json',
    params: { sort_by: 'rating', limit },
  };
  const [getMovieList, { called, loading, error, data }] = useAxios(config);
  const onClickChangeOption = () => {
    setLimit(limit + 1);
  };

  useEffect(() => {
    getMovieList();
  }, [limit]);

  return (
    <Container maxWidth='lg'>
      <Head>
        <title>{title}</title>
      </Head>
      <Button onClick={onClickChangeOption}>increase the limit: {limit}</Button>
      <Typography variant='h1'>{title}</Typography>
      <Typography variant='body1'>TBD</Typography>
      {/* {data && JSON.stringify(data.data.data.movies)} */}
      {data && JSON.stringify(Object.keys(data.data.data.movies[0]))}
      {data && renderMovies(data?.data?.data?.movies)}
    </Container>
  );
}
