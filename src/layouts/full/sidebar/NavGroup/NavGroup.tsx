import React from 'react';
import { ListSubheader, styled } from '@mui/material';

import { INavGroup } from './types';

const ListSubheaderStyle = styled(ListSubheader)(({ theme }) => ({
  padding: '3px 12px',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(0),
  fontWeight: '700',
  lineHeight: '26px',
  color: theme.palette.text.primary,
  ...theme.typography.overline,
}));

const NavGroup: React.FC<INavGroup> = ({ item }) => {
  return item.subheader ? (
    <ListSubheaderStyle disableSticky>{item.subheader}</ListSubheaderStyle>
  ) : (
    ''
  );
};

export default NavGroup;
