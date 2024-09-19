'use server';

import createApolloClient from '@/apollo/apollo-client';
import { cookies } from 'next/headers';
import { GET_MY_PROFILE } from '@/apollo/queries';

export default async function fetchUserData() {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get('Access-Token');
    if (!accessToken) return;
    const apolloClient = createApolloClient(accessToken.value);

    const data = await apolloClient.query({
      query: GET_MY_PROFILE,
    });
    return data.data.myProfile;
  } catch (error) {
    return { message: 'Failed to fetch user data' };
  }
}
