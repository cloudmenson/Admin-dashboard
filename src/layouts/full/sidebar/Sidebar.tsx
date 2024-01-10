import React from 'react';
import { useMediaQuery, Box, Drawer, Theme } from '@mui/material';

import { ISidebar } from './types';
import Logo from '../shared/logo/Logo';
import SidebarItems from './SidebarItems';

const Sidebar: React.FC<ISidebar> = ({ open, onClose }) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  const sidebarWidth = '270px';

  if (lgUp) {
    return (
      <Box
        sx={{
          flexShrink: 0,
          width: sidebarWidth,
        }}
      >
        <Drawer
          anchor="left"
          open={open}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
            }}
          >
            <Box px={3}>
              <Logo />
            </Box>

            <Box>
              <SidebarItems />
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      open={open}
      anchor="left"
      onClose={onClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      <Box px={2}>
        <Logo />
      </Box>
      <SidebarItems />
    </Drawer>
  );
};

export default Sidebar;
