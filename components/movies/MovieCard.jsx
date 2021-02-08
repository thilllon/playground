import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';

export const MovieCard = ({
  id,
  year,
  title,
  summary,
  poster,
  rating,
  genres,
}) => {
  return (
    <Card>
      <CardContent>dddd</CardContent>
      <CardActionArea>dfsdf</CardActionArea>
    </Card>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
