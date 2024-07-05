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
      birthday: '',
    },
    onSubmit: () => {
      console.log(formik.errors);
    },
    validationSchema: SignUpSchema,
  });

  return (
    <FormStyled>
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
        <DatePicker label="Birthday" $errorMsg={formik.errors} />
      </ButtonGroup>
      <Button
        onClick={() => {
          formik.validateForm().then(data => {
            if (!!Object.keys(data).length) {
              return;
            }
            navigate('/favorite-game');
          });
        }}
        $fullWidth
      >
        Next
      </Button>
    </FormStyled>
  );
};

export default SignUpForm;
