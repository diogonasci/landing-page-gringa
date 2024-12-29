import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { StickyBanner } from "./StickyBanner";

export const DemoBanner = () => {
  const { t } = useTranslation('content');
  
  return (
    <StickyBanner>
      {t('sticky_banner.title.prefix')}{" "}
      <Link to="/sign-up">
        {t('sticky_banner.title.highlight')}
      </Link>
    </StickyBanner>
  );
};
