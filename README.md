# Playground

https://taeny.dev/javascript/nextjs-with-deployment-platform/

import Image from 'next/image';
사용시 next export 하면 에러

Error: Image Optimization using Next.js' default loader is not compatible with `next export`.

# thilllon.github.io

# To-Do

- [ ] the mind
- [ ] movie ranking
- [ ] router.prefetch 사용
- [ ] css responsive style로 수정

## playground

[playground](https://thilllon.github.io/playground)
Next.js로 만든 앱

## React Movie App

[react-movie-app](https://thilllon.github.io/react-movie-app)
리액트로 만든 영화 랭킹 앱

## env

REPO_NAME=playground
LOCATION=LOCAL

# 참고 블로그

- https://salgum1114.github.io/nextjs/2019-05-06-nextjs-static-website-1/
-

# 에러!!

바벨설정이 정말 중요
바벨 플러그인 순서에 따라서 이모션 css 적용이 되고 안되고,
env 적용이 되고 안되고가 바뀜

# Link

href: 실제 파일
as: 표시되는 주소
링크 사용시 next.config.js에서 exportPathMap 설정필요

# tsconfig.json

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true /* Enable all strict type-checking options. */,
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */
    // "noUncheckedIndexedAccess": true,      /* Include 'undefined' in index signature results */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where // debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where // debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true /* Skip type checking of declaration files. */,
    "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
  }
}
```

# next js

빌드시

babel transpiling

webpack bundling

hot module reloading

pages directory indexing

static path accessing

서버에서 실행될 js(getInitialProps)와 프론트에서 실행되는 js가 다름. 아직 서버에서 실행할 page 자바스크립트가 만들어지지 않았습니다. 이 경우에 모든 렌더링 관련 코드는 main.js 에 포함됩니다. 이는 dev 환경일때만 해당되는 것으로 라우팅 될 때마다 필요한 페이지를 생성합니다. production 환경에서는 page 코드를 미리 준비합니다. 더 빠른 초기 렌더링이 가능하기 때문입니다. dev 환경에서는 빠른 빌드가 주 목적이기 때문에 미리 page 를 생성하지 않습니다. 반면에 production 환경에서는 초기 렌더링을 빠르게 하는것이 주 목적이기 때문에 page 코드를 미리 생성합니다.

dev 환경에서는 모든 디렉토리에 서버랜더링을 해두지않음. 빌드시간을 줄이기위해

하지만 production 환경에서는 미리 모든 페이지의 코드를 만들어두기 때문에 초기 렌더링 시간이 절약됩니다.

dist/bundles 폴더는 ssr에서 불리는 js

bundles 디렉토리는 pages가 호출되었을때 브라우져에서 불리는 js

https://github.com/vercel/next.js/issues/1217

// required for recalculate dummy width

OutlinedInput에서 label 크기만큼 빈공간 만들때

label 태그 필수

# getStaticProps

// ✅ This function gets called once at build time

```javascript
// Return a list of possible values for id. Only paths at the "paths" field are generated at build time
```

# getStaticProps

```javascript
export const getStaticProps = async ({ params }) => {
  console.info(params);
  const hello = {
    paramsString: JSON.stringify(params),
    lorem: 'loremloremloremloremlorem',
    ipsum: 'ipsumipsumipsumipsumipsum',
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

# getServerSideProps

```javascript
export const getServerSideProps = ({ params: { postId } }) => {
  const postData = {};
  // props: 필수값, 페이지 컴포넌트로부터 받는 props 객체
  // revalidate: 옵션값, 페이지 재생성이 일어날 수 있는 시간(초)을 표현
  // notFound: 옵션값, 페이지가 404 상태를 리턴할 수 있는지 표현
  // redirect: 옵션값, 내부 혹은 외부 자원으로 리다이렉트하는 경우 필요한 속성값
  return { props: { postData } };
};
```

# 1. gh-pages Hello World example

## 1.1. How to use

### 1.1.1. Download manually

Download the example [or clone the repo](https://github.com/zeit/next.js):

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/master | tar -xz --strip=2 next.js-master/examples/gh-pages
cd gh-pages
```

Install it and run:

```bash
npm install
npm run dev
```

Deploy it to github

Edit `env-config.js` and replace `'Next-gh-page-example'` by your project name.

Edit `next.config.js` and replace `'Next-gh-page-example'` by your project name.

1. Create repository.
2. Link it to your github account.
3. Publish your master branch.

```bash
npm run deploy
```

Test it:

Reaplce 'github-user-name' and 'github-projet-name'

```bash

https://github-user-name.github.io/github-projet-name/

```

Example:

```bash

https://github.com/thierryc/Next-gh-page-example/

https://thierryc.github.io/Next-gh-page-example/

```

## 1.2. The idea behind the example

This example shows the most basic idea behind Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities.
