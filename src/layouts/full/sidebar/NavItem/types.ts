import { IMenuItems } from '../types';

export interface INavItem {
  level?: number;
  pathDirect?: any;
  item: IMenuItems;
  onClick?: () => void;
}
