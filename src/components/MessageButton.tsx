import { MessageCircle, MessageSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface MessageButtonProps {
  phoneNumber: string;
  message?: string;
}

export const MessageButton = ({ phoneNumber, message }: MessageButtonProps) => {
  const { t } = useTranslation("content");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  const defaultMessage = t("message_button.default_message");

  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    message || defaultMessage
  )}`;
  const smsUrl = `sms:${formattedPhone}?body=${encodeURIComponent(
    message || defaultMessage
  )}`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={containerRef}>
      {isOpen && (
        <div className="absolute bottom-[calc(100%+0.5rem)] right-0 min-w-[200px]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 hover:bg-slate-50 transition-colors"
            >
              <MessageSquare className="h-5 w-5 text-green-500" />
              <span>WhatsApp</span>
            </a>
            <a
              href={smsUrl}
              className="flex items-center gap-2 px-4 py-3 hover:bg-slate-50 transition-colors"
            >
              <MessageSquare className="h-5 w-5 text-blue-500" />
              <span>SMS</span>
            </a>
          </div>
          <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white transform rotate-45" />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
};
