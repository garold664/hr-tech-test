import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import createApolloClient from '@/apollo/apollo-client';
import { LOGIN } from '@/apollo/queries';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { setAccessToken, setRefreshToken } from '@/helpers/helpers';

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export default function Home() {
  async function handleSubmit(formData: FormData) {
    'use server';
    const apolloClient = createApolloClient();
    let data = null;
    try {
      data = await apolloClient.mutate({
        mutation: LOGIN,
        variables: {
          email: formData.get('email'),
          password: formData.get('password'),
        },
      });
    } catch (error) {
      console.error(error);
    }
    if (data) {
      const cookieStore = cookies();
      setAccessToken(cookieStore, data.data.login.access_token);
      setRefreshToken(cookieStore, data.data.login.refresh_token);
      redirect('/my-info/time-off');
    }
  }
  return (
    <form
      action={handleSubmit}
      className="flex flex-col justify-center items-center h-screen"
    >
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                defaultValue="john@mail.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                defaultValue="changeme"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
