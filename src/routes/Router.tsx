import React from 'react';
import { Navigate } from 'react-router-dom';

import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = React.lazy(() => import('../layouts/full/FullLayout'));

const BlankLayout = React.lazy(() => import('../layouts/blank/BlankLayout'));

/* ****Pages***** */
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));

const Ecommerce = React.lazy(() => import('../views/ecommerce/Ecommerce'));

// const SamplePage = React.lazy(() => import('../views/sample-page/SamplePage'));

const Error = React.lazy(() => import('../views/authentication/Error'));

const Register = React.lazy(() => import('../views/authentication/Register'));

const Login = React.lazy(() => import('../views/authentication/Login'));

const Router = [
 {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/ecommerce', exact: true, element: <Ecommerce /> },
      // { path: '/sample-page', exact: true, element: <SamplePage /> },
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