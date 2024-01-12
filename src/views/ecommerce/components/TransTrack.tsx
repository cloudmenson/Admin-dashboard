import React from 'react';
import { Card, CardContent, Typography, Button, Box, Grid } from '@mui/material';

const TransTrack = () => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: 'rgb(232,247,255)',
        py: 0,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <CardContent sx={{ p: '30px' }}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item sm={6} display="flex" alignItems="center">
            <Box
              sx={{
                textAlign: {
                  xs: 'center',
                  sm: 'left',
                },
              }}
            >
              <Typography variant="h5">Track your every Transaction Easily</Typography>

              <Typography variant="subtitle1" color="textSecondary" my={2}>
                Track and record your every income and expence easily to control your balance
              </Typography>

              <Button variant="contained" color="primary">
                Download
              </Button>
            </Box>
          </Grid>

          <Grid item sm={4}>
            <Box mb="-150px">
              <img
                src={
                  'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/track-bg.png'
                }
                alt={'trackBg'}
                width={140}
                height={160}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TransTrack;
