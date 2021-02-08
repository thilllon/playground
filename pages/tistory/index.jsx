import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Link as MuiLink } from '@material-ui/core';
import { Copyright } from '@components/Copyright';
import Link from 'next/link';
import { menuData } from '@utils/menuData';
import axios from 'axios';
import { LinkX } from '@components/LinkX';

const isProduction = process.env.NODE_ENV === 'production';
const clientId = isProduction ? '' : process.env.TISTORY_CLIENT_ID;
const clientSecret = isProduction ? '' : process.env.TISTORY_CLIENT_SECRET;

const parseParam = (result) =>
  result
    ?.split('?')[1]
    ?.split('&')
    ?.reduce((par, keyVal) => {
      const [key, val] = keyVal.split('=');
      par[key] = val;
      return par;
    }, {}) ?? {};

const onCreateToken = (code) => (ev) => {
  ev.preventDefault();

  // https://sabarada.tistory.com/111
  // https://tistory.github.io/document-tistory-apis/auth/authorization_code.html

  try {
    const result = axios({
      method: 'GET',
      headers: {
        Referer: 'https://www.tistory.com',
        origin: 'https://www.tistory.com',
      },
      url: 'https://www.tistory.com/oauth/access_token',
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: 'http://localhost:3333',
        response_type: 'code',
        code,
        grant_type: 'authorization_code',
      },
    }).then((res) => {});
    console.info(result.body.access_token);
  } catch (err) {
    console.error(err);
  } finally {
    //
  }
};

const config = {
  url: 'https://www.tistory.com/oauth/authorize',
  client_id: clientId,
  // redirect_uri: 'http%3A%2F%2Flocalhost%3A3333',
  redirect_uri: 'http://localhost:3333',
  response_type: 'code',
};

const urlCreateCode =
  config.url + //
  '?client_id=' +
  config.client_id +
  '&redirect_uri=' +
  encodeURI(config.redirect_uri) +
  '&response_type=' +
  config.response_type;

const getAccessToken = (code, id = clientId, secret = clientSecret) =>
  `https://www.tistory.com/oauth/access_token?client_id=${id}&client_secret=${secret}&redirect_uri=http%3A%2F%2Flocalhost%3A3333&response_type=code&grant_type=authorization_code&code=${code}`;

// ******************************
// ******************************

export default function Tistory() {
  const [code, setCode] = useState('');
  const [urlCreateToken, setUrlCreateToken] = useState('');

  useEffect(() => {
    const newCode = parseParam(window?.location.href).code;
    setCode(newCode);
    setUrlCreateToken(getAccessToken(newCode));
  }, []);

  return (
    <Container maxWidth='lg'>
      <Button
        // href='#'
        variant='outlined'
        onClick={onCreateToken(code)}
      >
        tistory code {code}
      </Button>
      {isProduction && (
        <Box>
          <LinkX href={urlCreateCode}>코드 발급</LinkX>
          <>{code && <LinkX href={urlCreateToken}>엑세스 토큰 발급</LinkX>}</>
        </Box>
      )}
    </Container>
  );
}
