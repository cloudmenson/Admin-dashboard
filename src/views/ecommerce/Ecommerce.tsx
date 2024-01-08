import React from 'react';
import { Grid, Box } from '@mui/material';

import WeeklyStats from './components/WeeklyStats';
import SalesOverview from './components/SalesOverview';
import RevenueUpdates from './components/RevenueUpdates';
import PaymentProduct from './components/PaymentProduct';
import PaymentGateways from './components/PaymentGateways';
import InvoiceManagement from './components/InvoiceManagement';
import RecentTransactions from './components/RecentTransactions';
import PageContainer from 'src/components/container/PageContainer';

const Ecommerce = () => {
  return (
    <PageContainer title="Ecommerce" description="Ecommerce page">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <RevenueUpdates />
          </Grid>

          <Grid item xs={12} lg={4}>
            <SalesOverview />
          </Grid>

          <Grid item xs={12} lg={4}>
            <PaymentProduct />
          </Grid>

          <Grid item xs={12} lg={4}>
            <WeeklyStats />
          </Grid>

          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>

          <Grid item xs={12} lg={4}>
            <PaymentGateways />
          </Grid>

          <Grid item xs={12} lg={12}>
            <InvoiceManagement />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Ecommerce;
