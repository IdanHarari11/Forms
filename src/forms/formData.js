import * as Yup from 'yup';

const inputsArray = [
  {
    label: 'Name',
    name: 'name',
    type: 'input',
    control: 'input',
    placeholder: 'Enter your name',
    autoComplete: 'name',
    validation: Yup.string().required('Name is required'),
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    control: 'input',
    placeholder: 'Enter your email',
    autoComplete: 'email',
    validation: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    control: 'input',
    placeholder: 'Enter your password',
    autoComplete: 'new-password',
    validation: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  },
  {
    label: 'Confirm Password',
    name: 'confirmPassword',
    type: 'password',
    control: 'input',
    placeholder: 'Confirm your password',
    autoComplete: 'new-password',
    validation: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Passwords must match')
      .required('Confirm Password is required'),
  },
  {
    label: 'Address',
    name: 'address',
    type: 'textarea',
    control: 'textarea',
    placeholder: 'Enter your address',
    autoComplete: 'address-line1',
    validation: Yup.string().required('Address is required'),
  },
  {
    label: 'Select your country',
    name: 'country',
    type: 'select',
    control: 'select',
    placeholder: 'Select your country',
    options: [
      { key: 'Select an option', value: '' },
      { key: 'India', value: 'India' },
      { key: 'USA', value: 'USA' },
      { key: 'UK', value: 'UK' },
    ],
    validation: Yup.string().required('Country is required'),
  },
  {
    label: 'Gender',
    name: 'Gender',
    type: 'radio',
    control: 'radio',
    options: [
      { key: 'Male', value: 'Male' },
      { key: 'Female', value: 'Female'}
    ],
    validation: Yup.string().required('Gender is required')
  },
  {
    label: 'Skills',
    name: 'skills',
    type: 'checkbox',
    control: 'checkbox',
    options: [
      { key: 'HTML', value: 'HTML' },
      { key: 'CSS', value: 'CSS' },
      { key: 'JavaScript', value: 'JavaScript' },
    ],
    validation: Yup.array().required('Skills are required'),
  },
  {
    label: 'Date of Birth',
    name: 'dob',
    type: 'date',
    control: 'date',
    placeholder: 'Select your date of birth',
    autoComplete: "birthdate",
    validation: Yup.date().required('Date of Birth is required'),
  },
];

export default inputsArray;