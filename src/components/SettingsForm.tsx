"use client";

import { getProfile, updateProfile } from "@/actions/loginAction";
import { User, Profile } from "@/types";
import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
  InstagramFilled,
  TwitterSquareFilled,
  FacebookFilled,
  TwitchFilled,
  SendOutlined,
} from "@ant-design/icons";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Tu usuario debe contener 4 o más caracteres" }).optional(),

  description: z.string().max(120, {
    message: "La descripción no puede tener mas de 120 caracteres.",
  }).optional(),
  instagram: z.string().optional(),
  twitter: z.string().optional(),
  facebook: z.string().optional(),
  twitch: z.string().optional(),
});

export default function SettingsForm({username} : any) {
  const [user, setUser] = useState<User>();
  const [profile, setProfile] = useState<Profile>();

 

  useEffect(() => {
    async function getData() {
      const fetch = await getProfile(username);
      setUser(fetch.user);
      setProfile(fetch.profile);
    }

    getData();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user?.username,
      description: profile?.description,
      instagram: profile?.instagram,
      twitter: profile?.twitter,
      facebook: profile?.facebook,
      twitch: profile?.twitch,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    alert(values.instagram);
  }
  async function onSubmit2(e : any) {
    e.preventDefault();

    const updatedUser : User = {
        username : e.target[1].value,
    };
    
    const updatedProfile : Profile = {
        description : e.target[2].value,
        instagram : e.target[3].value,
        twitter : e.target[4].value,
        facebook : e.target[5].value,
        twitch : e.target[6].value
    };
    
    updateProfile(updatedUser, updatedProfile, user?.id);
    
  }

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit2}
        className=" bg-white flex flex-col items-center space-y-4 border-2 p-12 w-1/2 m-auto"
      >
        <h1>Configuración de la cuenta</h1>
        <div className="flex flex-col">
          <input className="p-2 w-96" type="file" name="picture"/>
          <span className="opacity-40 text-sm mx-2">{profile?.picture}</span>
        </div>

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <>
              <FormItem defaultValue={user?.username}>
                <FormLabel className="text-black">Usuario</FormLabel>
                <FormControl defaultValue={user?.username}>
                  <Input
                    className="bg-white w-72"
                    placeholder="Ingrese su usuario"
                    defaultValue={user?.username}
                    readOnly
                    {...field}
                  />
                </FormControl>
                <FormDescription className="opacity-80">
                  Este sera tu forma de identificarte
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            </>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className="text-black">Descripción</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white h-20 w-72"
                    placeholder="Ingrese una descripción"
                    defaultValue={profile?.description}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="opacity-80">
                  Describete o pon alguna frase que te guste c:
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            </>
          )}
        />
        
        <FormField
          control={form.control}
          name="instagram"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className="text-black"> <InstagramFilled className="text-base mr-1 opacity-60" />Instagram </FormLabel>
                <FormControl>
                
                  <Input
                    className="bg-white w-72"
                    placeholder="Ingrese su instagram"
                    defaultValue={profile?.instagram}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="opacity-80">
                  Tu nombre de usuario de instagram
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            </>
          )}
        />

        <FormField
          control={form.control}
          name="twitter"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className="text-black"> <TwitterSquareFilled className="text-base mr-1 opacity-60" />Twitter </FormLabel>
                <FormControl>
                
                  <Input
                    className="bg-white w-72"
                    placeholder="Ingrese su twitter"
                    defaultValue={profile?.twitter}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="opacity-80">
                  Tu nombre de usuario de twitter
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            </>
          )}
        />

        <FormField
          control={form.control}
          name="facebook"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className="text-black"> <FacebookFilled className="text-base mr-1 opacity-60" />Facebook </FormLabel>
                <FormControl>
                
                  <Input
                    className="bg-white w-72"
                    placeholder="Ingrese su instagram"
                    defaultValue={profile?.facebook}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="opacity-80">
                  Tu link de facebook ej: facebook.com/example
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="twitch"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className="text-black"> <TwitchFilled className="text-base mr-1 opacity-60" />Twitch </FormLabel>
                <FormControl>
                
                  <Input
                    className="bg-white w-72"
                    placeholder="Ingrese su twitch"
                    defaultValue={profile?.twitch}
                    {...field}
                  />
                </FormControl>
                <FormDescription className="opacity-80">
                  Tu nombre de usuario de twitch
                </FormDescription>
                <FormMessage className="text-red-600" />
              </FormItem>
            </>
          )}
        />

        <div className="flex flex-col">
          <div className="flex space-x-1">
            <button
              className="p-2 border-2 w-60 text-white bg-purple-800 flex items-center justify-center space-x-2 hover:bg-purple-600"
              type="submit"
              value={"Confirmar datos"}
            >
              <SendOutlined className="text-xl" />{" "}
              <p className="font-bold uppercase">Confirmar datos </p>
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}
