import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconBellRinging } from '@tabler/icons';
import {
  Box,
  Menu,
  Chip,
  Badge,
  Stack,
  Avatar,
  Button,
  MenuItem,
  IconButton,
  Typography,
  ListSubheader,
} from '@mui/material';

interface IMessages {
  id: string;
  imgsrc: string;
  messageTitle: string;
  messageSubtitle: string;
}

const messages: IMessages[] = [
  {
    id: '1',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg',
    messageTitle: 'Roman Joined the Team!',
    messageSubtitle: 'Congratulate him',
  },
  {
    id: '2',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-2.jpg',
    messageTitle: 'New message received',
    messageSubtitle: 'Salma sent you new message',
  },
  {
    id: '3',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-3.jpg',
    messageTitle: 'New Payment received',
    messageSubtitle: 'Check your earnings',
  },
  {
    id: '4',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-4.jpg',
    messageTitle: 'Roman Joined the Team!',
    messageSubtitle: 'Congratulate him',
  },
  {
    id: '5',
    imgsrc:
      'https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/profile/user-1.jpg',
    messageTitle: 'Jolly completed tasks',
    messageSubtitle: 'Assign her new tasks',
  },
];

const Notification: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
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
          color: anchorEl ? 'primary.main' : 'inherit',
        }}
      >
        <Badge variant="dot" color="primary">
          <IconBellRinging size="21" stroke="1.5" />
        </Badge>
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
            width: '320px',
          },
        }}
      >
        <ListSubheader
          sx={{ display: 'flex', alignItems: 'center', paddingTop: 2, paddingBottom: 2 }}
        >
          <Typography variant="h6">Notification</Typography>

          <Box flexGrow={1} />

          <Chip
            size="small"
            label="5 new"
            sx={{
              px: '4px',
              color: '#fff',
              backgroundColor: 'primary.main',
            }}
          />
        </ListSubheader>

        {messages.map((item) => (
          <MenuItem key={item.id} sx={{ paddingTop: 2, paddingBottom: 2 }}>
            <Stack direction="row" spacing={2}>
              <Avatar src={item.imgsrc} alt={item.imgsrc} sx={{ width: 50, height: 50 }} />

              <Box>
                <Typography variant="subtitle2" fontWeight={600}>
                  {item.messageTitle}
                </Typography>

                <Typography
                  color="textSecondary"
                  sx={{
                    fontSize: '13px',
                  }}
                >
                  {item.messageSubtitle}
                </Typography>
              </Box>
            </Stack>
          </MenuItem>
        ))}

        <Box mt={1} py={1} px={2}>
          <Button to="/dashboard" fullWidth color="primary" component={Link} variant="outlined">
            See all Notification
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Notification;
