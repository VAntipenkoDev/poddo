import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../../input/Input';
import ButtonGroup from '../../buttonGroup/ButtonGroup';
import Button from '../../button/Button';
import LoginSchema from './validation';
import { MassageSVG, UnlockSVG } from '../../../assets/icons/index';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4rem;
  height: -webkit-fill-available;
`;

const LinkStyle = styled.a`
  a {
    color: ${({ theme: { colors } }) => colors.lightSlateBlue};
    font-family: 'MontserratRegular', sans-serif;
  }
`;

const ContactUsStyled = styled.a`
  color: ${({ theme: { colors } }) => colors.mediumGray};
  font-family: 'MontserratRegular', sans-serif;
  text-align: center;
  margin-top: 2rem;
  cursor: pointer;
`;

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      console.log('values', values);
    },
    validationSchema: LoginSchema,
  });

  return (
    <FormStyled>
      <ButtonGroup gap={2}>
        <Input
          icon={MassageSVG}
          label="Email Address"
          placeholder="Please Enter your Email"
          handleChange={formik.handleChange}
          name="login"
          value={formik.values.login}
          errorMsg={formik.errors.login}
        />
        <Input
          name="password"
          icon={UnlockSVG}
          label="Password"
          placeholder="Please Enter your Password"
          type="password"
          handleChange={formik.handleChange}
          value={formik.values.password}
          errorMsg={formik.errors.password}
        />
        <LinkStyle>
          <Link to="">Forgot Password?</Link>
        </LinkStyle>
      </ButtonGroup>
      <ButtonGroup gap={1}>
        <Button onClick={formik.handleSubmit} fullWidth>
          Login
        </Button>
        <ContactUsStyled>Contact Us</ContactUsStyled>
      </ButtonGroup>
    </FormStyled>
  );
};

export default LoginForm;
