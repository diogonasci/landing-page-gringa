import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    billValue: "",
    city: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log("Formulário enviado:", formData);
    // Reset do formulário após envio
    setFormData({
      name: "",
      phone: "",
      email: "",
      billValue: "",
      city: "",
    });
    // Feedback para o usuário
    alert("Obrigado! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="bg-solarrio-dark p-6">
            <h2 className="text-2xl font-bold text-center text-white">
              Solicite sua{" "}
              <span className="text-solarrio-orange">análise gratuita</span>
            </h2>
            <p className="text-center text-white mt-2">
              Preencha os campos abaixo e saiba quanto pode economizar na sua
              conta de luz
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-solarrio-orange focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-solarrio-orange focus:border-transparent"
                placeholder="(DDD) 99999-9999"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-mail*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-solarrio-orange focus:border-transparent"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="billValue"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Valor da sua conta de luz mensal*
              </label>
              <input
                type="text"
                id="billValue"
                name="billValue"
                value={formData.billValue}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-solarrio-orange focus:border-transparent"
                placeholder="R$ 000,00"
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
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-solarrio-orange focus:border-transparent"
                required
              >
                <option value="" disabled>
                  Selecione sua cidade
                </option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Niterói">Niterói</option>
                <option value="Nova Iguaçu">Nova Iguaçu</option>
                <option value="Duque de Caxias">Duque de Caxias</option>
                <option value="São Gonçalo">São Gonçalo</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-solarrio-orange text-white py-3 rounded-md font-medium hover:brightness-110 transition-all"
            >
              Quero solicitar análise gratuita
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Seus dados estão protegidos e não compartilhamos com terceiros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
