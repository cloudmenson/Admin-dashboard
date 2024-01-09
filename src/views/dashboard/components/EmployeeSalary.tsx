import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Card, CardHeader, CardContent } from '@mui/material';

const EmployeeSalary: React.FC = () => {
  const theme = useTheme();
  const primary = 'rgb(93, 135, 255)';
  const primarylight = 'rgb(236,242,255)';

  const optionscolumnchart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 295,
    },
    colors: [primarylight, primarylight, primary, primarylight, primarylight, primarylight],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        distributed: true,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [['Apr'], ['May'], ['June'], ['July'], ['Aug'], ['Sept']],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart: any = [
    {
      name: '',
      data: [20, 15, 30, 25, 10, 15],
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        dataItem2="$5,296"
        dataLabel1="Salary"
        dataItem1="$36,358"
        title="Yearly Sales"
        dataLabel2="Expance"
        subheader="Total Sales"
        titleTypographyProps={{ fontSize: '18px' }}
      />

      <CardContent>
        <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="295px" />
      </CardContent>
    </Card>
  );
};

export default EmployeeSalary;
