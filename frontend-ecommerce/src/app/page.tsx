import { checkAuth } from "@/src/lib/auth";
import { redirect } from "next/navigation";

async function Page() {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    redirect("/login");
  } else {
    redirect("/home");
  }
  return null;
}

export default Page;
