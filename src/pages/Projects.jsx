const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-blue-900 text-white py-20 px-4"
    >
   <h2 className="text-2xl sm:text-4xl font-bold mb-10 text-center">O que a plataforma faz</h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Card 1 - Atendimento automatizado */}
        <div className="bg-white text-blue-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-2">Atendimento automatizado</h3>
          <p>
            O bot conversa com seus clientes de forma natural, responde perguntas frequentes, oferece produtos e resolve dúvidas sem intervenção humana.
          </p>
        </div>

        {/* Card 2 - Handoff para equipe humana */}
        <div className="bg-white text-blue-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-2">Handoff inteligente</h3>
          <p>
            Quando necessário, a conversa é transferida automaticamente para um atendente humano, com histórico completo e continuidade garantida.
          </p>
        </div>

        {/* Card 3 - Gerenciamento de múltiplos números */}
        <div className="bg-white text-blue-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-2">Gerencie vários números</h3>
          <p>
            Você pode operar com mais de um número WhatsApp na mesma conta, atribuindo chats diferentes a bots ou atendentes específicos.
          </p>
        </div>

        {/* Card 4 - Histórico completo e controle */}
        <div className="bg-white text-blue-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-2">Histórico de conversas</h3>
          <p>
            Visualize, filtre e responda todas as conversas com seus clientes. Veja mídias, mensagens antigas e tenha total controle da comunicação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
