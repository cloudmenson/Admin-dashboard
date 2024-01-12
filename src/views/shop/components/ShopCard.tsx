import React from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { IconBasket } from '@tabler/icons';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';

import BlankCard from '../../../components/shared/BlankCard';

const ecoCard = [
  {
    title: 'Boat Headphone',
    subheader: 'January 7, 2024',
    photo:
      'https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fproducts%2Fs4.jpg&w=640&q=75',
    salesPrice: 65,
    price: 50,
    rating: 4,
  },

  {
    title: 'Red Valvet Dress',
    subheader: 'January 6, 2024',
    photo:
      'https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fproducts%2Fs7.jpg&w=640&q=75',
    salesPrice: 150,
    price: 200,
    rating: 3,
  },
  {
    title: 'Cute Soft Teddybear',
    subheader: 'January 5, 2024',
    photo:
      'https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fproducts%2Fs11.jpg&w=640&q=75',
    salesPrice: 285,
    price: 345,
    rating: 2,
  },
  {
    title: 'Gaming Console',
    subheader: 'January 4, 2024',
    photo:
      'https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fproducts%2Fs6.jpg&w=640&q=75',
    salesPrice: 25,
    price: 31,
    rating: 3,
  },
  {
    title: 'The Psychology of Money',
    subheader: 'January 2, 2024',
    photo:
      'https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fproducts%2Fs3.jpg&w=640&q=75',
    salesPrice: 125,
    price: 137,
    rating: 5,
  },
  {
    title: 'How Innovation Works',
    subheader: 'January 3, 2023',
    photo:
      'https://modernize-nextjs.adminmart.com/_next/image?url=%2Fimages%2Fproducts%2Fs1.jpg&w=640&q=75',
    salesPrice: 275,
    price: 350,
    rating: 4,
  },
];

const ShopCard = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard?.map((product, index) => (
        <Grid item sm={12} md={4} lg={3} key={index}>
          <BlankCard>
            <Typography component={Link} to="/">
              <img src={product.photo} alt="img" width="100%" />
            </Typography>

            <Tooltip title="Add To Cart">
              <Fab
                size="small"
                color="primary"
                sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
              >
                <IconBasket size="16" />
              </Fab>
            </Tooltip>

            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{product.title}</Typography>

              <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                <Stack direction="row" alignItems="center">
                  <Typography variant="h6">${product.price}</Typography>

                  <Typography color="textSecondary" ml={1} sx={{ textDecoration: 'line-through' }}>
                    ${product.salesPrice}
                  </Typography>
                </Stack>

                <Rating name="read-only" size="small" value={product.rating} readOnly />
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ShopCard;
