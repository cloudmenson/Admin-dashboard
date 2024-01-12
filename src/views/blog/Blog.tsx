import React from 'react';
import { Grid, Box } from '@mui/material';

import PostCard from './components/PostCard';
import PageContainer from 'src/components/container/PageContainer';

const Blog = () => {
  return (
    <PageContainer title="Blog" description="Blog">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <PostCard />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Blog;
