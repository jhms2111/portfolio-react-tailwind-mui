export default function Contact() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Fale Conosco
        </h1>

        <section id="contact" className="scroll-mt-24">
          <div className="space-y-4 text-blue-900 text-lg">
            <p>
              <strong>Nome Completo:</strong> João Henrique De Morais
            </p>
            <p>
              <strong>Endereço Comercial:</strong> Barcelona, Espanha
            </p>
            <p>
              <strong>Telefone:</strong>{" "}
              <a href="tel:+34674458434" className="text-lime-600 hover:underline">
                +34 674 458 434
              </a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:jhms@enkibot.com.br" className="text-lime-600 hover:underline">
                jhms@enkibot.com.br
              </a>
            </p>
            <p>
              <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às 18h (Horário CET)
            </p>
          </div>

          <div className="border-t border-blue-200 mt-8 pt-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              Política de Privacidade
            </h2>
            <p className="text-blue-800 leading-relaxed">
              Valorizamos a privacidade de seus dados. Todas as informações fornecidas são utilizadas
              exclusivamente para comunicação e suporte.
              Para saber mais, consulte nossa{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Política de Privacidade
              </a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
