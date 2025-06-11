// src/hooks/useGTM.ts
import { useCallback } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const useGTM = () => {
  const pushEvent = useCallback((event: string, data?: Record<string, any>) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event,
        ...data,
      });
      console.log("GTM Event:", event, data); // Para debug
    }
  }, []);

  // Eventos específicos para a landing page
  const trackFormSubmission = useCallback(
    (formData: {
      name: string;
      phone: string;
      city: string;
      billValue?: string;
    }) => {
      pushEvent("form_submit", {
        form_name: "contact_form",
        user_name: formData.name,
        user_city: formData.city,
        bill_value: formData.billValue || "not_provided",
        conversion_value: formData.billValue
          ? parseFloat(
              formData.billValue.replace(/[^0-9.,]/g, "").replace(",", ".")
            ) || 0
          : 0,
      });
    },
    [pushEvent]
  );

  const trackPageView = useCallback(
    (pageName: string) => {
      pushEvent("page_view", {
        page_name: pageName,
        page_type: "landing_page",
      });
    },
    [pushEvent]
  );

  const trackButtonClick = useCallback(
    (buttonName: string, location?: string) => {
      pushEvent("button_click", {
        button_name: buttonName,
        button_location: location,
        click_type: "cta_button",
      });
    },
    [pushEvent]
  );

  const trackSectionView = useCallback(
    (sectionName: string) => {
      pushEvent("section_view", {
        section_name: sectionName,
        engagement_type: "scroll",
      });
    },
    [pushEvent]
  );

  const trackVideoInteraction = useCallback(
    (action: "play" | "pause" | "end", videoId?: string) => {
      pushEvent("video_interaction", {
        video_action: action,
        video_id: videoId || "hero_video",
        engagement_type: "video",
      });
    },
    [pushEvent]
  );

  const trackTestimonialView = useCallback(
    (testimonialIndex: number, testimonialName: string) => {
      pushEvent("testimonial_view", {
        testimonial_index: testimonialIndex,
        testimonial_name: testimonialName,
        engagement_type: "social_proof",
      });
    },
    [pushEvent]
  );

  const trackFAQInteraction = useCallback(
    (question: string, questionIndex: number) => {
      pushEvent("faq_interaction", {
        faq_question: question,
        faq_index: questionIndex,
        engagement_type: "information_seeking",
      });
    },
    [pushEvent]
  );

  const trackWhatsAppClick = useCallback(
    (location: string, message?: string) => {
      pushEvent("whatsapp_click", {
        click_location: location,
        message_type: message || "default",
        contact_method: "whatsapp",
      });
    },
    [pushEvent]
  );

  const trackServiceInterest = useCallback(
    (serviceName: string) => {
      pushEvent("service_interest", {
        service_name: serviceName,
        engagement_type: "feature_interest",
      });
    },
    [pushEvent]
  );

  const trackLanguageChange = useCallback(
    (fromLang: string, toLang: string) => {
      pushEvent("language_change", {
        from_language: fromLang,
        to_language: toLang,
        user_preference: toLang,
      });
    },
    [pushEvent]
  );

  const trackScrollDepth = useCallback(
    (depth: 25 | 50 | 75 | 100) => {
      pushEvent("scroll_depth", {
        scroll_percentage: depth,
        engagement_level: depth >= 75 ? "high" : depth >= 50 ? "medium" : "low",
      });
    },
    [pushEvent]
  );

  const trackTimeOnPage = useCallback(
    (timeInSeconds: number) => {
      pushEvent("time_on_page", {
        time_seconds: timeInSeconds,
        engagement_duration:
          timeInSeconds >= 120
            ? "long"
            : timeInSeconds >= 60
            ? "medium"
            : "short",
      });
    },
    [pushEvent]
  );

  return {
    pushEvent,
    trackFormSubmission,
    trackPageView,
    trackButtonClick,
    trackSectionView,
    trackVideoInteraction,
    trackTestimonialView,
    trackFAQInteraction,
    trackWhatsAppClick,
    trackServiceInterest,
    trackLanguageChange,
    trackScrollDepth,
    trackTimeOnPage,
  };
};
