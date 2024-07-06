import styled from 'styled-components';

const ErrorMessage = styled.span`
  font-family: 'MontserratRegular', sans-serif;
  color: ${({ theme: { colors } }) => colors.red};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.inputFontSize};
  display: block;
  margin-top: 0.7rem;
`;

export default ErrorMessage;
