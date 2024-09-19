import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.escuelajs.co/graphql',
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
    uri: 'https://api.escuelajs.co/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
