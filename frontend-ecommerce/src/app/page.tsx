import { redirect } from "next/navigation";
import { checkAuth } from "../lib/auth";


async function Page () {
  const isAuthenticated = await checkAuth();
  if (!isAuthenticated) {
    redirect("/login");
  } else {
    redirect("/home");
  }
  return null
};

export default Page;
