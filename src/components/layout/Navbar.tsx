"use client";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";
import { CurrencyToggleButton } from "../currency-toggle-button";

const Navbar: FC = () => {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navbar"
      className="top-0 flex justify-center items-center mx-auto my-5 px-4 w-full md:max-w-7xl"
    >
      <div className="z-10 flex justify-between items-center border-2 p-2 rounded-xl w-full">
        <div className="flex items-center gap-1 font-bold">
          <Link href={"/"}>
            {/* Uses CSS dark mode class instead of JS — works before hydration */}
            <Image
              src={"/assets/logos/logo-light.svg"}
              height={150}
              width={150}
              alt="logo"
              className="block dark:hidden"
            />
            <Image
              src={"/assets/logos/logo-dark.svg"}
              height={150}
              width={150}
              alt="logo"
              className="hidden dark:block"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <CurrencyToggleButton />
          <ThemeToggleButton />
          {pathname.startsWith("/generate") || (
            <Link href={"/generate"}>
              <Button className="ml-4 font-bold">Generate Invoice</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
