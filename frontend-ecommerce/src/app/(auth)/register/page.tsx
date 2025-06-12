"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

import { RegisterForm } from "./components/register-form";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center max-w-4xl mx-auto mt-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Registra tu cuenta</CardTitle>
          <CardDescription>
            Ingresa tu datos para crear tu cuenta
          </CardDescription>
          <CardAction>
            <Button variant="link" onClick={() => router.push("/login")}>
              Inicia sesión
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}
