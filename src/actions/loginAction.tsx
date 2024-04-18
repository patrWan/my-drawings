"use server";

import { redirect } from "next/navigation";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

import db from "@/db";

export async function login(username: string) {
  //await cookies().set('session', user[0].UserName);
  redirect(`/${username}`);
}

export async function logout() {
  //cookies().delete('session');
  redirect("/");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log("AUTHENTICATE!!!!!!!!!")
    const username  = formData.get("username")?.toString();
    const password  = formData.get("password")?.toString();
    
    const response = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (response?.error) {
      redirect("/");
    }

    //console.log(response);

    redirect(`/${formData.get("username")}`);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function singup(username: string, password: string) {
  console.log(username, password);

  const usernameExist = await db.user.findUnique({
    where: { username: username },
  });

  if (usernameExist) {
    console.log("El nombre de usuario ya se encuentra registrado");
  } else {
    const user = await db.user.create({
      data: {
        username: username,
        password: password,
        profile: {
          create: {
            picture: "/profile.png",
            description: "My heart is saying I'm not caring no more",
            instagram: "https://www.instagram.com/patr.wan/",
            facebook: "https://www.instagram.com/patr.wan/",
            twitter: "https://www.instagram.com/patr.wan/",
            twitch: "https://www.instagram.com/patr.wan/",
          },
        },
      },
    });

    console.log(user);

    const response = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    if (response?.error) {
      redirect("/");
    }

    //console.log(response);

    redirect(`/${username}`);
  }
}
