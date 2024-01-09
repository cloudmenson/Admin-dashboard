import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';

import AuthLogin from './auth/AuthLogin';
import Logo from 'src/layouts/full/shared/logo/Logo';
import PageContainer from 'src/components/container/PageContainer';

const Login2 = () => {
  return (
    <PageContainer title="Login" description="Login page">
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            width: '100%',
            height: '100%',
            opacity: '0.3',
            position: 'absolute',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            lg={4}
            xl={3}
            xs={12}
            sm={12}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>

              <AuthLogin
                subtext={
                  <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                    Your Social Campaigns
                  </Typography>
                }
                subtitle={
                  <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Create an account
                    </Typography>
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
