import React from 'react';
import {
  CardContent,
  Typography,
  Avatar,
  CardMedia,
  Stack,
  Tooltip,
  Chip,
  Box,
  Card,
  Grid,
} from '@mui/material';
import { IconMessage2, IconEye, IconPoint } from '@tabler/icons';

const postData: any = [
  {
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg',
    coveravatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/blog/blog-img1.jpg',
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    category: 'Social',
    name: 'Georgeanna Ramero',
    view: '2,135',
    comments: '3',
    time: 'Mon, Dec 19',
  },
  {
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg',
    coveravatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/blog/blog-img2.jpg',
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    category: 'Gadget',
    name: 'Georgeanna Ramero',
    view: '4,150',
    comments: '38',
    time: 'Sun, Dec 18',
  },
  {
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg',
    coveravatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/blog/blog-img3.jpg',
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    category: 'Health',
    name: 'Georgeanna Ramero',
    view: '9,480',
    comments: '12',
    time: 'Sat, Dec 17',
  },
  {
    avatar: 'https://modernize-nextjs.adminmart.com/images/profile/user-5.jpg',
    coveravatar: 'https://modernize-nextjs.adminmart.com/images/blog/blog-img10.jpg',
    title: 'Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
    category: 'Lifestyle',
    name: 'Georgeanna Ramero',
    view: '1,480',
    comments: '63',
    time: 'Sat, Dec 17',
  },
  {
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg',
    coveravatar: 'https://modernize-nextjs.adminmart.com/images/blog/blog-img5.jpg',
    title: 'Presented by Max Rushden with Barry Glendenning, Philippe Auclair',
    category: 'Health',
    name: 'Georgeanna Ramero',
    view: '9,450',
    comments: '32',
    time: 'Sat, Dec 17',
  },
  {
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg',
    coveravatar: 'https://modernize-nextjs.adminmart.com/images/blog/blog-img4.jpg',
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    category: 'Health',
    name: 'Georgeanna Ramero',
    view: '1,110',
    comments: '34',
    time: 'Sat, Dec 17',
  },
  {
    avatar:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg',
    coveravatar: 'https://modernize-nextjs.adminmart.com/images/blog/blog-img4.jpg',
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    category: 'Health',
    name: 'Georgeanna Ramero',
    view: '3,460',
    comments: '2',
    time: 'Sat, Dec 17',
  },
];

const PostCard = () => {
  return (
    <Grid container spacing={2}>
      {postData?.map((author: any, index: number) => (
        <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
          <Card key={index} variant="outlined">
            <>
              <Typography>
                <CardMedia
                  height="240"
                  component="img"
                  alt="green iguana"
                  image={author.coveravatar}
                />
              </Typography>

              <CardContent>
                <Stack direction="row" sx={{ marginTop: '-45px' }}>
                  <Tooltip title={author.name} placement="top">
                    <Avatar aria-label="recipe" src={author.avatar}></Avatar>
                  </Tooltip>

                  <Chip
                    sx={{
                      marginLeft: 'auto',
                      marginTop: '-21px',
                      backgroundColor: 'white',
                    }}
                    label="2 min Read"
                    size="small"
                  />
                </Stack>

                <Chip label={author.category} size="small" sx={{ marginTop: 2 }}></Chip>

                <Box my={3}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="inherit"
                    sx={{ textDecoration: 'none' }}
                    // to="/"
                  >
                    {author.title}
                  </Typography>
                </Box>

                <Stack direction="row" gap={3} alignItems="center">
                  <Stack direction="row" gap={1} alignItems="center">
                    <IconEye size="18" /> {author.view}
                  </Stack>

                  <Stack direction="row" gap={1} alignItems="center">
                    <IconMessage2 size="18" /> {author.comments}
                  </Stack>

                  <Stack direction="row" ml="auto" alignItems="center">
                    <IconPoint size="16" />
                    <Typography variant="subtitle2">{author.time}</Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostCard;
