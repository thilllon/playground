import { useRouter } from 'next/router';
import { Box, Typography } from '@material-ui/core';
import faker from 'faker';

export const postIdcommentIdList = [
  { postId: '2', commentId: '1' },
  { postId: '2', commentId: '2' },
  { postId: '2', commentId: '3' },
  // ******************************
  { postId: '3', commentId: '1' },
  { postId: '3', commentId: '2' },
  { postId: '3', commentId: '3' },
  // ******************************
  { postId: '4', commentId: '1' },
  { postId: '4', commentId: '2' },
  { postId: '4', commentId: '3' },
];

export default function Comment({ commentInfo }) {
  const router = useRouter();
  const { postId, commentId } = router.query;

  return (
    <Box>
      <Box>
        <Typography variant='h6'>postId</Typography>
        <Typography variant='body'>{postId}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>commentId</Typography>
        <Typography variant='body'>{commentId}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>commentInfo.paramsString</Typography>
        <Typography variant='body'>{commentInfo.paramsString}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>props.commentInfo.writer</Typography>
        <Typography variant='body'>{commentInfo.writer}</Typography>
      </Box>
      <Box>
        <Typography variant='h6'>props.commentInfo.content</Typography>
        <Typography variant='body'>{commentInfo.content}</Typography>
      </Box>
    </Box>
  );
}

export const getStaticPaths = async ({ locale, defaultLocale }) => {
  const paths = [
    { params: { postId: '2', commentId: '1' } },
    { params: { postId: '2', commentId: '2' } },
    { params: { postId: '2', commentId: '3' } },
    // ******************************
    { params: { postId: '3', commentId: '1' } },
    { params: { postId: '3', commentId: '2' } },
    { params: { postId: '3', commentId: '3' } },
    // ******************************
    { params: { postId: '4', commentId: '1' } },
    { params: { postId: '4', commentId: '2' } },
    { params: { postId: '4', commentId: '3' } },
  ];

  console.info(paths);
  const context = { paths, fallback: false };
  return context;
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.info(params);
  const commentInfo = {
    paramsString: JSON.stringify(params),
    postId: params.postId,
    commentId: params.commentId,
    writer: faker.internet.userName(),
    content: faker.lorem.paragraph(),
  };

  return { props: { commentInfo } };
};
