import ThemeProvider from "../../components/theme-provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Toaster } from "../../components/ui/sonner";

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
