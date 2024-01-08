import Chart from 'react-apexcharts';
import {
  Box,
  Grid,
  Card,
  Stack,
  Avatar,
  Typography,
  AvatarGroup,
  CardContent,
} from '@mui/material';
import { IconMessage2 } from '@tabler/icons';
import { IconArrowUpLeft } from '@tabler/icons';
import { IconArrowDownRight } from '@tabler/icons';

const Statistics = () => {
  const primary = 'rgb(93,135,255)';
  const secondary = 'rgb(73,190,255)';
  const errorlight = 'rgb(253,237,232)';
  const successlight = 'rgb(230,255,250)';
  const secondarylight = 'rgb(232,247,255)';

  const optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 80,
      resize: true,
      barColor: '#fff',
      sparkline: {
        enabled: true,
      },
    },
    colors: [primary],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: 'flat',
        endingShape: 'flat',
        columnWidth: '60%',
        barHeight: '20%',
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2.5,
      colors: ['rgba(0,0,0,0.01)'],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
    },
  ];

  // chart
  const optionschart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 80,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [secondarylight],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
    },
  };
  const serieschart = [
    {
      name: '',
      color: secondary,
      data: [30, 25, 35, 20, 30, 40],
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              Customers
            </Typography>

            <Typography variant="h4">36,358</Typography>

            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: errorlight, width: 24, height: 24 }}>
                <IconArrowDownRight width={18} color="#FA896B" />
              </Avatar>

              <Typography variant="subtitle2" fontWeight="600">
                +9%
              </Typography>
            </Stack>
          </CardContent>

          <Chart options={optionschart} series={serieschart} type="area" height="96px" />
        </Card>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              Projects
            </Typography>
            <Typography variant="h4">78,298</Typography>
            <Stack direction="row" spacing={1} my={1} alignItems="center">
              <Avatar sx={{ bgcolor: successlight, width: 24, height: 24 }}>
                <IconArrowUpLeft width={18} color="#39B69A" />
              </Avatar>
              <Typography variant="subtitle2" fontWeight="600">
                +9%
              </Typography>
            </Stack>
            <Chart
              type="bar"
              height="80px"
              series={seriescolumnchart}
              options={optionscolumnchart}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Stack direction="row" spacing={2}>
              <Avatar
                src={
                  'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg'
                }
                alt={'ProfileImg'}
                sx={{ borderRadius: '8px', width: 70, height: 70 }}
              />
              <Box>
                <Typography variant="h5">Super awesome, Vue coming soon!</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  22 March, 2022
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mt={5}>
              <AvatarGroup max={4}>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-4.jpg'
                  }
                />
                <Avatar
                  alt="Travis Howard"
                  src={
                    'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-5.jpg'
                  }
                />
                <Avatar
                  alt="Cindy Baker"
                  src={
                    'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg'
                  }
                />
                <Avatar
                  alt="Agnes Walker"
                  src={
                    'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg'
                  }
                />
              </AvatarGroup>
              <Box
                width="40px"
                height="40px"
                bgcolor="rgb(236,242,255)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ borderRadius: '7px' }}
              >
                <Typography
                  color="primary.main"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <IconMessage2 width={22} />
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Statistics;
