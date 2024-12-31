import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next"; // Changed from next-intl
import React from "react";

const ContactForm = () => {
  const { t } = useTranslation(); // Changed from useTranslations

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div id="contact">
      <Section
        subtitle={t("contact.subtitle")}
        title={t("contact.title")}
        description={t("contact.description")}
      >
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="flex h-full flex-col justify-center space-y-6 border-none bg-card/50 p-6">
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{t("contact.info.phone.label")}</p>
                <p className="text-sm text-muted-foreground">{t("contact.info.phone.value")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{t("contact.info.email.label")}</p>
                <p className="text-sm text-muted-foreground">{t("contact.info.email.value")}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">{t("contact.info.hours.label")}</p>
                <p className="text-sm text-muted-foreground">{t("contact.info.hours.value")}</p>
              </div>
            </div>
          </Card>

          <Card className="border-none bg-card/50">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Input placeholder={t("contact.form.first_name")} className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder={t("contact.form.last_name")} className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder={t("contact.form.email")}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder={t("contact.form.message")}
                    className="min-h-[120px] bg-background"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default ContactForm;
