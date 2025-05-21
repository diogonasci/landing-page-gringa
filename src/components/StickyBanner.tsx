import { COMPANY_TAGLINE } from "@/constants/urls";

export const StickyBanner = () => {
  return (
    <div className="bg-solarrio-dark text-white py-3 text-center">
      <div className="container mx-auto px-4">
        <p className="text-lg font-medium">
          Pare de dar dinheiro pra concessionária.
          <br className="sm:hidden" />
          <span className="text-solarrio-orange font-bold">
            {" "}
            {COMPANY_TAGLINE}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StickyBanner;
