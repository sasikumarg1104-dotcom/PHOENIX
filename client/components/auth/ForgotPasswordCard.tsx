"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import AuthFooter from "./AuthFooter";

export default function ForgotPasswordCard() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) return;

    setLoading(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <AuthCard>
        <div className="space-y-6">

          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Forgot Password?
            </h1>

            <p className="mt-2 text-gray-400">
              Enter your email and we'll send a password reset link.
            </p>
          </div>

          <AuthInput
            label="Email"
            icon={<Mail size={20} />}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="button"
            onClick={handleReset}
            disabled={!email || loading}
            className="
              w-full
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-600
              py-3
              font-semibold
              text-white
              transition-all
              hover:scale-[1.02]
              disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <AuthFooter
            text="Remember your password?"
            linkText="Back to Login"
            href="/auth/login"
          />

        </div>
      </AuthCard>
    </motion.div>
  );
}