import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createApolloClient from './apollo/apollo-client';
import { REFRESH_TOKEN } from './apollo/queries';
import { setAccessToken, setRefreshToken } from './helpers/helpers';

const origin = 'http://localhost:3000';

const apolloClient = createApolloClient();
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const currentUrl = request.url;
  const cookieStore = cookies();
  const accessToken = cookieStore.get('Access-Token');
  const refreshToken = cookieStore.get('Refresh-Token');
  console.log('refreshToken: ', refreshToken);
  console.log('currentUrl: ', currentUrl);
  console.log('requestUrl: ', request.url);

  if (!accessToken) {
    if (refreshToken) {
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

      // console.log('new tokens: ', { refresh_token, access_token });
      const response = NextResponse.next();
      setAccessToken(response.cookies, access_token);
      setRefreshToken(response.cookies, refresh_token);
      return response;
    }

    if (!refreshToken && currentUrl !== origin + '/login')
      return NextResponse.redirect(new URL('/login', request.url));
  }

  if (accessToken && currentUrl === origin + '/login') {
    return NextResponse.redirect(new URL('/my-info/time-off', request.url));
  }

  // if (currentUrl === origin + '/refresh') {

  // }
  // return NextResponse.redirect(new URL('/home', request.url));
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
