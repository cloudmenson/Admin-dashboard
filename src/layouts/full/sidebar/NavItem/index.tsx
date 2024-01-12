import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, styled, useTheme, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { INavItem } from './types';

const NavItem: React.FC<INavItem> = ({ item, level, pathDirect, onClick }) => {
  const Icon = item?.icon;
  const theme = useTheme();
  const currentLevel = level ?? 0;
  const itemIcon = Icon ? <Icon stroke={1.5} size="1.3rem" /> : null;

  const ListItemStyled = styled(ListItem)(() => ({
    whiteSpace: 'nowrap',
    marginBottom: '2px',
    padding: '8px 10px',
    borderRadius: '8px',
    backgroundColor: currentLevel > 1 ? 'transparent !important' : 'inherit',
    color: theme.palette.text.primary,
    paddingLeft: '10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
    '&.Mui-selected': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
  }));

  return (
    <List component="li" disablePadding key={item.id}>
      <ListItemStyled
        // @ts-ignore
        button
        to={item.href}
        onClick={onClick}
        disabled={item.disabled}
        selected={pathDirect === item.href}
        href={item.external ? item.href : ''}
        target={item.external ? '_blank' : ''}
        component={item.external ? 'a' : NavLink}
      >
        <ListItemIcon
          sx={{
            p: '3px 0',
            minWidth: '36px',
            color: 'inherit',
          }}
        >
          {itemIcon}
        </ListItemIcon>

        <ListItemText>
          <>{item.title}</>
        </ListItemText>
      </ListItemStyled>
    </List>
  );
};

export default NavItem;
