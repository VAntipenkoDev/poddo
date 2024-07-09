import React from 'react';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage/ErrorMessage';

const InputBlockStyled = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme: { colors } }) => colors.lightGray};
    font-family: 'MontserratMedium';
    margin-bottom: 0.8rem;
  }

  input {
    background-color: ${({ theme: { colors } }) => colors.midnightBlue};
    border-radius: ${({ theme: { borderRadius } }) =>
      borderRadius.inputBorderRadius};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.inputFontSize};
    color: ${({ theme: { colors } }) => colors.mediumGray};
    outline: none;
    padding: ${({ icon }) => (icon ? '1rem 3rem' : '1rem 1rem')};
    position: relative;
    background-image: url(${props => props?.icon});
    background-repeat: no-repeat;
    background-position: 1.1rem center;
  }
`;

const Input = ({
  label,
  type = 'text',
  icon,
  placeholder,
  name,
  value,
  handleChange,
  errorMsg,
  defaultValue,
}) => (
  <InputBlockStyled hasError={!!errorMsg} icon={icon}>
    {label && <label>{label}</label>}
    <input
      onChange={handleChange}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
      defaultValue={defaultValue}
    />
    {!!errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
  </InputBlockStyled>
);

export default Input;
