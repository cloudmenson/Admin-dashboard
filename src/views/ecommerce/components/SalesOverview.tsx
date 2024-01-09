import React from 'react';
import Chart from 'react-apexcharts';
import { IconGridDots } from '@tabler/icons';
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Box, Card, CardHeader, CardContent } from '@mui/material';

const SalesOverview: React.FC = () => {
  const theme = useTheme();
  const primary = 'rgb(93, 135, 255)';
  const secondary = 'rgb(73,190,255)';
  const primarylight = 'rgb(236,242,255)';
  const textColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.8)' : '#2A3547';

  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",

      toolbar: {
        show: false,
      },
      height: 275,
    },
    labels: ['Profit', 'Revenue', 'Expance'],
    colors: [primary, primarylight, secondary],
    plotOptions: {
      pie: {
        donut: {
          size: '89%',
          background: 'transparent',

          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 7,
            },
            value: {
              show: false,
            },
            total: {
              show: true,
              color: textColor,
              fontSize: '20px',
              fontWeight: '600',
              label: '$500,458',
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false,
    },
  };
  const seriescolumnchart = [55, 55, 55];

  return (
    <Card variant="outlined">
      <CardHeader
        title="Sales Overview"
        subheader="Every month"
        titleTypographyProps={{ fontSize: '18px' }}
      />

      <Box mt={3}>
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="donut"
          height="254px"
        />
      </Box>

      <CardContent>
        <Stack direction="row" spacing={2} justifyContent="space-between" mt={7}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={38}
              height={38}
              bgcolor="rgb(236,242,255)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ borderRadius: '7px' }}
            >
              <Typography
                color="rgb(93, 135, 255)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconGridDots width={22} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="600">
                $23,450
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Profit
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box
              width={38}
              height={38}
              bgcolor="rgb(232,247,255)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ borderRadius: '7px' }}
            >
              <Typography
                color="rgb(73,190,255)"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <IconGridDots width={22} />
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight="600">
                $23,450
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Expance
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SalesOverview;
