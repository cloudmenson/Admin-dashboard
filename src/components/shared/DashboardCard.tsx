import React from 'react';
import { Card, CardContent, Typography, Stack, Box } from '@mui/material';

import { IDashboardCard } from './types';

const DashboardCard: React.FC<IDashboardCard> = ({
  title,
  action,
  footer,
  subtitle,
  children,
  headtitle,
  cardheading,
  headsubtitle,
  middlecontent,
}) => {
  return (
    <Card elevation={9} sx={{ padding: 0 }} variant={undefined}>
      {cardheading ? (
        <CardContent>
          <Typography variant="h5">{headtitle}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: '30px' }}>
          {title ? (
            <Stack
              mb={3}
              spacing={2}
              direction="row"
              alignItems={'center'}
              justifyContent="space-between"
            >
              <Box>
                {title ? <Typography variant="h5">{title}</Typography> : ''}

                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary">
                    {subtitle}
                  </Typography>
                ) : (
                  ''
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
