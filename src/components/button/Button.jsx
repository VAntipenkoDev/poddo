import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 0.9rem;
  width: ${props => (props?.$fullWidth ? '100%' : '')};
  border-radius: ${({ theme: { borderRadius } }) =>
    borderRadius.buttonBorderRadius};
  color: ${({ theme: { colors } }) => colors.white};
  font-family: 'MontserratSemiBold';
  background: ${({ theme: { gradients } }) => gradients.button};
  cursor: pointer;
`;

const Button = ({ children, onClick, $fullWidth }) => (
  <ButtonStyled $fullWidth={$fullWidth} onClick={onClick}>
    {children}
  </ButtonStyled>
);

export default Button;
