"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {resolvedTheme === "dark" ? (
        <Sun
          onClick={() => setTheme("light")}
          strokeWidth={1.5}
          className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115 "
        />
      ) : (
        <Moon
          onClick={() => setTheme("dark")}
          strokeWidth={1.5}
          className="cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-115"
        />
      )}
    </>
  );
};

export default ToggleTheme;
