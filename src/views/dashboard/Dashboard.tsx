import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import Blog from './components/Blog';
import Statistics from './components/Statistics';
import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';
import EmployeeSalary from './components/EmployeeSalary';
import MonthlyEarnings from './components/MonthlyEarnings' ;
import SellingProducts from './components/SellingProducts';
import ProductPerformance from './components/ProductPerformance';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>

              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <EmployeeSalary />
          </Grid>

          <Grid item xs={12} lg={4}>
            <Statistics />
          </Grid>

          <Grid item xs={12} lg={4}>
            <SellingProducts />
          </Grid>

          <Grid item xs={12} lg={12}>
            <ProductPerformance />
          </Grid>

          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
