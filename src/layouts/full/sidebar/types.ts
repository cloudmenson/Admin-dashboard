export interface IMenuItems {
  id?: string;
  href?: string;
  title?: string;
  navLabel?: boolean;
  subheader?: string;
  icon?: React.ComponentType<any>;
  disabled?: boolean;
  external?: boolean;
}

export interface ISidebar {
  // isSidebarOpen: boolean;
  // isMobileSidebarOpen: boolean;
  // onSidebarClose: () => void;
  open: boolean;
  onClose: () => void;
}
