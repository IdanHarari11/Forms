import React from 'react';
import { FastField, ErrorMessage } from 'formik';
import TextError from './TextError';
import { Box } from '@material-ui/core';
import TextFieldInput from './UI/TextFieldInput';

const InputFormik = ({ label, name, required=true, ...rest }) => {

    return (
        <div className='form-control'>
            {/* <Box style={{display: 'flex', justifyContent: 'space-between', width: '22rem'}}>
                <label htmlFor={name}>
                    {required ? <b style={{color: 'red'}}>* </b> : null } 
                    {label}
                </label>
            </Box>  */}

            {/* <label htmlFor={name}>{label}</label> */}
            
            <FastField component={TextFieldInput} id={name} name={name} label={label} {...rest} style={{width: 350, lineHeight: '1.4375em'}} />
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default InputFormik;
