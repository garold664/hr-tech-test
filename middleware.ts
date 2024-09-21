import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createApolloClient from './apollo/apollo-client';
import { REFRESH_TOKEN } from './apollo/queries';
import { setAccessToken, setRefreshToken } from './helpers/helpers';
export async function middleware(request: NextRequest) {
  const apolloClient = createApolloClient();
  const currentUrl = request.url;

  const cookieStore = cookies();
  const accessToken = cookieStore.get('Access-Token');
  const refreshToken = cookieStore.get('Refresh-Token');

  if (!accessToken) {
    const response = NextResponse.next();
    if (refreshToken) {
      try {
        const {
          data: {
            refreshToken: { refresh_token, access_token },
          },
        } = await apolloClient.mutate({
          mutation: REFRESH_TOKEN,
          variables: {
            refresh_token: refreshToken.value,
          },
        });

        setAccessToken(response.cookies, access_token);
        setRefreshToken(response.cookies, refresh_token);
      } catch (error) {
        console.error(error);
      }
      return response;
    }

    if (!refreshToken && currentUrl !== new URL('/login', request.url).href)
      return NextResponse.redirect(new URL('/login', request.url));
  }

  if (accessToken && currentUrl === new URL('/login', request.url).href) {
    return NextResponse.redirect(new URL('/my-info/time-off', request.url));
  }
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
