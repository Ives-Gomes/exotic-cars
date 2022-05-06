import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@styles/global';
import 'react-toastify/dist/ReactToastify.css';
import theme from '@utils/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop
        />

        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
