import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import FormikControl from './FormikControl';

const FormikContainer = ({ inputs=[], submitBtn='Submit' }) => {
    console.log('inputsBuilder')
    const [inputsBuilder, setInputsBuilder] = useState([{
        label: 'Name',
        name: 'name',
        type: 'input',
        control: 'input',
        placeholder: 'Enter your name',
        validation: Yup.string().required('Name is required'),
    }]);

    const initialValues = { };
    const validationSchema = Yup.object({ });

    inputsBuilder?.map((input) => {
        switch (input.type) {
            case 'number':
                initialValues[input.name] = 0;
                break;
            case 'checkbox':
                initialValues[input.name] = [];
                break;
            case 'date':
                initialValues[input.name] = null;
                break;
                
            default:
                initialValues[input.name] = '';
                break;
        }
        validationSchema.fields[input.name] = input.validation;
        validationSchema._nodes.push(input.name);
    })

    const onSubmit = (values) => {
        console.log(values);
    }

    useEffect(() => {
        setInputsBuilder(inputs);
    }, [inputs])

    console.log(inputsBuilder)

	return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
            {({ errors }) => (
                <Form>
                    {inputsBuilder?.map((input, key) => (
                        <FormikControl 
                            key={key} 
                            name={input.name} 
                            label={input.label} 
                            type={input?.type} 
                            control={input.control} 
                            placeholder={input?.placeholder} 
                            disabled={input?.disabled} 
                            isTextArea={input?.isTextArea} 
                            required={input?.required}
                            options={input?.options}
                            errors={errors} 
                        />
                    ))}
                    <button type='submit'>{submitBtn}</button>
                </Form>
            )}
    </Formik>
  );
};

export default FormikContainer;