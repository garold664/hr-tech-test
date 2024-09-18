import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.escuelajs.co/graphql',
});
const createApolloClient = (data?: any) => {
  const authLink = new ApolloLink((operation, forward) => {
    const { access_token: token } = data.login;
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
    return forward(operation);
  });

  if (data) {
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
