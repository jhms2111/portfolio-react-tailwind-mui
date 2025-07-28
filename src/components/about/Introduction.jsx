const Introduction = () => {
  return (
    <div className="bg-blue-500 text-lime-100 p-8 flex items-center justify-center">
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">
          Conecte sua empresa ao futuro
        </h2>
        <p className="text-lg leading-relaxed">
          Automatize atendimentos, venda pelo WhatsApp e ofereça experiências inesquecíveis ao seu cliente — tudo em uma única plataforma.
        </p>

        <ul className="mt-6 list-disc list-inside space-y-1">
          <li>Atendimentos instantâneos</li>
          <li>Histórico organizado por conversa</li>
          <li>Bot inteligente e personalizável</li>
          <li>Controle manual quando necessário</li>
        </ul>
      </div>
    </div>
  );
};

export default Introduction;
