import React from 'react';
import styled from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from './router/router';
import { store } from './redux/store';

const Wrapper = styled.div`
  min-height: 100%;
  height: 100%;
  overflow: hidden;
`;

function App() {
  return (
    <Wrapper>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Wrapper>
  );
}

export default App;
