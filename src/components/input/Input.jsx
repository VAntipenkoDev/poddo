import React from 'react';
import styled from 'styled-components';

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
    font-family: 'MontserratRegular', sans-serif;
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
}) => (
  <InputBlockStyled icon={icon}>
    {label && <label>{label}</label>}
    <input
      onChange={handleChange}
      value={value}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  </InputBlockStyled>
);

export default Input;
