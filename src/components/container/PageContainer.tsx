import React from 'react';
import { Helmet } from 'react-helmet';

import { IPageContainer } from './types';

const PageContainer: React.FC<IPageContainer> = ({ title, description, children }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

export default PageContainer;
