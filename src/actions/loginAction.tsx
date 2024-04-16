'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'


export async function login(username : string) {
    //await cookies().set('session', user[0].UserName);
    redirect(`/${username}`)
}

export async function logout() {

    //cookies().delete('session');
    redirect('/')
}