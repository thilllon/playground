import React, { useState } from 'react';
import { Container, Typography, Link } from '@material-ui/core';
import { convertK2E, convertE2K } from '@utils/converter';
import { ConverterForm } from '@components/converter/ConverterForm';
import { ToolbarSpacer } from '@components/ToolbarSpacer';

const convertKorEng = (mode, text) => {
  if (mode === 'K2E') {
    return convertK2E(text);
  } else if (mode === 'E2K') {
    return convertE2K(text);
  } else {
    return '';
  }
};

const convertURL = (mode, text) => {
  if (mode === 'ENCODE_URL') {
    return encodeURI(text);
  } else if (mode === 'ENCODE_URL_COMPONENT') {
    return encodeURIComponent(text);
  } else if (mode === 'DECODE_URL') {
    return decodeURI(text);
  } else if (mode === 'DECODE_URL_COMPONENT') {
    return decodeURIComponent(text);
  } else {
    return '';
  }
};

const convertJsonFormatter = (mode, text) => {
  if (mode === 'TAB') {
    // return shortid.generate();
    return 'Under construction...';
    // return mode;
  } else if (mode === 'SPACE2') {
    return 'Under construction...';
    // return mode;
  } else if (mode === 'SPACE3') {
    return 'Under construction...';
    // return mode;
  } else if (mode === 'SPACE4') {
    return 'Under construction...';
    // return mode;
  } else if (mode === 'MINIFY') {
    return 'Under construction...';
    // return mode;
  } else {
    return '';
  }
};

const onClickCheckbox = (mode, text, options) => {
  // convertBase64(mode, text, options);
  alert('TBD');
};

const convertBase64 = (mode, text, options) => {
  if (mode === 'ENCODE_BASE64') {
    try {
      // console.info('================', options.checked);
      return options?.checked ? btoa(text).split('=').join('') : btoa(text);
    } catch (err) {
      return err;
    }
  } else if (mode === 'DECODE_BASE64') {
    try {
      return atob(text);
    } catch (err) {
      return err;
    }
  } else {
    return '';
  }
};

const ConverterModule = ({ id, title, onConvert }) => {
  return (
    <Box>
      <ToolbarSpacer id={id} />
      <Typography variant='h6' component={Link} href={'#' + id}>
        {title} }
      </Typography>
      <ConverterForm
      // radioList={[
      //   { label: 'Encode URL', value: 'ENCODE_URL' },
      //   { label: 'Encode URL component', value: 'ENCODE_URL_COMPONENT' },
      //   { label: 'Decode URL', value: 'DECODE_URL' },
      //   { label: 'Decode URL component', value: 'DECODE_URL_COMPONENT' },
      // ]}
      // onConvert={convertURL}
      />
    </Box>
  );
};

const title = 'Korean-English Converter(feat. 한글이 안쳐져요)';

const Converter = () => {
  return (
    <Container maxWidth='lg'>
      {/* // ****************************** */}
      {/* // ****************************** */}
      <ToolbarSpacer id='kor-eng' />
      <Typography variant='h6' component={Link} href='#kor-eng'>
        {title}{' '}
      </Typography>
      <ConverterForm
        radioList={[
          { label: 'English to Korean', value: 'E2K' },
          { label: 'Korean to English', value: 'K2E' },
        ]}
        onConvert={convertKorEng}
      />
      {/* // ****************************** */}
      {/* // ****************************** */}
      <ToolbarSpacer id='url-encode-decode' />
      <Typography variant='h6' component={Link} href='#url-encode-decode'>
        URL Encode/Decode
      </Typography>
      <ConverterForm
        radioList={[
          { label: 'Encode URL', value: 'ENCODE_URL' },
          { label: 'Encode URL component', value: 'ENCODE_URL_COMPONENT' },
          { label: 'Decode URL', value: 'DECODE_URL' },
          { label: 'Decode URL component', value: 'DECODE_URL_COMPONENT' },
        ]}
        onConvert={convertURL}
      />
      {/* // ****************************** */}
      {/* // ****************************** */}
      <ToolbarSpacer id='base64' />
      <Typography variant='h6' component={Link} href='#base64'>
        Base64 Encode/Decode
      </Typography>
      <ConverterForm
        radioList={[
          { label: 'Encode Base64', value: 'ENCODE_BASE64' },
          { label: 'Decode Base64', value: 'DECODE_BASE64' },
        ]}
        onConvert={convertBase64}
        checkboxName={'urlSafe'}
        labelForCheckboxHelper={'Remove dangling equal(=) sign(s).'}
        labelForCheckbox={'URL safe'}
        onClickCheckbox={onClickCheckbox}
      />
      {/* // ****************************** */}
      {/* // ****************************** */}
      <ToolbarSpacer id='json-formatter' />
      <Typography
        variant='h6'
        component={Link}
        href='#json-formatter'
        gutterBottom
      >
        JSON Formatter
      </Typography>
      <ConverterForm
        description={
          <ul>
            <li>Input a string of text and encode or decode it as you like.</li>
            <li>
              Handy for turning encoded JavaScript URLs from complete gibberish
              into readable gibberish.
            </li>
            <li>
              If you'd like to have the URL Decoder/Encoder for offline use,
              just view source and save to your hard drive. Creative Commons
              License
            </li>
          </ul>
        }
        selectList={[
          { label: 'Align JSON: Tab Delimited', value: 'TAB' },
          { label: 'Align JSON: 2 Spaces Indentation', value: 'SPACE2' },
          { label: 'Align JSON: 3 Spaces Indentation', value: 'SPACE3' },
          { label: 'Align JSON: 4 Spaces Indentation', value: 'SPACE4' },
          { label: 'Minify JSON', value: 'MINIFY' },
        ]}
        onConvert={convertJsonFormatter}
        selectorLabel={'Indentation'}
        labelForSelector={'들여쓰기 방식을 선택해주세요.'}
        labelForSelectorShort={'들여쓰기 방식'}
      />
    </Container>
  );
};

export default Converter;
// labelForSelector = 'Select Mode',
// labelForTextInputSource = '변환할 텍스트를 입력해주세요.',
// labelForTextInputDestination = '변환된 텍스트가 표시됩니다.',
// labelForCopyCompleted: '복사 완료',
// labelForClose: '닫기',
