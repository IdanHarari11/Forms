import React from 'react';
import { TextField } from '@material-ui/core';

const TextFieldInput = ({ field, form, placeholder='PlaceHolder', disabled=false, isTextArea=false, errors, ...rest }) => {
  return (
    <TextField 
      placeholder={placeholder}
      disabled={disabled}
      multiline={isTextArea} 
      rows={4}
      id="outlined-error"
      label={`${field.label}`}
      autoComplete={field.autoComplete}
      {...field}
      {...rest}
    />
  );
};

export default TextFieldInput;
