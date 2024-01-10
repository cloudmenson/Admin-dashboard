import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Menu,
  Avatar,
  Button,
  MenuItem,
  IconButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import { IconListCheck, IconMail, IconUser } from '@tabler/icons';

import ProfileImg from 'src/assets/images/profile/user-1.jpg';

const Profile: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        aria-haspopup="true"
        onClick={handleClick}
        aria-controls="msgs-menu"
        aria-label="show 11 new notifications"
        sx={{
          ...(typeof anchorEl === 'object' && {
            color: 'primary.main',
          }),
        }}
      >
        <Avatar
          alt="Avatar"
          src={ProfileImg}
          sx={{
            width: 35,
            height: 35,
          }}
        />
      </IconButton>

      <Menu
        keepMounted
        id="msgs-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        sx={{
          '& .MuiMenu-paper': {
            width: '200px',
          },
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconMail width={20} />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <IconListCheck width={20} />
          </ListItemIcon>
          <ListItemText>My Tasks</ListItemText>
        </MenuItem>

        <Box mt={1} py={1} px={2}>
          <Button to="/auth/login" variant="outlined" color="primary" component={Link} fullWidth>
            Logout
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
