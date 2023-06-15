import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';

const SelectInput = ({ field, form, name, options, disabled=false, isTextArea=false, ...rest }) => {
  
  return (
    <FormControl>
      <Select
      variant='outlined'
      name={name}
      value={field.value}
      {...field}
      {...rest}
      style={{width: '22rem'}}
      >
        {
          options.map((option, ind) => (
            <MenuItem key={option.value} value={option.value} disabled={ind === 0}>{option.key}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
);
};

export default SelectInput;
