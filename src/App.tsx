import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { Header } from '@components/index';

import GlobalStyles from '@styles/global';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import theme from '@utils/theme';
import RoutesComponent from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
      />

      <Header />

      <RoutesComponent />

      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
