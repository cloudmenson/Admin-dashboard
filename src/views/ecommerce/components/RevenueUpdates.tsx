import React from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-i18next';
import { Stack, Typography, Avatar, Box, Card, CardHeader, CardContent } from '@mui/material';

const RevenueUpdates: React.FC = () => {
  const { t } = useTranslation();
  const primary = 'rgb(93, 135, 255)';
  const secondary = 'rgb(73,190,255)';

  const optionscolumnchart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 320,
      offsetX: -20,
      stacked: true,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '60%',
        columnWidth: '20%',
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all',
      },
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: -5,
      max: 5,
      tickAmount: 4,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart: any = [
    {
      name: 'Footware',
      data: [2.5, 3.7, 3.2, 2.6, 1.9],
    },
    {
      name: 'Fashionware',
      data: [-2.8, -1.1, -3.0, -1.5, -1.9],
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title={t('revenue-updates.title')}
        subheader={t('revenue-updates.subheader')}
        titleTypographyProps={{ fontSize: '18px' }}
      />

      <CardContent>
        <Stack direction="row" spacing={3}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{
                width: 9,
                height: 9,
                bgcolor: primary,
                svg: { display: 'none' },
              }}
            />

            <Box>
              <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
                Footware
              </Typography>
            </Box>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{
                width: 9,
                height: 9,
                bgcolor: secondary,
                svg: { display: 'none' },
              }}
            />

            <Box>
              <Typography variant="subtitle2" fontSize="12px" color="textSecondary">
                {t('revenue-updates.fashionware')}
              </Typography>
            </Box>
          </Stack>
        </Stack>
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="320px" />
      </CardContent>
    </Card>
  );
};

export default RevenueUpdates;
