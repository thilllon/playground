import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Link } from '@material-ui/core';
import { css } from '@emotion/react';
import { subdirectoryUrl } from '@utils/config';

const strings = {
  // PREV: '이전글',
  // NEXT: '다음글',
  // PREV_POST: '이전 포스트',
  // NEXT_POST: '다음 포스트',
  PREV: 'Previous',
  NEXT: 'Next',
  PREV_POST: 'Previous post',
  NEXT_POST: 'Next post',
};

export const PrevNextButton = ({ type, postId }) => {
  const label = type === 'next' ? strings.NEXT : strings.PREV;
  const id = Number(postId);

  let disabled, href;
  switch (type) {
    case 'next':
      disabled = id === 100;
      href = `${subdirectoryUrl}/kohmasutra/posts/${id + 1}`;
      break;
    case 'prev':
      disabled = id === 1;
      href = `${subdirectoryUrl}/kohmasutra/posts/${id - 1}`;
      break;
    default:
      throw new Error();
  }

  const makeOnClick = (type, id) => () => {
    if (id < 100) {
      router.push(`${subdirectoryUrl}/kohmasutra/cards/${id + 1}`);
    } else if (id > 1) {
      router.push(`${subdirectoryUrl}/kohmasutra/cards/${id - 1}`);
    }
  };

  return (
    <Button
      css={css`
        font-size: 1rem;
        font-weight: bolder;
        /* margin: ${theme.spacing(1) + 'px'}; */
      `}
      // onClick={makeOnClick(type, id)}
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
