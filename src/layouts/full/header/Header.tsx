import React, { useState } from 'react';
import { IconBellRinging, IconMenu } from '@tabler/icons';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge } from '@mui/material';

import Profile from './Profile';
import { IHeader } from './types';

const Header: React.FC<IHeader> = ({ toggleMobileSidebar }) => {
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    background: theme.palette.background.paper,
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline',
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        <IconButton
          size="large"
          color="inherit"
          aria-haspopup="true"
          aria-controls="msgs-menu"
          aria-label="show 11 new notifications"
          sx={{
            ...(typeof anchorEl2 === 'object' && {
              color: 'primary.main',
            }),
          }}
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>
        </IconButton>

        <Box flexGrow={1} />

        <Stack spacing={1} direction="row" alignItems="center">
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
