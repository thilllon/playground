import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, Container, Link } from '@material-ui/core';
import styled from '@emotion/styled';
import { kohmaList } from '@utils/kohmasutra/kohmasutra';
import { css } from '@emotion/react';
import { backendUrl } from '@utils/config';

const strings = {
  PREV: '이전글',
  NEXT: '다음글',
  PREV_POST: '이전 포스트',
  NEXT_POST: '다음 포스트',
};

export const PrevNextButton = ({ type, postId }) => {
  const label = type === 'next' ? strings.NEXT : strings.PREV;
  const id = Number(postId);

  let disabled, href;
  if (type === 'next') {
    disabled = id === 100;
    href = backendUrl + '/kohmasutra/posts/' + (id + 1);
  } else if (type === 'prev') {
    disabled = id === 1;
    href = backendUrl + '/kohmasutra/posts/' + (id - 1);
  } else {
    throw new Error();
  }

  // const makeOnClick = (type, id) => () => {
  //   if (id < 100) {
  //     router.push(`${backendUrl}/kohmasutra/cards/${id + 1}`);
  //   } else if (id > 1) {
  //     router.push(`${backendUrl}/kohmasutra/cards/${id - 1}`);
  //   }
  // };

  return (
    <Button
      css={css`
        font-size: 1rem;
        font-weight: bolder;
        /* margin: ${(props) => props.spacing(1) + 'px'}; */
      `}
      // onClick={makeOnClick(type)}
      disabled={disabled}
      component={Link}
      href={disabled ? undefined : href}
    >
      {label}
    </Button>
  );
};

PrevNextButton.propTypes = {
  type: PropTypes.oneOf(['next', 'prev']).isRequired,
  postId: PropTypes.string.isRequired,
};
