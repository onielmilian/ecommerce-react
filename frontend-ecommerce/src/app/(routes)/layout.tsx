import Footer from "@/src/components/footer";
import Navbar from "@/src/components/navbar";
import ThemeProvider from "@/src/components/theme-provider";
import { Toaster } from "sonner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      {children}
      <Toaster />
      <Footer />
    </ThemeProvider>
  );
}
