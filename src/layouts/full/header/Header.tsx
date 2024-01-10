import React from 'react';
import { IconMenu } from '@tabler/icons';
import { Stack, AppBar, styled, Toolbar, IconButton, Box } from '@mui/material';

import Profile from './Profile';
import { IHeader } from './types';
import Notification from './Notification';
import LanguageSelector from '../../../components/lang-selector/LanguageSelector';

const Header: React.FC<IHeader> = ({ toggleMobileSidebar }) => {
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
    justifyContent: 'flex-end',
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

        <Box flexGrow={1} />

        <Stack spacing={1} direction="row" alignItems="center">
          <LanguageSelector />

          <Notification />

          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
