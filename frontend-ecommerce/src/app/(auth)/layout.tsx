import ThemeProvider from "../../components/theme-provider";
import Footer from "../../components/footer";
import { Toaster } from "../../components/ui/sonner";
import Header from "@/src/components/header";

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
      <Header />
      {children}
      <Toaster />
      <Footer />
    </ThemeProvider>
  );
}
