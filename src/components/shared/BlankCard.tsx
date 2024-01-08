import React from 'react';
import { Card } from '@mui/material';

import { IBlankCard } from './types';

const BlankCard: React.FC<IBlankCard> = ({ children, className }) => {
  return (
    <Card
      elevation={9}
      variant={undefined}
      className={className}
      sx={{ p: 0, position: 'relative' }}
    >
      {children}
    </Card>
  );
};

export default BlankCard;
