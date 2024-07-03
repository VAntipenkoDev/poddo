import styled from 'styled-components';

const Label = styled.label`
  display: block;
  color: ${({ theme: { colors } }) => colors.lightGray};
  font-family: 'MontserratMedium';
  margin-bottom: 0.8rem;
`;

export default Label;
