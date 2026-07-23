"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, AtSign, Mail, Lock } from "lucide-react";

import AuthCard from "./AuthCard";
import AuthDivider from "./AuthDivider";
import AuthFooter from "./AuthFooter";
import AuthInput from "./AuthInput";
import PasswordStrength from "./PasswordStrength";
import PasswordChecklist from "./PasswordChecklist";
import TermsCheckbox from "./TermsCheckbox";
import SocialLogin from "./SocialLogin";

export default function RegisterCard() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordsMatch =
    confirmPassword.length === 0 || password === confirmPassword;

  const handleRegister = async () => {
    if (
      !acceptedTerms ||
      !passwordsMatch ||
      password.length === 0
    ) {
      return;
    }

    setLoading(true);

    try {
      // TODO: Replace with Register API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log({
        fullName,
        username,
        email,
        password,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AuthCard>
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              Join Phoenix 💜
            </h1>

            <p className="mt-2 text-gray-400">
              Begin your healing journey with us.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <AuthInput
              label="Full Name"
              icon={<User size={20} />}
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <AuthInput
              label="Username"
              icon={<AtSign size={20} />}
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <AuthInput
              label="Email"
              icon={<Mail size={20} />}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <AuthInput
              label="Password"
              icon={<Lock size={20} />}
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PasswordStrength password={password} />

            <PasswordChecklist password={password} />

            <AuthInput
              label="Confirm Password"
              icon={<Lock size={20} />}
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            {!passwordsMatch && (
              <p className="text-sm text-red-400">
                ❌ Passwords do not match
              </p>
            )}

            {confirmPassword.length > 0 && passwordsMatch && (
              <p className="text-sm text-green-400">
                ✅ Passwords match
              </p>
            )}

            <TermsCheckbox
              checked={acceptedTerms}
              onChange={setAcceptedTerms}
            />

            <button
              type="button"
              onClick={handleRegister}
              disabled={
                !acceptedTerms ||
                loading ||
                !passwordsMatch ||
                password.length === 0
              }
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
                duration-300
                hover:scale-[1.02]
                hover:shadow-lg
                hover:shadow-purple-500/30
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Creating Account...
                </div>
              ) : (
                "Start Your Journey"
              )}
            </button>
          </div>

          <AuthDivider />

          <SocialLogin />

          <AuthFooter
            text="Already have an account?"
            linkText="Login"
            href="/auth/login"
          />
        </div>
      </AuthCard>
    </motion.div>
  );
}