import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import Input from '../../input/Input';
import ButtonGroup from '../../buttonGroup/ButtonGroup';
import Button from '../../button/Button';
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
  const fokmik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      console.log('values', values);
    },
  });

  return (
    <FormStyled>
      <ButtonGroup gap={2}>
        <Input
          icon={MassageSVG}
          label="Email Address"
          placeholder="Please Enter your Email"
          handleChange={fokmik.handleChange}
          name="login"
          value={fokmik.values.login}
        />
        <Input
          name="password"
          icon={UnlockSVG}
          label="Password"
          placeholder="Please Enter your Password"
          type="password"
          handleChange={fokmik.handleChange}
          value={fokmik.values.password}
        />
        <LinkStyle>
          <Link to="">Forgot Password?</Link>
        </LinkStyle>
      </ButtonGroup>
      <ButtonGroup gap={1}>
        <Button onClick={fokmik.handleSubmit} fullWidth>
          Login
        </Button>
        <ContactUsStyled>Contact Us</ContactUsStyled>
      </ButtonGroup>
    </FormStyled>
  );
};

export default LoginForm;
