import React from 'react';
import CheckboxGrpFormik from './components/CheckboxGrpFormik';
import DatePickerFormik from './components/DatePickerFormik';
import InputFormik from './components/InputFormik';
import RadioBtnsFormik from './components/RadioBtnsFormik';
import SelectFormik from './components/SelectFormik';
import TextAreaFormik from './components/TextAreaFormik';

const FormikControl = ({ control, ...rest }) => {
    switch (control) {
        case 'input':
            return <InputFormik {...rest} />;
        case 'textarea':
            return <TextAreaFormik {...rest} />;
        case 'select':
            return <SelectFormik {...rest} />;
        case 'radio':
            return <RadioBtnsFormik {...rest} />;
        case 'checkbox':
            return <CheckboxGrpFormik {...rest} />;
        case 'date':
            return <DatePickerFormik {...rest} />;

        default:
            return <InputFormik {...rest} />;
    }
};

export default FormikControl;
