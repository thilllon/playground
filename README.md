# Playground

Playground app with Next.js + Material UI

## Demo

### Static Site Generation

- [Github Pages](https://thilllon.github.io/playground/)

### Server-side Rendering

- [Vercel](https://playground-thilllon.vercel.app/)

## Trial Errors

### `next/image` 사용시 `next export` 하면 에러

```js
import Image from 'next/image';
```

```sh
Error: Image Optimization using Next.js default loader is not compatible with `next export`.
```

### order of babel configs is important

- `babel plugin` 순서에 따라 `@emotion/css`, `env` 등 설정값이 적용 안될 수 있음

### Material UI

- `OutlinedInput`에서 `label` 크기만큼 빈공간 만들때 `label` property 필수

## To-Do

- [ ] the mind
- [ ] movie ranking
- [ ] router.prefetch 사용
- [ ] css responsive style로 수정
- [ ] tools

# Next.js

## Next Link

- `href`: 실제 파일
- `as`: 표시되는 주소
- 링크 사용시 `next.config.js`에서 `exportPathMap` 설정 필요

## Build process

- babel transpiling
- webpack bundling
- hot module reloading
- pages directory indexing
- static path accessing

## Helpers

서버에서 실행될 js(getInitialProps)와 프론트에서 실행되는 js가 다름.

아직 서버에서 실행할 page 자바스크립트가 만들어지기 전.

이 경우에 모든 렌더링 관련 코드는 main.js 에 포함됨.

이는 dev 환경일때만 해당되는 것으로 라우팅 될 때마다 필요한 페이지를 생성.

production 환경에서는 page 코드를 미리 준비하여 빠른 초기 랜더링 가능

dev 환경에서는 빠른 빌드가 주 목적이기 때문에 미리 page 를 생성하지 않습니다.

반면에 production 환경에서는 초기 렌더링을 빠르게 하는것이 주 목적이기 때문에 page 코드를 미리 생성

dev 환경에서는 빌드시간을 줄이기위해 모든 디렉토리에 서버랜더링을 해두지 않음.

하지만 production 환경에서는 미리 모든 페이지의 코드를 만들어두기 때문에 초기 렌더링 시간이 절약

`.next/server` 폴더는 ssr에서 불리는 js
`.next/static/chunks/`
bundles 디렉토리는 pages가 호출되었을때 브라우져에서 불리는 js

### Difference between directory Bundles and dist?
https://github.com/vercel/next.js/issues/1217

## getStaticPaths

- This function gets called once at build time

```js
// Return a list of possible values for id. Only paths at the "paths" field are generated at build time
```

## getStaticProps

```js
export const getStaticProps = async ({ params }) => {
  console.log(params);
  const hello = {
    paramsString: JSON.stringify(params),
    lorem: 'lorem',
    ipsum: 'ipsum',
  };

  return {
    // props: 필수값, 페이지 컴포넌트로부터 받는 props 객체
    // revalidate: 옵션값, 페이지 재생성이 일어날 수 있는 시간(초)을 표현
    // notFound: 옵션값, 페이지가 404 상태를 리턴할 수 있는지 표현
    // redirect: 옵션값, 내부 혹은 외부 자원으로 리다이렉트하는 경우 필요한 속성값
    props: { hello },
  };
};
```

## getServerSideProps

```js
export const getServerSideProps = ({ params: { postId } }) => {
  const postData = {};
  // props: 필수값, 페이지 컴포넌트로부터 받는 props 객체
  // revalidate: 옵션값, 페이지 재생성이 일어날 수 있는 시간(초)을 표현
  // notFound: 옵션값, 페이지가 404 상태를 리턴할 수 있는지 표현
  // redirect: 옵션값, 내부 혹은 외부 자원으로 리다이렉트하는 경우 필요한 속성값
  return { props: { postData } };
};
```

## Reference

- https://taeny.dev/javascript/nextjs-with-deployment-platform/
- https://salgum1114.github.io/nextjs/2019-05-06-nextjs-static-website-1/
