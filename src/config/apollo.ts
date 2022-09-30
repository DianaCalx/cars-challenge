import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API,
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': process.env.REACT_APP_TOKEN_API || ''
  }
});
