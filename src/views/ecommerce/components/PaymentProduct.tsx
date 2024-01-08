import Chart from 'react-apexcharts';
import { IconArrowUpLeft } from '@tabler/icons';
import { Card, CardContent, Typography, Stack, Avatar, Grid } from '@mui/material';

const PaymentProduct = () => {
  const success = 'rgb(19,222,185)';
  const successlight = 'rgb(230,255,250)';

  const optionscolumnchart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 85,
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
      colors: [successlight],
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
  const seriescolumnchart = [
    {
      name: '',
      color: success,
      data: [30, 25, 35, 20, 30, 40],
    },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Avatar
              variant="rounded"
              sx={{
                bgcolor: 'rgb(236,242,255)',
                width: 40,
                height: 40,
              }}
            >
              <Avatar
                src={
                  'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-paypal.svg'
                }
                alt={'icon1Img'}
                sx={{ width: 24, height: 24 }}
              />
            </Avatar>
            <Typography variant="subtitle2" color="textSecondary" mt={3}>
              Payments
            </Typography>
            <Typography variant="h5">$678,298</Typography>
            <Stack direction="row" spacing={1} mt={1} alignItems="center">
              <Avatar sx={{ bgcolor: successlight, width: 20, height: 20 }}>
                <IconArrowUpLeft width={16} color="#39B69A" />
              </Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                +9%
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              Products Sold
            </Typography>
            <Typography variant="h5">$678,298</Typography>
          </CardContent>
          <Chart
            type="area"
            height="186px"
            series={seriescolumnchart}
            options={optionscolumnchart}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default PaymentProduct;
