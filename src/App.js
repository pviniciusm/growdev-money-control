import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './config/theme';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
