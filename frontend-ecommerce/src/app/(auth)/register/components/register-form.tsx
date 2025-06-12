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
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z
    .string()
    .email("Correo inválido")
    .min(1, "El correo es un campo obligatorio"),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres "),
  confirmedPassword: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres "),
}).refine(data => data.password === data.confirmedPassword, {
  message: "Las contraseñas no coinciden",
  path: ['confirmedPassword']
})

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof schema>) {
    router.push("/login");
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Oniel" {...field} />
              </FormControl>
              <FormDescription>Ingresa tu nombre.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellido</FormLabel>
              <FormControl>
                <Input placeholder="Milian" {...field} />
              </FormControl>
              <FormDescription>Ingresa tu apellido.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
              </div>
              <FormControl>
                <Input placeholder="*********" {...field} />
              </FormControl>
              <FormDescription>Ingresa tu contraseña.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmedPassword"
          render={({ field }) => (
            <FormItem>
              <div className="flex items center">
                <FormLabel>Confirmar contraseña</FormLabel>
              </div>
              <FormControl>
                <Input placeholder="*********" {...field} />
              </FormControl>
              <FormDescription>Confirma tu contraseña.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-2">
          <Button type="submit" className="w-full">
            Crear cuenta
          </Button>
          <Button variant="outline" className="w-full">
            Crear cuenta con Google
          </Button>
        </div>
      </form>
    </Form>
  );
};
