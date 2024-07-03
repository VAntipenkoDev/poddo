import React from 'react';
import styled from 'styled-components';
import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';

const Wrapper = styled.div`
  min-height: 100%;
  height: 100%;
  overflow: hidden;
`;

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
