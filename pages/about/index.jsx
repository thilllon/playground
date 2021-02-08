import { Container, Typography, Box } from '@material-ui/core';
import { lorem } from 'faker';

const contents = lorem.paragraphs(5);

export default function About() {
  return (
    <Container>
      <Typography variant='h1'>About</Typography>
      <Box>
        {[...new Array(10)].map(() => (
          <Typography paragraph>{contents}</Typography>
        ))}
      </Box>
    </Container>
  );
}
