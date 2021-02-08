import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Label } from '@material-ui/icons';
import Link from 'next/link';
import { css } from '@emotion/react';
import { lorem } from 'faker';
import shortid from 'shortid';
import { kohmaList } from '@utils/kohmasutra/kohmasutra';
import { ConverterForm } from '@components/converter/ConverterForm';
import { ToolbarSpacer } from '@components/ToolbarSpacer';
import { backendUrl } from '@utils/config';

// ******************************
// https://emn178.github.io/online-tools/sha512.html
// ******************************

const ToolModule = ({ id, title, onConvert }) => {
  const [targetType, setTargetType] = useState('string');

  return (
    <Box>
      <ToolbarSpacer id={id} />
      <Typography variant='h6' component={Link} href={'#' + id}>
        {title}
      </Typography>
      <ConverterForm
        radioList={[
          { label: 'Text Input', value: 'TEXT' },
          { label: 'Hex Input', value: 'HEX' },
        ]}
        onConvert={onConvert}
      />
    </Box>
  );
};

const ogList = [
  { property: 'og:title', content: 'hash tools' },
  {
    property: 'og:description',
    content: '온라인으로 쉽고 빠르게 encode/decode 해보세요. tools',
  },
  {
    property: 'og:image',
    content: `${backendUrl}/images/icons/android-chrome-512x512.png`,
  },
];
const unidirectional = [
  'CRC-16',
  'CRC-32',
  'MD2',
  'MD4',
  'MD5',
  'SHA1',
  'SHA224',
  'SHA256',
  'SHA384',
  'SHA512',
  'SHA512/224',
  'SHA512/256',
  'SHA3-224',
  'SHA3-256',
  'SHA3-384',
  'SHA3-512',
  'Keccak-224',
  'Keccak-256',
  'Keccak-384',
  'Keccak-512',
  'Shake-128',
  'Shake-256',
];

const bidirectional = ['html', 'url', 'base64', 'base32'];

const title = `Online Tools`;

export default function Tools() {
  const router = useRouter();
  const makeOnConvert = (type) => (mode, text, options) => {
    if (type === 'MD2') {
      //
    } else if (type === 'MD4') {
      //
    }
  };
  return (
    <Container maxWidth='lg'>
      <Head>
        <title>{title}</title>
        {ogList.map(({ property, content }) => {
          return <meta property={property} content={content} />;
        })}
      </Head>
      {false &&
        unidirectional.map((type, idx) => (
          <ToolModule
            key={'type__' + idx}
            id={'type__' + type}
            title={type}
            onConvert={makeOnConvert(type)}
          />
        ))}
    </Container>
  );
}
