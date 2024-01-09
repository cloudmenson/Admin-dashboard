import { uniqueId } from 'lodash';
import { IconLayoutDashboard, IconShoppingCart } from '@tabler/icons';

import { IMenuItems } from './types';

const menuItems: IMenuItems[] = [
  {
    navLabel: true,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'eCommerce',
    icon: IconShoppingCart,
    href: '/ecommerce',
  },
  {
    navLabel: true,
    subheader: 'Extra',
  },
  {
    id: uniqueId(),
    title: 'Sample Page',
    icon: IconShoppingCart,
    href: '/sample-page',
  },
];

export default menuItems;
