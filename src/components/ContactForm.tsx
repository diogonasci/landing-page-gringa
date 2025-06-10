import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    billValue: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Erro ao enviar formulário");
      }

      // Reset do formulário após envio
      setFormData({
        name: "",
        phone: "",
        city: "",
        billValue: "",
      });

      // Feedback para o usuário
      alert("Obrigado! Entraremos em contato em breve.");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente."
      );
      console.error("Erro ao enviar formulário:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="bg-radial-dark py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="relative p-0.5">
          {/* Sombra/borda inferior e direita */}
          <div className="absolute top-0.5 left-0.5 w-full h-full bg-radial-dark rounded-2xl"></div>
          {/* Fundo branco com borda laranja no topo */}
          <div className="relative bg-white rounded-2xl border-t-4 border-radial-orange px-5 py-8 md:px-7 md:py-10 z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-radial-dark">
                <span className="text-radial-orange">Solicite</span> sua análise
                gratuita
              </h2>
              <p className="text-gray-700 mt-2">
                Preencha o formulário abaixo e descubra quanto você pode
                economizar
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome completo*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-radial-orange focus:border-transparent"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  WhatsApp*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-radial-orange focus:border-transparent"
                  placeholder="(DDD) 99999-9999"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cidade*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-radial-orange focus:border-transparent"
                  placeholder="Digite sua cidade"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="billValue"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Valor da sua conta de luz mensal (opcional)
                </label>
                <input
                  type="text"
                  id="billValue"
                  name="billValue"
                  value={formData.billValue}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-radial-orange focus:border-transparent"
                  placeholder="R$ 000,00"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-radial-orange text-white py-3 rounded-md font-medium hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Quero minha análise gratuita"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">
                Seus dados estão seguros conosco. Não compartilhamos suas
                informações.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
