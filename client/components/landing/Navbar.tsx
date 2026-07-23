"use client";

import Link from "next/link";

import Logo from "@/components/common/Logo";
import { navigation } from "@/lib/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-8 py-4 shadow-lg shadow-black/20 backdrop-blur-2xl">
        {/* Logo */}
          <Logo />

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-gray-300 transition duration-300 hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/auth/login"
            className="
              rounded-full
              px-5
              py-2.5
              font-medium
              text-gray-300
              transition-all
              duration-300
              hover:text-white
            "
          >
            Login
          </Link>

          <Link
            href="/auth/register"
            className="
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-500
              px-6
              py-2.5
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-violet-500/40
            "
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}