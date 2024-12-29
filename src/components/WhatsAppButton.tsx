import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export const WhatsAppButton = ({
  phoneNumber,
  message,
}: WhatsAppButtonProps) => {
  const { t } = useTranslation("content");
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  const defaultMessage = t("whatsapp.default_message");
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    message || defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute bottom-[calc(100%+0.5rem)] right-0 hidden group-hover:block">
        <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
          {t("whatsapp.tooltip")}
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white transform rotate-45" />
        </div>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110"
        aria-label={t("whatsapp.aria_label")}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
};
