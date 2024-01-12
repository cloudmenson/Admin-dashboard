import React from 'react';
import { uniqueId } from 'lodash';
import { Box, List } from '@mui/material';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import {
  IconLogin,
  IconArticle,
  IconUserPlus,
  IconError404,
  IconShoppingBag,
  IconLayoutDashboard,
  IconBrandGoogleAnalytics,
} from '@tabler/icons';

import NavItem from './NavItem';
import { IMenuItems } from './types';
import NavGroup from './NavGroup/NavGroup';

const SidebarItems = () => {
  const { pathname } = useLocation();
  const pathDirect = pathname;
  const { t } = useTranslation();

  const menuItems: IMenuItems[] = [
    {
      navLabel: true,
      subheader: `${t('menu.home-subheader')}`,
    },
    {
      id: uniqueId(),
      title: `${t('menu.dashboard')}`,
      icon: IconLayoutDashboard,
      href: '/dashboard',
    },
    {
      id: uniqueId(),
      title: `${t('menu.ecommerce')}`,
      icon: IconBrandGoogleAnalytics,
      href: '/ecommerce',
    },
    {
      navLabel: true,
      subheader: `${t('menu.event-feed-subheader')}`,
    },
    {
      id: uniqueId(),
      title: `${t('menu.blog')}`,
      icon: IconArticle,
      href: '/event-feed/blog/posts',
    },
    {
      id: uniqueId(),
      title: `${t('menu.shop')}`,
      icon: IconShoppingBag,
      href: '/event-feed/shop',
    },
    {
      navLabel: true,
      subheader: `${t('menu.extra-subheader')}`,
    },
    {
      id: uniqueId(),
      title: `${t('menu.login')}`,
      icon: IconLogin,
      href: '/auth/login',
    },
    {
      id: uniqueId(),
      title: `${t('menu.register')}`,
      icon: IconUserPlus,
      href: '/auth/register',
    },
    {
      id: uniqueId(),
      title: `${t('menu.error')}`,
      icon: IconError404,
      href: '/auth/404',
    },
  ];

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {menuItems?.map((item) => {
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            /* eslint no-else-return: "off" */
          } else {
            return <NavItem item={item} key={item.id} pathDirect={pathDirect} />;
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
