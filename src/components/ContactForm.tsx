import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, Phone } from "lucide-react";
import React from "react";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Section
      subtitle="Contato"
      title="Entre em Contato"
      description="Estamos aqui para ajudar. Envie-nos uma mensagem e retornaremos o mais breve possível."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="flex h-full flex-col justify-center space-y-6 border-none bg-card/50 p-6">
          <div className="flex items-start space-x-3">
            <Phone className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Telefone</p>
              <p className="text-sm text-muted-foreground">(00) 1234-5678</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-sm text-muted-foreground">
                contato@example.com
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Horário de Atendimento</p>
              <p className="text-sm text-muted-foreground">
                Segunda - Sexta: 8h às 18h
              </p>
            </div>
          </div>
        </Card>

        <Card className="border-none bg-card/50">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Input placeholder="Nome" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Sobrenome" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-background"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Mensagem"
                  className="min-h-[120px] bg-background"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};

export default ContactForm;
