import {
  Box,
  Card,
  Stack,
  Avatar,
  Button,
  CardHeader,
  Typography,
  CardContent,
} from '@mui/material';

const PaymentGateways = () => {
  const primary = 'rgb(93, 135, 255)';
  const primarylight = 'rgb(236,242,255)';
  const error = 'rgb(250,137,107)';
  const errorlight = 'rgb(253,237,232)';
  const warning = 'rgb(255,174,31)';
  const warninglight = 'rgb(254,245,229)';
  const secondary = 'rgb(73,190,255)';
  const secondarylight = 'rgb(232,247,255)';

  const stats = [
    {
      title: 'Paypal',
      subtitle: 'Big Brands',
      price: 6235,
      color: primary,
      lightcolor: primarylight,
      icon: 'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-paypal.svg',
    },
    {
      title: 'Wallet',
      subtitle: 'Bill payment',
      price: 345,
      color: secondary,
      lightcolor: secondarylight,
      icon: 'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-office-bag.svg',
    },
    {
      title: 'Credit Card',
      subtitle: 'Money reversed',
      price: 2235,
      color: warning,
      lightcolor: warninglight,
      icon: 'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-master-card.svg',
    },
    {
      title: 'Refund',
      subtitle: 'Bill Payment',
      price: 32,
      color: error,
      lightcolor: errorlight,
      icon: 'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-pie.svg',
    },
  ];

  return (
    <Card variant="outlined">
      <CardHeader
        title="Payment Gateways"
        subheader="Platform For Income"
        titleTypographyProps={{ fontSize: '18px' }}
      />

      <CardContent>
        <Stack spacing={3} mt={5}>
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
                  <Avatar src={stat.icon} alt={stat.icon} sx={{ width: 24, height: 24 }} />
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
              {stat.price < 400 ? (
                <Typography variant="subtitle2" color="textSecondary" fontWeight="600">
                  -${stat.price}
                </Typography>
              ) : (
                <Typography variant="subtitle2" fontWeight="600">
                  +${stat.price}
                </Typography>
              )}
            </Stack>
          ))}
          <Button variant="outlined" color="primary" sx={{ mt: '40px !important' }}>
            View all transactions
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PaymentGateways;
