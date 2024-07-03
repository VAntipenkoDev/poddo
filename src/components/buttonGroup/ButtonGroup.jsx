import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: ${props => (props?.direction === 'row' ? 'row' : 'column')};
  gap: ${props => props?.gap + 'rem'};
  position: relative;
`;

export default ButtonGroup;
