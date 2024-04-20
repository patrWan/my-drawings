"use server";

import { redirect } from "next/navigation";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

//import {comparePasword, hashPassword} from "@/lib/util";
import {db} from "@/db";
import { Profile, User } from "@/types";



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

export async function singup(username: string, password: string, code : string) {
  //const hashedPassword = await hashPassword(password);

  if(code !== "xg57hhjp123") redirect("/auth/singup");

  const usernameExist = await db().user.findUnique({
    where: { username: username },
  });

  if (usernameExist) {
    console.log("El nombre de usuario ya se encuentra registrado");
  } else {
    const user = await db().user.create({
      data: {
        username: username,
        password: password,
        profile: {
          create: {
            picture: "",
            description: "",
            instagram: "",
            facebook: "",
            twitter: "",
            twitch: "",
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

export async function getProfile(username : string){
  const user = await db().user.findUnique({where : {username : username}}) as any
  const profile = await db().profile.findFirst({include : {user : true}, where : {user : {id : user?.id}}}) as any;
  return {
    user,
    profile
  };
}

export async function updateProfile(user : User, profile : Profile, userId : number | undefined){
  /*
  const updateUser = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      username: user.username,
    },
  })
*/

  const profileId = await db().profile.findFirst({include : {user : true}, where : {user : {id : userId}}}) as any;

  const updateProfile = await db().profile.update({
    where: {
      id: profileId.id,
    },
    data: {
      description : profile.description,
      instagram : profile.description,
      twitter : profile.twitter,
      facebook : profile.facebook,
      twitch : profile.twitch,
    },
  })

  redirect(`/${user.username}`)
}
