"use client";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z
    .string()
    .email("Correo invalido")
    .min(1, "El correo es un campo obligatorio"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres "),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof schema>) {
    router.push("/home");
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@ejemplo.com" {...field} />
              </FormControl>
              <FormDescription>Ingresa tu email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items center">
                <FormLabel>Contraseña</FormLabel>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Olvidaste la contraseña?
                </a>
              </div>
              <FormControl>
                <Input placeholder="*********" {...field} />
              </FormControl>
              <FormDescription>Ingresa tu contraseña.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2">
          <Button type="submit" className="w-full">
            Iniciar sesión
          </Button>
          <Button variant="outline" className="w-full">
            Iniciar sesión con Google
          </Button>
        </div>
      </form>
    </Form>
  );
};
