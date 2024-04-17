"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function login(username: string) {
  //await cookies().set('session', user[0].UserName);
  redirect(`/${username}`);
}

export async function logout() {
  //cookies().delete('session');
  redirect("/");
}

export async function authenticate(prevState: string | undefined, formData: FormData,) {
  try {
    const response = await signIn('credentials', {
      username: formData.get("username"),
      password : formData.get("password"),
      redirect : false
    });

    redirect(`/${formData.get("username")}`);

  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
