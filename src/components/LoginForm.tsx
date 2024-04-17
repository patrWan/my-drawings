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

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/actions/loginAction';

import api from "@/api";

const formSchema = z.object({
  username: z
  .string()
  .min(1, {message: "El campo usuario no puede estar vacío",}),

  password: z
  .string()
  .min(1, {message: "El acmpo contraseña no puede estar vacío",}),
});

export default function LoginForm() {

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
    const response = await api.user.login(values.username, values.password);
    alert(response)
  }

  return (
    <Form {...form}>
      <form action={dispatch} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel className="text-white">Usuario</FormLabel>
                <FormControl>
                  <Input placeholder="Ingrese su usuario" {...field} />
                </FormControl>
                <FormMessage />
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
                <FormLabel className="text-white">Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="******" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button type="submit" className="bg-zinc-950">Submit</Button>
      </form>
    </Form>
  );
}
