import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { Box, styled } from '@mui/material';

import { IScrollbar } from './types';

const SimpleBarStyle = styled(SimpleBar)(() => ({
  maxHeight: '100%',
  '.simplebar-scrollbar:before': { backgroundColor: '#2e2d348f' },
}));

const Scrollbar: React.FC<IScrollbar> = ({ children, sx, other }) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

  if (isMobile) {
    return <Box sx={{ overflowX: 'auto' }}>{children}</Box>;
  }

  return (
    <SimpleBarStyle sx={sx} {...other}>
      {children}
    </SimpleBarStyle>
  );
};

export default Scrollbar;
