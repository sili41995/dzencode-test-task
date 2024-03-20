import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import App from '@/components/App';
import GlobalStyles from '@/components/GlobalStyles';
import Toast from '@/components/Toast';
import { theme } from '@/constants';
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
