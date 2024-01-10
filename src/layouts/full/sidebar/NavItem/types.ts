import { IMenuItems } from '../types';

export interface INavItem {
  level?: number;
  pathDirect?: string;
  item: IMenuItems;
  onClick?: () => void;
}
