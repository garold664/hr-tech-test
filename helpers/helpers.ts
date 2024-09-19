import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';

export function setAccessToken(store: ResponseCookies, token: string) {
  store.set('Access-Token', token, {
    // maxAge: 30,
    maxAge: 36000, // 10 hours
    httpOnly: true,
    path: '/',
    secure: true,
  });
}

export function setRefreshToken(store: ResponseCookies, token: string) {
  store.set('Refresh-Token', token, {
    // maxAge: 36000,
    maxAge: 1728000, // 20 days
    httpOnly: true,
    path: '/',
    secure: true,
  });
}
