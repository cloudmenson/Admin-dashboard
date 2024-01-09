import { ReactNode } from 'react';

export interface IBlankCard {
  children?: ReactNode;
  className?: string;
}

export interface IDashboardCard {
  title: string;
  action?: ReactNode;
  footer?: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  headtitle?: string;
  cardheading?: boolean;
  headsubtitle?: string;
  middlecontent?: ReactNode;
}
