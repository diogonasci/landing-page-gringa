import { COMPANY_TAGLINE } from "@/constants/urls";
import { ReactNode } from "react";

interface StickyBannerProps {
  children?: ReactNode;
}

export const StickyBanner = ({ children }: StickyBannerProps) => {
  return (
    <div className="bg-radial-dark text-white py-3 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg font-medium">
          {children || (
            <>
              Pare de dar dinheiro pra concessionária.
              <br className="sm:hidden" />
              <span className="text-radial-orange font-bold">
                {" "}
                {COMPANY_TAGLINE}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default StickyBanner;
