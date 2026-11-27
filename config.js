/* ===== CONFIGURAÇÃO CENTRAL — edite só este arquivo para personalizar o site ===== */
const config = {
  nomeBarbearia: "BARBER CLUB",
  logo: "", // opcional: caminho/URL de uma imagem de logo (ex.: "img/logo.png")
  whatsappNumber: "5511999999999", // DDI + DDD + número, só dígitos
  instagram: "https://instagram.com/",
  endereco: "Endereço demonstrativo",
  horario: "Segunda a sábado, das 9h às 20h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Endereco+demonstrativo",

  // Cores (aplicadas automaticamente no site)
  cores: { marinho: "#101C2C", prata: "#AEB8C4", cinza: "#293747", branco: "#FFFFFF" },

  // Fotos: coloque o caminho (ex.: "img/hero.jpg") ou URL. Vazio = arte padrão da marca.
  fotos: { hero: "", sobre: "" },

  // Horários oferecidos no formulário
  horarioInicio: 9, horarioFim: 20, // 9h até 20h, de 30 em 30 min

  // Serviços e preços (demonstrativos)
  servicos: [
    { nome: "Corte masculino", preco: "R$ 40", desc: "Corte na tesoura ou máquina, do jeito que combina com você.", foto: "" },
    { nome: "Barba", preco: "R$ 30", desc: "Barba alinhada com toalha quente e acabamento na navalha.", foto: "" },
    { nome: "Corte + barba", preco: "R$ 60", desc: "O combo completo para sair renovado da cadeira.", foto: "" },
    { nome: "Degradê", preco: "R$ 45", desc: "Degradê preciso, com transição suave e acabamento limpo.", foto: "" },
    { nome: "Sobrancelha", preco: "R$ 15", desc: "Design discreto que realça o olhar sem exageros.", foto: "" },
    { nome: "Pigmentação", preco: "R$ 25", desc: "Preenchimento natural para realçar falhas e contornos.", foto: "" }
  ],

  // Galeria
  galeria: [
    { titulo: "Degradê", foto: "" },
    { titulo: "Corte social", foto: "" },
    { titulo: "Corte moderno", foto: "" },
    { titulo: "Barba alinhada", foto: "" },
    { titulo: "Transformação de visual", foto: "" },
    { titulo: "Ambiente da barbearia", foto: "" }
  ],

  // ATENÇÃO: depoimentos FICTÍCIOS, apenas para demonstração.
  // Ao entregar o site, troque por avaliações reais do cliente ou remova a seção.
  avaliacoes: [
    { nome: "Cliente exemplo 1", texto: "Atendimento excelente e ambiente muito confortável. Saí satisfeito com o resultado." },
    { nome: "Cliente exemplo 2", texto: "Pontualidade e capricho nos detalhes. O agendamento pelo WhatsApp é muito prático." },
    { nome: "Cliente exemplo 3", texto: "Profissionais atenciosos que entendem o estilo que você procura." }
  ]
};
