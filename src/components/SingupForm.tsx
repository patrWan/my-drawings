"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

import { useFormState, useFormStatus } from "react-dom";
import { authenticate, singup } from "@/actions/loginAction";

import api from "@/api";

//import { useRouter } from "next/router";


const formSchema = z.object({
  username: z
    .string()
    .min(4, { message: "Tu usuario debe contener 4 o más caracteres" }),

  password: z
    .string()
    .min(6, { message: "La contraseña debe contener 6 o más caracteres" }),
});

export default function SingupForm() {
  //const router = useRouter();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    singup(values.username, values.password);
    
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-black"
      >
        <p className="text-red-500">{errorMessage}</p>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className="text-black">Usuario</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder="Ingrese su usuario"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="opacity-80">
                  Este sera tu forma de identificarte
                </FormDescription>
                <FormMessage className="text-red-600"/>
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className="text-black">Contraseña</FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-600"/>
              </FormItem>
            </>
          )}
        />
        <Button
          type="submit"
          className="bg-purple-950 text-white uppercase hover:bg-purple-600"
        >
          Registrarme
        </Button>
      </form>
    </Form>
  );
}
