import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  InputLabel,
  Checkbox,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormGroup,
  FormHelperText,
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { css } from '@emotion/react';
import { FileCopy as FileCopyIcon } from '@material-ui/icons';
import shortid from 'shortid';
import { SnackBarX } from '@components/SnackbarX';

const inputId1 = 'input__' + shortid.generate();
const inputId2 = 'input__' + shortid.generate();
const selectorId = 'select__' + shortid.generate();
const autoHideDuration = 3000;
const ROWS = 5;
const ROWS_MAX = 30;

// const selectList = [
//   { label: 'Tab Delimited', value: 'TAB' },
//   { label: '2 Spaces Indentation', value: 'SPACE_2' },
//   { label: '3 Spaces Indentation', value: 'SPACE_3' },
//   { label: '4 Spaces Indentation', value: 'SPACE_4' },
// ];
// const radioList = [
//   { label: 'English to Korean', value: 'E2K' },
//   { label: 'Korean to English', value: 'K2E' },
// ];
const inputAdornmentStyle = (theme) => css`
  align-self: start;
  margin-top: ${theme.spacing(1)}px;
`;

export const ConverterForm = ({
  selectList,
  radioList,
  onConvert,
  onClickCheckbox,
  placeholderSource,
  placeholderDestination,
  labelForSelectorShort,
  labelForSelector = 'Select Mode',
  labelForTextInputSource = '변환할 텍스트를 입력해주세요.',
  labelForTextInputDestination = '변환된 텍스트가 표시됩니다.',
  labelForCopyCompleted = '복사 완료',
  labelForClose = '닫기',
  description,
  labelForCheckbox = '',
  labelForCheckboxHelper = '',
  checkboxName,
}) => {
  const [state, setState] = useState({
    mode: selectList ? selectList[0].value : radioList[0].value,
    srcText: '',
    dstText: '',
    copySuccess: false,
    checked: false,
  });

  const handleChangeMode = (ev) => {
    const mode = ev.target.value;
    const dstText = onConvert(mode, state.srcText);
    setState({ ...state, mode, dstText, copySuccess: false });
  };

  const handleChangeText = (ev) => {
    const srcText = ev.target.value;
    const dstText = onConvert(state.mode, srcText);
    console.info(srcText, dstText);

    setState({ ...state, srcText, dstText, copySuccess: false });
  };

  const handleCopy = () => {
    setState({ ...state, copySuccess: true });
  };

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setState({ ...state, copySuccess: false });
  };

  const handleChangeCheckbox = () => {
    setState({ ...state, checked: !state.checked });
    const options = {
      checked: !state.checked,
    };
    // onClickCheckbox(state.mode, state.dstText, options);
  };

  return (
    <Box>
      {/* ****************************** */}
      {/* radiogroup element */}
      {/* ****************************** */}
      {radioList && (
        <Box
          css={css`
            margin-top: 1rem;
          `}
        >
          <FormControl component='fieldset'>
            {/* <FormLabel component='legend'>Select mode</FormLabel> */}
            <RadioGroup
              aria-label='convert-mode'
              name='mode'
              value={state.mode}
              onChange={handleChangeMode}
              css={css`
                display: flex;
                flex-flow: row nowrap;
              `}
            >
              {radioList.map(({ label, value }, idx) => {
                return (
                  <FormControlLabel
                    key={`radio__${idx}`}
                    value={value}
                    control={<Radio />}
                    label={label}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Box>
      )}
      {/* ****************************** */}
      {/* select element */}
      {/* ****************************** */}
      {selectList && (
        <Box
          css={css`
            margin-top: 1rem;
          `}
        >
          <FormControl variant='outlined'>
            <InputLabel id={selectorId}>{labelForSelectorShort}</InputLabel>
            <Select
              labelId={selectorId}
              value={state.mode}
              onChange={handleChangeMode}
              label={labelForSelectorShort}
            >
              <MenuItem value={''} disabled={true}>
                <em>{labelForSelector}</em>
              </MenuItem>
              {selectList.map(({ value, label }, idx) => (
                <MenuItem key={`menu__${idx}`} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}

      {/* ****************************** */}
      {/* checkbox elements */}
      {/* ****************************** */}
      {checkboxName && (
        <FormControl component='fieldset'>
          {/* <FormLabel component='legend'>{XXX}</FormLabel> */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checked}
                  onChange={handleChangeCheckbox}
                  name={checkboxName}
                />
              }
              label={labelForCheckbox}
            />
          </FormGroup>
          <FormHelperText>{labelForCheckboxHelper}</FormHelperText>
        </FormControl>
      )}
      {/* ****************************** */}
      {/* input elements */}
      {/* ****************************** */}
      <Box
        css={css`
          margin-top: 1rem;
          display: flex;
          flex-flow: row nowrap;
          /* justify-content: center; */
        `}
      >
        <FormControl
          variant='outlined'
          css={css`
            flex: 1;
            margin-right: 0.5rem;
            resize: both;
          `}
        >
          <InputLabel htmlFor={inputId1}>{labelForTextInputSource}</InputLabel>
          <OutlinedInput
            title={placeholderDestination}
            multiline={true}
            id={inputId1}
            value={state.srcText}
            onChange={handleChangeText}
            fullWidth={false}
            readOnly={false}
            rows={ROWS}
            placeholder={placeholderSource}
            // notched={false}
            rowsMax={ROWS_MAX}
            endAdornment={
              <InputAdornment position='end' css={inputAdornmentStyle}>
                <CopyToClipboard text={state.srcText} onCopy={handleCopy}>
                  <IconButton
                    disabled={!(state.srcText && state.srcText.length > 0)}
                    aria-label='copy'
                    edge='end'
                  >
                    <FileCopyIcon />
                  </IconButton>
                </CopyToClipboard>
              </InputAdornment>
            }
            label={labelForTextInputSource} // required for recalculate dummy width
          />
        </FormControl>
        <FormControl
          variant='outlined'
          css={css`
            flex: 1;
          `}
        >
          <InputLabel htmlFor={inputId2}>
            {labelForTextInputDestination}
          </InputLabel>
          <OutlinedInput
            title={placeholderDestination}
            multiline={true}
            id={inputId2}
            value={state.dstText}
            // onChange={}
            fullWidth={false}
            readOnly={true}
            rows={ROWS}
            placeholder={placeholderDestination}
            // notched={true}
            rowsMax={ROWS_MAX}
            endAdornment={
              <InputAdornment position='end' css={inputAdornmentStyle}>
                <CopyToClipboard text={state.dstText} onCopy={handleCopy}>
                  <IconButton
                    disabled={!(state.dstText && state.dstText.length > 0)}
                    aria-label='copy'
                    edge='end'
                  >
                    <FileCopyIcon />
                  </IconButton>
                </CopyToClipboard>
              </InputAdornment>
            }
            label={labelForTextInputDestination}
          />
        </FormControl>
      </Box>
      {/* ****************************** */}
      {/* description elements */}
      {/* ****************************** */}
      {description}
      {/* ****************************** */}
      {/* snack elements */}
      {/* ****************************** */}
      <SnackBarX
        onClose={handleClose}
        open={state.copySuccess}
        message={labelForCopyCompleted}
        closeText={labelForClose}
        severity={'success'}
        autoHideDuration={autoHideDuration}
      />
    </Box>
  );
};

ConverterForm.propTypes = {
  description: PropTypes.element,
  onConvert: PropTypes.func.isRequired,
  selectList: PropTypes.array,
  radioList: PropTypes.array,
  placeholderSource: PropTypes.string,
  placeholderDestination: PropTypes.string,
  labelForSelectorShort: PropTypes.string,
  labelForSelectorShort: PropTypes.string,
  labelForSelector: PropTypes.string,
  labelForTextInputSource: PropTypes.string,
  labelForTextInputDestination: PropTypes.string,
  labelForCopyCompleted: PropTypes.string,
  labelForClose: PropTypes.string,
  // PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  // PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  // PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};
