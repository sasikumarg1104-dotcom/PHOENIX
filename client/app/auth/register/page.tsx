import AuroraBackground from "@/components/landing/AuroraBackground";
import RegisterCard from "@/components/auth/RegisterCard";

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#08111F] px-6">
      <AuroraBackground />

      <div className="relative z-10 w-full max-w-md">
        <RegisterCard />
      </div>
    </main>
  );
}