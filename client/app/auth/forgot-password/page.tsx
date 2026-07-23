import AuroraBackground from "@/components/landing/AuroraBackground";
import ForgotPasswordCard from "@/components/auth/ForgotPasswordCard";

export default function ForgotPasswordPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08111F] px-6">
      <AuroraBackground />

      <div className="relative z-10 w-full max-w-md">
        <ForgotPasswordCard />
      </div>
    </main>
  );
}