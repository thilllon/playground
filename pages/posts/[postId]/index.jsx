import React, { useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { subdirectoryUrl } from '@utils/config';
// https://nextjs.org/docs/basic-features/ data-fetching#getstaticpaths-static-generation

// import Image from 'next/image'; // SSG에서 사용하려면, public에 넣거나, 외부 로더(imgix, akamai, s3 등 이용)
// next/image
// https://nextjs.org/docs/api-reference/next/image

export const postIdList = ['1', '2', '3'];

export default function Post(props) {
  const { post } = props;
  console.info(post);
  const router = useRouter();
  const { id } = router.query;

  const fileName = `animal${post?.id}.jpg`;

  return (
    <Container maxWidth='lg'>
      <Typography variant='h4'>router.query.id is {id}</Typography>
      <Typography variant='h4'>router.query.id is {id}</Typography>
      <Typography variant='h3'>Post</Typography>
      <Typography variant='h3'>{post?.id}</Typography>
      <Typography variant='h3'>{post?.subject}</Typography>
      <Typography variant='h3'>{post?.content}</Typography>
      <img
        src={`${subdirectoryUrl}/images/animal/${fileName}`}
        alt={fileName}
        width={120}
        // height={120}
      />
    </Container>
  );
}

// ✅ This function gets called once at build time
export const getStaticPaths = async ({ locale, defaultLocale }) => {
  console.info('getStaticPaths');

  // Get the paths we want to pre-render based on posts
  const paths = postIdList.map((pid) => ({
    params: { postId: String(pid) },
  }));

  // https://nextjs.org/docs/advanced-features/static-html-export
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  // The { fallback: true } mode of getStaticPaths is not supported when using next export.

  // The next/image component's default loader is not supported when using next export. However, other loader options will work.

  return { paths, fallback: false };
};

// ✅ This also gets called once at build time
// ✅ getStaticPaths was added without a getStaticProps in <<DIRECTORY_HIERARCHY>>.
// Without getStaticProps, getStaticPaths does nothing.
export const getStaticProps = async (context) => {
  const { params } = context;
  console.info('getStaticProps', params.postId);
  // params contains the post `postId`.
  // If the route is like /posts/1, then params.postId is 1
  // const res = await fetch(`https://.../posts/${params.postId}`);
  // const post = await res.json();

  const post = {
    id: params.postId,
    subject: `title__${params.postId}`,
    content: `content__${params.postId}`,
  };

  // Pass post data to the page via props
  return { props: { post } };
};
