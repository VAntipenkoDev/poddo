import React from 'react';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';

import Tabs from '../../components/tabs/Tabs';
import authorizationImage from '../../assets/images/image.png';

const AuthorizationLayoutStyle = styled.div`
  max-width: 1400px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const ContentStyle = styled.div`
  padding: 5rem;
  background: #272932;
  width: 100%;
  max-height: 100%;
`;

const AuthorizationImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const AuthorizationLayout = () => {
  const { pathname } = useLocation();

  return (
    <AuthorizationLayoutStyle>
      <ContentStyle>
        {'/favorite-game' !== pathname && (
          <Tabs
            tabs={[
              { name: 'LOGIN', url: '/' },
              { name: 'SIGN UP', url: '/sign-up' },
            ]}
          />
        )}
        <Outlet />
      </ContentStyle>
      <AuthorizationImage>
        <img src={`${authorizationImage}`} alt="" />
      </AuthorizationImage>
    </AuthorizationLayoutStyle>
  );
};

export default AuthorizationLayout;
