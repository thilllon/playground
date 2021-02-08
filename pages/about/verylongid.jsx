import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { lorem } from 'faker';

export default function VeryLongId({ veryLongId }) {
  const [idLength, setIdLength] = useState(0);

  useEffect(() => {
    const len = document.querySelector(
      '.MuiContainer-root.MuiContainer-maxWidthLg'
    ).children[0].id.length;
    setIdLength(len);
  }, []);

  return (
    <Container>
      <Typography id={veryLongId} variant='h1'>
        VeryLongId
      </Typography>
      <Typography>ID length: {idLength}</Typography>
      <Typography>ID length: {veryLongId.length}</Typography>
    </Container>
  );
}

export const getStaticProps = async () => {
  const veryLongId = Array(10 ** 5 * 2)
    .fill(null)
    .reduce((prv) => prv + Math.random().toString(36).substr(2, 5), '');
  return { props: { veryLongId } };
};
