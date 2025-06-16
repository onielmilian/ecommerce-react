"use client";
import { useRouter } from "next/navigation";

import ToggleTheme from "./toggle-theme";

const Header = () => {
  const router = useRouter();

  return (
    <div className=" sticky top-0 z-50 bg-background shadow-sm">
      <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
        <h1
          onClick={() => router.push("/")}
          className={`text-3xl transition-transform duration-300 ease-in-out transform hover:scale-105`}
        >
          Tecno
          <span className="font-bold">Mobile</span>
        </h1>
        <div className="flex items-center justify-between gap-2 sm:gap-7">
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default Header;
