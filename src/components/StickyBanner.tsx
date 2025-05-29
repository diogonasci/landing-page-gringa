import { ReactNode } from "react";

interface StickyBannerProps {
  children?: ReactNode;
}

export const StickyBanner = ({ children }: StickyBannerProps) => {
  return (
    <div className="bg-radial-orange text-white py-3 text-center">
      <div className="container mx-auto px-4">
        <p className="text-center text-white font-bold text-sm md:text-base">
          {children || (
            <>GERE SUA PRÓPRIA ENERGIA. LIVRE-SE DAS CONTAS DE LUZ</>
          )}
        </p>
      </div>
    </div>
  );
};

export default StickyBanner;
