"use client";
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
import { LoginForm } from "./components/login-form";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center max-w-4xl mx-auto my-16 sm:my-6">
      <Card className="w-full max-w-sm shadow-none ">
        <CardHeader>
          <CardTitle>Inicia sesión en tu cuenta</CardTitle>
          <CardDescription>
            Ingresa tu email para inicar sesión en tu cuenta
          </CardDescription>
          <CardAction>
            <Button variant="link" onClick={() => router.push("/register")}>
              Registrarse
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
