/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloProvider } from '@apollo/client';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { RenderOptions, render } from '@testing-library/react';
import React, { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { client } from '../config/apollo';
import { AppContextProvider } from '../context/appContext';
import { testUser } from './data-test';

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

interface TestProviderProps {
  children: React.ReactNode;
  mocks: MockedResponse<Record<string, any>>[];
}

const TestProvider: FC<TestProviderProps> = ({ children, mocks }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AppContextProvider testUser={testUser}>
          <BrowserRouter>
            <MockedProvider mocks={mocks} addTypename={false}>
              {children}
            </MockedProvider>
          </BrowserRouter>
        </AppContextProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export function customRender(
  component: ReactElement,
  mocks: MockedResponse<Record<string, any>>[],
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(component, {
    wrapper: () => <TestProvider mocks={mocks}>{component}</TestProvider>,
    ...options,
  });
}

export { customRender as renderUserContext };
