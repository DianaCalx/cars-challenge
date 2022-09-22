import { ApolloProvider } from '@apollo/client';
import { RenderOptions, render } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { client } from '../config/apollo';
import { AppContextProvider } from '../context/appContext';

const theme = {
  colors: {
    mainColor: '#0352db',
    secondaryColor: '#ABABAF',
    errorColorLight: '#f52e2ef6',
    errorColorDark: '#e00000',
    successColor: '#1e78ff',
    successColor2: '#0066ff',
    neutralColor: '#f8f9fa',
    darkColor: '#ffb838',
    darkColor2: 'rgb(255, 166, 0)',
    starColor: '#c06500',
  },
  gradient:
    'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,95,255,1) 100%)',
};

const TestProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AppContextProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </AppContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(component, { wrapper: TestProvider, ...options });

export { customRender as render };
