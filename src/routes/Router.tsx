import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';

const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

const Shop = Loadable(lazy(() => import('../views/shop/Shop')));
const Blog = Loadable(lazy(() => import('../views/blog/Blog')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const Ecommerce = Loadable(lazy(() => import('../views/ecommerce/Ecommerce')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/ecommerce', exact: true, element: <Ecommerce /> },
      { path: '/event-feed/blog/posts', exact: true, element: <Blog /> },
      { path: '/event-feed/shop', exact: true, element: <Shop /> },

      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
