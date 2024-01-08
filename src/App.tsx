import React from 'react';
import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import Router from './routes/Router';
import { baselightTheme } from './theme/DefaultColors';

function App() {
  const theme = baselightTheme;
  const routing = useRoutes(Router);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
}

export default App;
