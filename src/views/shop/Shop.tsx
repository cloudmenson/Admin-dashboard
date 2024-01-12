import React from 'react';
import { Grid, Box } from '@mui/material';

import ShopCard from './components/ShopCard';
import PageContainer from 'src/components/container/PageContainer';

const Shop = () => {
  return (
    <PageContainer title="Shop" description="Shop">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <ShopCard />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Shop;
