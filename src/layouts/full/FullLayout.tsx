import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled, Container, Box } from '@mui/material';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
}));

const PageWrapper = styled('div')(() => ({
  flexGrow: 1,
  display: 'flex',
  paddingBottom: '60px',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  zIndex: 1,
}));

const FullLayout = () => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    <MainWrapper className="mainwrapper">
      <Sidebar
        // isMobileSidebarOpen={isMobileSidebarOpen}
        open={isMobileSidebarOpen}
        // onSidebarClose={() => setMobileSidebarOpen(false)}
        onClose={() => setMobileSidebarOpen(false)}
      />

      <PageWrapper className="page-wrapper">
        <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />

        <Container
          sx={{
            paddingTop: '20px',
            maxWidth: '1200px',
          }}
        >
          <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
            <Outlet />
          </Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
