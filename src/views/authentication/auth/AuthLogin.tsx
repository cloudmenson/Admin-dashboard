import React from 'react';
import {
  Box,
  Stack,
  Button,
  Checkbox,
  FormGroup,
  Typography,
  FormControlLabel,
} from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

import { IAuth } from './types';

const AuthLogin: React.FC<IAuth> = ({ title, subtitle, subtext }) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <Box>
        <Typography
          mb="5px"
          fontWeight={600}
          component="label"
          htmlFor="username"
          variant="subtitle1"
        >
          Username
        </Typography>

        <CustomTextField id="username" variant="outlined" fullWidth />
      </Box>
      <Box mt="25px">
        <Typography
          mb="5px"
          fontWeight={600}
          component="label"
          htmlFor="password"
          variant="subtitle1"
        >
          Password
        </Typography>

        <CustomTextField id="password" type="password" variant="outlined" fullWidth />
      </Box>

      <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
        <FormGroup>
          <FormControlLabel label="Remeber this Device" control={<Checkbox defaultChecked />} />
        </FormGroup>

        <Typography
          component={Link}
          to="/"
          fontWeight="500"
          sx={{
            textDecoration: 'none',
            color: 'primary.main',
          }}
        >
          Forgot Password ?
        </Typography>
      </Stack>
    </Stack>

    <Box>
      <Button
        to="/"
        fullWidth
        size="large"
        type="submit"
        color="primary"
        component={Link}
        variant="contained"
      >
        Sign In
      </Button>
    </Box>

    {subtitle}
  </>
);

export default AuthLogin;
