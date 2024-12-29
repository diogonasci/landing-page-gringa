import { useTranslation } from "react-i18next";
import "../styles/fonts.css";

export const Logo = () => {
  const { t } = useTranslation('content');

  return (
    <div className="flex items-center font-semibold">
      <svg className="mr-1 h-12 w-auto" viewBox="0 0 500 100">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{
            fontFamily: "Peralta, sans-serif",
            fontSize: "48px",
            fill: "hsl(210, 73%, 59%)",
            fontWeight: 400,
          }}
        >
          {t('brand.name')}
        </text>
      </svg>
    </div>
  );
};

export default Logo;
