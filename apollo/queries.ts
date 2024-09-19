import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refresh_token: String!) {
    refreshToken(refreshToken: $refresh_token) {
      access_token
      refresh_token
    }
  }
`;

export const GET_MY_PROFILE = gql`
  query {
    myProfile {
      id
      name
      avatar
    }
  }
`;
