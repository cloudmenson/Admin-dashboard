import React, { Suspense } from 'react';

import { ILoadable } from './types';

const Loadable: React.FC<ILoadable<any>> = ({ component: Component, ...props }) => (
  <Suspense>
    <Component {...(props as any)} />
  </Suspense>
);
export default Loadable;
