import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AuthorizationLayout from '../layouts/authorization/AuthorizationLayout';
import LoginPage from '../pages/authorization/LoginPage';
import SignUpPage from '../pages/authorization/SignUpPage';
import FavoriteGamesPage from '../pages/authorization/FavoriteGamesPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthorizationLayout />,
    children: [
      { path: '/', element: <LoginPage /> },
      { path: 'sign-up', element: <SignUpPage /> },
      { path: '/favorite-game', element: <FavoriteGamesPage /> },
    ],
  },
]);
