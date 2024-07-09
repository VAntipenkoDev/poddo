import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ButtonGroup from '../../buttonGroup/ButtonGroup';
import Input from '../../input/Input';
import Select from '../../select/Select';
import { FormStyled } from '../login/LoginForm';
import { ProfileSVG } from '../../../assets/icons/index';
import Button from '../../button/Button';
import DatePicker from '../../dataPicker/DatePicker';
import SignUpSchema from './validation';
import { signUp } from '../../../redux/reducers/signUpReducer';

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, gender, day, month, year } = useSelector(
    ({ signUp: { name, gender, birthday, day, month, year } }) => {
      return { name, gender, day, month, year };
    },
  );

  const formik = useFormik({
    initialValues: {
      name: name,
      gender: gender,
      day: day,
      month: month,
      year: year,
    },
    onSubmit: values => {
      dispatch(signUp(values));
      navigate('/favorite-game');
    },
    validationSchema: SignUpSchema,
    enableReinitialize: true,
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <ButtonGroup gap={2}>
        <Input
          icon={ProfileSVG}
          label="Name"
          placeholder="Please Enter your Username"
          name="name"
          value={name ? name : formik.values.name}
          handleChange={formik.handleChange}
          errorMsg={formik.errors.name}
        />
        <Select
          icon={ProfileSVG}
          label="Gender"
          placeholder="Please Select your Gender"
          name="gender"
          options={{
            Male: 'male',
            Female: 'female',
            'Prefer not to say': 'prefer_not_to_say',
          }}
          handleChange={formik.setFieldValue}
          value={formik.values.gender}
          defaultValue={gender}
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
          defaultValue={{ day, month, year }}
        />
      </ButtonGroup>
      <Button onClick={formik.handleSubmit} $fullWidth>
        Next
      </Button>
    </FormStyled>
  );
};

export default SignUpForm;
