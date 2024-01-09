import React from 'react';
import {
  Box,
  Card,
  Chip,
  Paper,
  Stack,
  Typography,
  CardContent,
  LinearProgress,
} from '@mui/material';
// import { useTheme } from '@mui/material/styles';

const sells = [
  {
    product: 'MaterialPro',
    price: '23,568',
    percent: 55,
    color: 'primary',
  },
  {
    product: 'Flexy Admin',
    price: '23,568',
    percent: 20,
    color: 'secondary',
  },
];

interface SellTypes {
  product: string;
  price: string;
  percent: number;
  color: any;
}

const SellingProducts: React.FC = () => {
  const secondary = 'rgb(73,190,255)';
  const primary = 'rgb(93, 135, 255)';
  const primarylight = 'rgb(236,242,255)';
  const secondarylight = 'rgb(232,247,255)';

  return (
    <Card variant="outlined" sx={{ border: 'none' }}>
      <Paper sx={{ bgcolor: 'primary.main' }} variant="outlined">
        <CardContent>
          <Typography variant="h5" color="white">
            Best selling products
          </Typography>
          <Typography variant="subtitle1" color="white" mb={4}>
            Overview 2022
          </Typography>

          <Box textAlign="center" mt={2} mb="-50px">
            <img
              alt="pigImage"
              src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/piggy.png"
            />
          </Box>
        </CardContent>
        <Paper
          sx={{
            overflow: 'hidden',
            zIndex: '1',
            position: 'relative',
            margin: '10px',
          }}
        >
          <Box p={3}>
            <Stack spacing={3}>
              {sells?.map((sell: SellTypes, i: number) => (
                <Box key={i}>
                  <Stack
                    mb={1}
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography variant="h6">{sell.product}</Typography>

                      <Typography variant="subtitle2" color="textSecondary">
                        ${sell.price}
                      </Typography>
                    </Box>

                    <Chip
                      sx={{
                        width: 55,
                        height: 24,
                        borderRadius: '4px',
                        color: sell.color === 'primary' ? primary : secondary,
                        backgroundColor: sell.color === 'primary' ? primarylight : secondarylight,
                      }}
                      label={sell.percent + '%'}
                    />
                  </Stack>

                  <LinearProgress value={sell.percent} variant="determinate" color={sell.color} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Paper>
      </Paper>
    </Card>
  );
};

export default SellingProducts;
