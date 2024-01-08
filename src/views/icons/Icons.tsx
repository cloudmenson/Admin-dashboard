import React from 'react';

import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const Icons = () => {
  return (
    <PageContainer title="Icons" description="Icons">
      <DashboardCard title="Icons">
        <iframe
          width="100%"
          height="650"
          frameBorder={0}
          title="Inline Frame Example"
          src="https://tabler-icons.io/"
        />
      </DashboardCard>
    </PageContainer>
  );
};

export default Icons;
