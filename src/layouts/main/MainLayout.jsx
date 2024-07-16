import React from 'react';
import styled from 'styled-components';

import Navbar from '../../components/navbar/Navbar';

const MainLayoutStyled = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <Navbar />
    </MainLayoutStyled>
  );
};

export default MainLayout;
