import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_ENDPOINT,
});
const createApolloClient = (access_token?: string) => {
  if (access_token) {
    const authLink = new ApolloLink((operation, forward) => {
      const token = access_token;
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return forward(operation);
    });
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }

  return new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
