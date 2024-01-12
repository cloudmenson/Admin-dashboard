import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuItem, ListItemIcon, Box, Typography } from '@mui/material';

import UKFlagIcon from '../../../assets/images/flags/icon-flag-uk.svg';
import UAFlagIcon from '../../../assets/images/flags/icon-flag-ua.svg';
import ZHFlagIcon from '../../../assets/images/flags/icon-flag-zh.svg';

const flagIcons: Record<string, string> = {
  uk: UKFlagIcon,
  ua: UAFlagIcon,
  zh: ZHFlagIcon,
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    handleCloseMenu();
  };

  return (
    <Box>
      <IconButton
        size="large"
        color="inherit"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        aria-controls="msgs-menu"
        aria-label="show 11 new notifications"
        sx={{
          ...(typeof anchorEl === 'object' && {
            color: 'primary.main',
          }),
        }}
      >
        <img width={25} height={25} src={flagIcons[i18n.language]} alt={i18n.language} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        aria-controls="msgs-menu"
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        {Object?.keys(flagIcons).map((lang) => (
          <MenuItem key={lang} onClick={() => changeLanguage(lang)}>
            <ListItemIcon>
              <img alt={lang} src={flagIcons[lang]} />
            </ListItemIcon>
            <Typography variant="inherit">{lang.toUpperCase()}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
