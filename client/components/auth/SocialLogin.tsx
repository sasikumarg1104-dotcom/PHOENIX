import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        className="
          flex items-center justify-center gap-3
          rounded-xl
          border border-white/10
          bg-white/5
          py-3
          text-white
          transition-all duration-300
          hover:border-purple-500/40
          hover:bg-white/10
          hover:scale-[1.02]
        "
      >
        <FcGoogle size={22} />
        <span>Google</span>
      </button>

      <button
        className="
          flex items-center justify-center gap-3
          rounded-xl
          border border-white/10
          bg-white/5
          py-3
          text-white
          transition-all duration-300
          hover:border-purple-500/40
          hover:bg-white/10
          hover:scale-[1.02]
        "
      >
        <FaGithub size={20} />
        <span>GitHub</span>
      </button>
    </div>
  );
}