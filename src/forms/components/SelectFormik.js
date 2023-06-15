import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from './TextError';
import SelectInput from './UI/SelectInput';
import { InputLabel } from '@material-ui/core';

const SelectFormik = ({ label, name, required=true, ...rest }) => {
  return (
    <div className='form-control'>
        <InputLabel htmlFor={name}>
          {required ? <b style={{color: 'red'}}>* </b> : null }
          {label}
        </InputLabel>
        <FastField component={SelectInput} id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError} />
    </div>
    );
};

export default SelectFormik;
