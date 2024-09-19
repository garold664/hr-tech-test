'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function logout() {
  const cookiesStore = cookies();

  cookiesStore.delete('Access-Token');
  cookiesStore.delete('Refresh-Token');
  redirect('/login');
}
