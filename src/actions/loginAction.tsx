'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'


export async function login() {
    //await cookies().set('session', user[0].UserName);
    redirect('/patr.wan')
}

export async function logout() {

    //cookies().delete('session');
    redirect('/')
}