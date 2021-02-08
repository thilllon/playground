import { Container, Typography, Box } from '@material-ui/core';
import faker from 'faker';

const contents = faker.lorem.sentences(5);

export default function About({ builtAt, contents: prebuiltContents }) {
  return (
    <Container>
      <Typography variant='h1'>About</Typography>
      <Typography variant='body'>{builtAt}</Typography>
      <Box>
        <Typography variant='h3'>run time</Typography>
        <Box>
          {Array(5)
            .fill(null)
            .map(() => (
              <Typography paragraph>{contents}</Typography>
            ))}
        </Box>
        <Typography variant='h3'>build time</Typography>
        <Box>
          {Array(5)
            .fill(null)
            .map(() => (
              <Typography paragraph>{prebuiltContents}</Typography>
            ))}
        </Box>
      </Box>
    </Container>
  );
}

export const getStaticProps = async () => {
  const builtAt = new Date().toISOString();
  console.info(builtAt);
  return { props: { builtAt, contents } };
};
