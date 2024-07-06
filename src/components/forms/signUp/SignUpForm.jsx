import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import ButtonGroup from '../../buttonGroup/ButtonGroup';
import Input from '../../input/Input';
import Select from '../../select/Select';
import { FormStyled } from '../login/LoginForm';
import { ProfileSVG } from '../../../assets/icons/index';
import Button from '../../button/Button';
import DatePicker from '../../dataPicker/DatePicker';
import SignUpSchema from './validation';

const SignUpForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      gender: '',
      day: '',
      month: '',
      year: '',
    },
    onSubmit: values => {
      navigate('/favorite-game');
    },
    validationSchema: SignUpSchema,
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <ButtonGroup gap={2}>
        <Input
          icon={ProfileSVG}
          label="Name"
          placeholder="Please Enter your Username"
          name="name"
          value={formik.values.name}
          handleChange={formik.handleChange}
          errorMsg={formik.errors.name}
        />
        <Select
          icon={ProfileSVG}
          label="Gender"
          placeholder="Please Select your Gender"
          options={{
            Male: 'male',
            Female: 'female',
            'Prefer not to say': 'prefer_not_to_say',
          }}
          handleChange={() => {}}
        />
        <DatePicker
          onChange={formik.setFieldValue}
          label="Birthday"
          errors={{
            day: formik?.errors?.day ? 'Day' : '',
            month: formik?.errors?.month ? 'Month' : '',
            year: formik?.errors?.year ? 'Year' : '',
          }}
          values={{
            day: formik?.values?.day,
            month: formik?.values?.month,
            year: formik?.values?.year,
          }}
        />
      </ButtonGroup>
      <Button onClick={formik.handleSubmit} $fullWidth>
        Next
      </Button>
    </FormStyled>
  );
};

export default SignUpForm;
