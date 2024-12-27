import { Link } from "react-router-dom";
import { StickyBanner } from "./StickyBanner";

export const DemoBanner = () => (
  <StickyBanner>
    Apoio de quem conhece sua escola -{" "}
    <Link to="/sign-up">Professores especializados no CSANL</Link>
  </StickyBanner>
);
