// src/hooks/usePageTracking.ts
import { useEffect, useRef } from "react";
import { useGTM } from "./useGTM";

export const usePageTracking = () => {
  const { trackScrollDepth, trackTimeOnPage, trackPageView } = useGTM();
  const scrollDepthsTracked = useRef(new Set<number>());
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Track page view inicial
    trackPageView("landing_page");

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Track marcos de scroll
      [25, 50, 75, 100].forEach((depth) => {
        if (
          scrollPercentage >= depth &&
          !scrollDepthsTracked.current.has(depth)
        ) {
          scrollDepthsTracked.current.add(depth);
          trackScrollDepth(depth as 25 | 50 | 75 | 100);
        }
      });
    };

    // Track time on page
    const trackTime = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);

      // Track marcos de tempo (30s, 60s, 120s, 300s)
      if (
        timeSpent === 30 ||
        timeSpent === 60 ||
        timeSpent === 120 ||
        timeSpent === 300
      ) {
        trackTimeOnPage(timeSpent);
      }
    };

    // Listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    const timeInterval = setInterval(trackTime, 1000);

    // Track quando o usuário sai da página
    const handleBeforeUnload = () => {
      const finalTime = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(finalTime);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearInterval(timeInterval);
    };
  }, [trackScrollDepth, trackTimeOnPage, trackPageView]);
};
