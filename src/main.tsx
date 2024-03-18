import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@/components/GlobalStyles';
import Toast from '@/components/Toast';
import { theme } from '@/constants';
import { Provider } from 'react-redux';
import store from '@/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          <GlobalStyles />
          <Toast />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
