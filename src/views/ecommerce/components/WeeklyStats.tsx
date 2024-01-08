import Chart from 'react-apexcharts';
import { IconGridDots } from '@tabler/icons';
import { Stack, Typography, Avatar, Box, Card, CardHeader, CardContent } from '@mui/material';

const WeeklyStats = () => {
  const primary = 'rgb(93, 135, 255)';
  const primarylight = 'rgb(236,242,255)';
  const error = 'rgb(250,137,107)';
  const errorlight = 'rgb(253,237,232)';
  const secondary = 'rgb(73,190,255)';
  const secondarylight = 'rgb(232,247,255)';

  const optionscolumnchart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 130,
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
      type: 'gradient',
      gradient: {
        shadeIntensity: 0,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0,
        stops: [20, 180],
      },
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
      name: 'Weekly Stats',
      color: primary,
      data: [5, 15, 5, 10, 5],
    },
  ];

  const stats = [
    {
      title: 'Top Sales',
      subtitle: 'Johnathan Doe',
      percent: '68',
      color: primary,
      lightcolor: primarylight,
      icon: <IconGridDots width={18} />,
    },
    {
      title: 'Best Seller',
      subtitle: 'Footware',
      percent: '45',
      color: secondary,
      lightcolor: secondarylight,
      icon: <IconGridDots width={18} />,
    },
    {
      title: 'Most Commented',
      subtitle: 'Fashionware',
      percent: '14',
      color: error,
      lightcolor: errorlight,
      icon: <IconGridDots width={18} />,
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title="Weekly Stats"
        subheader="Average sales"
        titleTypographyProps={{ fontSize: '18px' }}
      />
      <>
        <CardContent>
          <Stack mt={4}>
            <Chart
              options={optionscolumnchart}
              series={seriescolumnchart}
              type="area"
              height="130px"
            />
          </Stack>
          <Stack spacing={3} mt={3}>
            {stats.map((stat, i) => (
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
                key={i}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: stat.lightcolor,
                      color: stat.color,
                      width: 40,
                      height: 40,
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" mb="4px">
                      {stat.title}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                      {stat.subtitle}
                    </Typography>
                  </Box>
                </Stack>
                <Avatar
                  sx={{
                    bgcolor: stat.lightcolor,
                    color: stat.color,
                    width: 42,
                    height: 24,
                    borderRadius: '4px',
                  }}
                >
                  <Typography variant="subtitle2" fontWeight="600">
                    +{stat.percent}
                  </Typography>
                </Avatar>
              </Stack>
            ))}
          </Stack>
        </CardContent>
      </>
    </Card>
  );
};

export default WeeklyStats;
