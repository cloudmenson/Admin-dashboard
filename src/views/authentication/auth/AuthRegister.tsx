import React from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

import { IAuth } from './types';

const AuthRegister: React.FC<IAuth> = ({ title, subtitle, subtext }) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Box>
      <Stack mb={3}>
        <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="name" mb="5px">
          Name
        </Typography>
        <CustomTextField id="name" variant="outlined" fullWidth />

        <Typography
          mb="5px"
          mt="25px"
          htmlFor="email"
          fontWeight={600}
          component="label"
          variant="subtitle1"
        >
          Email Address
        </Typography>
        <CustomTextField id="email" variant="outlined" fullWidth />

        <Typography
          variant="subtitle1"
          fontWeight={600}
          component="label"
          htmlFor="password"
          mb="5px"
          mt="25px"
        >
          Password
        </Typography>
        <CustomTextField id="password" variant="outlined" fullWidth />
      </Stack>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        to="/auth/login"
      >
        Sign Up
      </Button>
    </Box>
    {subtitle}
  </>
);

export default AuthRegister;
