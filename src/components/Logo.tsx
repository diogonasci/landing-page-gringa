import { Sun } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center font-semibold">
      <div className="relative mr-2">
        <Sun className="h-10 w-10 text-solarrio-orange" />
        <div className="absolute -inset-1 rounded-full bg-solarrio-orange opacity-30 blur-sm animate-pulse-solar"></div>
      </div>
      <div className="text-2xl font-bold">
        <span className="text-white">
          Solar<span className="text-solarrio-orange">Rio</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
