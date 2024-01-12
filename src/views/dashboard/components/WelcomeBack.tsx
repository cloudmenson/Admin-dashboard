import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const Banner1 = () => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: '#ebf3fe',
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
              <Typography variant="h5">Welcome back User!</Typography>
              <Typography variant="subtitle1" color="textSecondary" my={2}>
                You have earned 62% more than last month which is great thing.
              </Typography>
              <Button variant="contained" color="primary">
                Check
              </Button>
            </Box>
          </Grid>
          <Grid item sm={5}>
            <Box mb="-30px">
              <img
                src={
                  'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/welcome-bg2.png'
                }
                alt={'trackBg'}
                width={260}
                height={180}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Banner1;
