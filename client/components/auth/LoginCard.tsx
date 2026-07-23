"use client";

import { motion } from "framer-motion";

import AuroraBackground from "@/components/landing/AuroraBackground";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";

import AuthCard from "./AuthCard";
import AuthDivider from "./AuthDivider";
import AuthFooter from "./AuthFooter";
import AuthInput from "./AuthInput";
import SocialLogin from "./SocialLogin";

export default function LoginCard() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08111F]">

      {/* Aurora Background */}
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AuthCard>

            <div className="mb-8 flex justify-center">
              <Logo />
            </div>

            <h1 className="text-center text-3xl font-bold text-white">
              Welcome Back 💜
            </h1>

            <p className="mt-3 text-center text-gray-400">
              It's good to see you again.
              <br />
              Let's continue your journey together.
            </p>

            <div className="mt-8 space-y-5">

              <AuthInput
                label="Email"
                type="email"
                placeholder="Enter your email"
              />

              <AuthInput
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <div className="flex items-center justify-between text-sm">

  <label className="flex items-center gap-2 text-gray-400">

    <input
      type="checkbox"
      className="accent-violet-600"
    />

    Remember me

  </label>

  <a
    href="/auth/forgot-password"
    className="text-violet-400 hover:text-violet-300"
  >
    Forgot Password?
  </a>

</div>

              <Button className="w-full">
                Continue Journey
              </Button>

            </div>

            <AuthDivider />

            <SocialLogin />

            <AuthFooter
              text="Don't have an account?"
              linkText="Create one"
              href="/auth/register"
            />

          </AuthCard>
        </motion.div>

      </div>
    </div>
  );
}