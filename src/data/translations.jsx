import React from "react";

export const languageOptions = [
  { value: "pt-PT", label: "Português de Portugal", flag: "pt-PT" },
  { value: "pt-BR", label: "Português do Brasil", flag: "pt-BR" },
  { value: "en", label: "English", flag: "en" },
];

const rich = (children) =>
  React.createElement(React.Fragment, null, ...children);
const emphasis = (text) => React.createElement("em", null, text);
const strong = (text) => React.createElement("strong", null, text);
const span = (text) => React.createElement("span", null, text);
const br = () => React.createElement("br");

export const translations = {
  "pt-PT": {
    nav: {
      solutions: "Soluções",
      loyalty: "ORIZON Loyalty",
      process: "Como fazemos",
      portfolio: "Portfólio",
      contact: "Contacto",
      cta: "Falar com a ORIZON",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      label: "ESTRATÉGIA + DESIGN + TECNOLOGIA",
      title: rich([
        "Ideias boas merecem uma ",
        emphasis("presença"),
        " à altura.",
      ]),
      text: "A ORIZON cria marcas, sites e experiências digitais que tornam negócios mais claros, desejados e fáceis de escolher.",
      primary: "Começar um projecto",
      secondary: "Explorar soluções",
      proof: "Projectos à medida para negócios que querem crescer",
      visualLabel: "feito para ser lembrado",
      visualHeading: rich([
        "O seu próximo cliente",
        br(),
        strong("já está por perto."),
      ]),
      reach: "alcance qualificado",
      secure: "seguro",
      clarity: "clareza que converte",
      region: "Portugal · Europa · Mundo",
      scroll: "deslize para descobrir",
    },
    intro: {
      label: "PORQUÊ A ORIZON",
      title: rich([
        "Não é só sobre aparecer.",
        br(),
        span("É sobre fazer sentido."),
      ]),
      text: "Num mundo cheio de marcas a disputar atenção, presença sem intenção transforma-se em ruído. A ORIZON une estratégia, criatividade e tecnologia para transformar aquilo que a sua empresa faz numa experiência que as pessoas entendem, lembram e escolhem.",
      link: "Conheça a nossa forma de trabalhar",
    },
    services: {
      label: "O QUE FAZEMOS",
      title: rich(["Do primeiro olhar", br(), span("ao próximo passo.")]),
      text: "Uma base digital consistente para comunicar melhor, atrair as pessoas certas e crescer com mais intenção.",
      items: [
        [
          "Sites que posicionam",
          "Estruturas rápidas, responsivas e pensadas para transformar visita em conversa.",
          "Web design",
        ],
        [
          "Cardápio digital",
          "Uma experiência simples para o cliente pedir, descobrir e voltar ao seu negócio.",
          "Restaurantes",
        ],
        [
          "Marca com presença",
          "Identidade visual, logo e direção criativa para a sua empresa ser reconhecida.",
          "Branding",
        ],
        [
          "Atração que performa",
          "Landing pages, tráfego pago e conteúdo para colocar a sua oferta na frente das pessoas certas.",
          "Marketing",
        ],
      ],
    },
    loyalty: {
      label: "UM PRODUTO ORIZON",
      title: rich([
        "O seu restaurante tem clientes.",
        br(),
        emphasis("A ORIZON ajuda a fazê-los voltar."),
      ]),
      text: "O ORIZON Loyalty é a nossa plataforma de fidelização e inteligência para restaurantes. Transforma dados de consumo em relacionamento, campanhas e decisões mais inteligentes.",
      cta: "Quero conhecer o produto",
      sample: "amostra ilustrativa",
      metric: "leitura de recorrência",
      tailored: "à medida",
      data: rich(["dados da sua operação ", span("num só lugar")]),
      insightLabel: "ORIZON insight / exemplo",
      insight:
        "Encontre clientes que estão a demorar mais a voltar e transforme esse sinal numa campanha de relacionamento.",
    },
    process: {
      label: "COMO FAZEMOS",
      title: rich(["Estratégia antes", br(), span("de estética.")]),
      text: "Cada projecto começa por compreender o negócio, o momento e a ambição por trás dele.",
      steps: [
        [
          "Entender",
          "Investigamos o contexto, as pessoas e o problema real a resolver.",
        ],
        [
          "Construir",
          "Desenhamos a estratégia e criamos a experiência que dá forma à ideia.",
        ],
        [
          "Evoluir",
          "Colocamos no ar, medimos o que importa e melhoramos continuamente.",
        ],
      ],
    },
    faq: {
      label: "AINDA COM DÚVIDAS?",
      title: rich(["Vamos deixar", br(), span("tudo claro.")]),
      text: "Um bom projecto começa com uma conversa simples. Sem apresentação pronta, sem complicação.",
      link: "Conversar pelo WhatsApp",
      items: [
        [
          "Atendem empresas de qualquer segmento?",
          "Sim. Actuamos com negócios locais, serviços e empresas em crescimento. Para restaurantes, também criamos experiências digitais e estratégias de recorrência mais específicas.",
        ],
        [
          "Quanto tempo leva para colocar um site no ar?",
          "Cada projecto tem um ritmo, mas uma landing page costuma ficar pronta em poucos dias úteis. Antes de começar, apresentamos um cronograma claro e as etapas de aprovação.",
        ],
        [
          "A ORIZON também cuida do marketing depois do lançamento?",
          "Sim. Podemos assumir a evolução do site, campanhas de tráfego pago, conteúdo para Instagram e as próximas decisões de comunicação da marca.",
        ],
      ],
    },
    portfolio: {
      label: "PROJECTO EM DESTAQUE",
      title: rich(["Design que", br(), span("gera confiança.")]),
      text: "Este site para a advogada Nathieli de Sousa transforma informação jurídica numa experiência clara, acessível e pronta para gerar conversas.",
      cta: "Ver projecto",
      project: "Site institucional · Nathieli de Sousa",
      resultsLabel: "RESULTADO MENSURÁVEL",
      resultsTitle: "Performance que também se vê.",
      resultsText:
        "A optimização da experiência mobile elevou a pontuação de desempenho de 47 para 96 no Lighthouse.",
      before: "Antes · Desempenho",
      after: "Depois · Desempenho",
      beforeAlt: "Relatório Lighthouse antes da optimização, com desempenho 47",
      afterAlt: "Relatório Lighthouse depois da optimização, com desempenho 96",
    },
    contact: {
      label: "VAMOS CONVERSAR",
      title: rich(["O próximo capítulo", br(), emphasis("começa aqui.")]),
      text: "Conte-nos um pouco sobre o que está a construir. Respondemos com ideias, caminhos e os próximos passos.",
      global: "Atendimento global",
      name: "O seu nome",
      namePlaceholder: "Como podemos tratá-lo?",
      email: "O seu melhor e-mail",
      emailPlaceholder: "voce@empresa.com",
      help: "Como podemos ajudar?",
      choose: "Escolha uma opção",
      message: "Conte mais (opcional)",
      messagePlaceholder: "Um pouco do contexto já ajuda bastante.",
      send: "Enviar mensagem",
      sending: "A enviar...",
      sent: "Mensagem enviada",
      note: "Recebemos a sua mensagem. Em breve entraremos em contacto.",
      configurationError:
        "O formulário ainda não está configurado. Adicione a chave do Web3Forms no ambiente do site.",
      error:
        "Não foi possível enviar agora. Tente novamente ou fale connosco pelo WhatsApp.",
      options: [
        "Site ou landing page",
        "Marca e identidade visual",
        "Marketing e tráfego pago",
        "ORIZON Loyalty",
      ],
    },
    footer: {
      description: rich([
        "Presença digital para negócios",
        br(),
        "que querem ir mais longe.",
      ]),
      rights: "Todos os direitos reservados.",
      tagline: "Estratégia para o que vem a seguir.",
      instagram: "Instagram da ORIZON",
      whatsapp: "Falar com a ORIZON pelo WhatsApp",
    },
  },
  "pt-BR": {
    nav: {
      solutions: "Soluções",
      loyalty: "ORIZON Loyalty",
      process: "Como fazemos",
      portfolio: "Portfólio",
      contact: "Contato",
      cta: "Falar com a ORIZON",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
    },
    hero: {
      label: "ESTRATÉGIA + DESIGN + TECNOLOGIA",
      title: rich([
        "Ideias boas merecem uma ",
        emphasis("presença"),
        " à altura.",
      ]),
      text: "A ORIZON cria marcas, sites e experiências digitais que tornam negócios mais claros, desejados e fáceis de escolher.",
      primary: "Começar um projeto",
      secondary: "Explorar soluções",
      proof: "Projetos sob medida para negócios que querem crescer",
      visualLabel: "feito para ser lembrado",
      visualHeading: rich([
        "Seu próximo cliente",
        br(),
        strong("já está por perto."),
      ]),
      reach: "alcance qualificado",
      secure: "seguro",
      clarity: "clareza que converte",
      region: "Brasil · Europa · Mundo",
      scroll: "role para descobrir",
    },
    intro: {
      label: "POR QUE A ORIZON",
      title: rich([
        "Não é só sobre aparecer.",
        br(),
        span("É sobre fazer sentido."),
      ]),
      text: "Em um mundo cheio de marcas disputando atenção, presença sem intenção vira ruído. A ORIZON une estratégia, criatividade e tecnologia para transformar o que sua empresa faz em uma experiência que as pessoas entendem, lembram e escolhem.",
      link: "Conheça nosso jeito de trabalhar",
    },
    services: {
      label: "O QUE FAZEMOS",
      title: rich(["Do primeiro olhar", br(), span("ao próximo passo.")]),
      text: "Uma base digital consistente para você comunicar melhor, atrair as pessoas certas e crescer com mais intenção.",
      items: [
        [
          "Sites que posicionam",
          "Estruturas rápidas, responsivas e pensadas para transformar visita em conversa.",
          "Web design",
        ],
        [
          "Cardápio digital",
          "Uma experiência simples para o cliente pedir, descobrir e voltar ao seu negócio.",
          "Restaurantes",
        ],
        [
          "Marca com presença",
          "Identidade visual, logo e direção criativa para a sua empresa ser reconhecida.",
          "Branding",
        ],
        [
          "Atração que performa",
          "Landing pages, tráfego pago e conteúdo para colocar sua oferta na frente das pessoas certas.",
          "Marketing",
        ],
      ],
    },
    loyalty: {
      label: "UM PRODUTO ORIZON",
      title: rich([
        "Seu restaurante tem clientes.",
        br(),
        emphasis("A ORIZON ajuda a fazer eles voltarem."),
      ]),
      text: "O ORIZON Loyalty é nossa plataforma de fidelização e inteligência para restaurantes. Ela transforma dados de consumo em relacionamento, campanhas e decisões mais inteligentes.",
      cta: "Quero conhecer o produto",
      sample: "amostra ilustrativa",
      metric: "leitura de recorrência",
      tailored: "sob medida",
      data: rich(["dados da sua operação ", span("em um só lugar")]),
      insightLabel: "ORIZON insight / exemplo",
      insight:
        "Encontre clientes que estão demorando mais para voltar e transforme esse sinal em uma campanha de relacionamento.",
    },
    process: {
      label: "COMO FAZEMOS",
      title: rich(["Estratégia antes", br(), span("de estética.")]),
      text: "Cada projeto começa entendendo o negócio, o momento e a ambição por trás dele.",
      steps: [
        [
          "Entender",
          "Investigamos o contexto, as pessoas e o problema real a resolver.",
        ],
        [
          "Construir",
          "Desenhamos a estratégia e criamos a experiência que dá forma à ideia.",
        ],
        [
          "Evoluir",
          "Colocamos no ar, medimos o que importa e melhoramos continuamente.",
        ],
      ],
    },
    faq: {
      label: "AINDA COM DÚVIDAS?",
      title: rich(["Vamos deixar", br(), span("tudo claro.")]),
      text: "Um bom projeto começa com uma conversa simples. Sem apresentação pronta, sem complicação.",
      link: "Conversar pelo WhatsApp",
      items: [
        [
          "Vocês atendem empresas de qualquer segmento?",
          "Sim. Atuamos com negócios locais, serviços e empresas em crescimento. Para restaurantes, também criamos experiências digitais e estratégias de recorrência mais específicas.",
        ],
        [
          "Quanto tempo leva para colocar um site no ar?",
          "Cada projeto tem um ritmo, mas uma landing page costuma sair em poucos dias úteis. Antes de começar, apresentamos um cronograma claro e as etapas de aprovação.",
        ],
        [
          "A ORIZON também cuida do marketing depois do lançamento?",
          "Sim. Podemos assumir a evolução do site, campanhas de tráfego pago, conteúdo para Instagram e as próximas decisões de comunicação da marca.",
        ],
      ],
    },
    portfolio: {
      label: "PROJETO EM DESTAQUE",
      title: rich(["Design que", br(), span("gera confiança.")]),
      text: "Este site para a advogada Nathieli de Sousa transforma informação jurídica em uma experiência clara, acessível e pronta para gerar conversas.",
      cta: "Ver projeto",
      project: "Site institucional · Nathieli de Sousa",
      resultsLabel: "RESULTADO MENSURÁVEL",
      resultsTitle: "Performance que também se vê.",
      resultsText:
        "A otimização da experiência mobile elevou a pontuação de desempenho de 47 para 96 no Lighthouse.",
      before: "Antes · Desempenho",
      after: "Depois · Desempenho",
      beforeAlt: "Relatório Lighthouse antes da otimização, com desempenho 47",
      afterAlt: "Relatório Lighthouse depois da otimização, com desempenho 96",
    },
    contact: {
      label: "VAMOS CONVERSAR",
      title: rich(["O próximo capítulo", br(), emphasis("começa aqui.")]),
      text: "Conte um pouco sobre o que você está construindo. A gente responde com ideias, caminhos e os próximos passos.",
      global: "Atendimento global",
      name: "Seu nome",
      namePlaceholder: "Como podemos te chamar?",
      email: "Seu melhor e-mail",
      emailPlaceholder: "voce@empresa.com",
      help: "Como podemos ajudar?",
      choose: "Escolha uma opção",
      message: "Conte mais (opcional)",
      messagePlaceholder: "Um pouco do contexto já ajuda bastante.",
      send: "Enviar mensagem",
      sending: "Enviando...",
      sent: "Mensagem enviada",
      note: "Recebemos sua mensagem. Em breve entraremos em contato.",
      configurationError:
        "O formulário ainda não está configurado. Adicione a chave do Web3Forms no ambiente do site.",
      error:
        "Não foi possível enviar agora. Tente novamente ou fale com a gente pelo WhatsApp.",
      options: [
        "Site ou landing page",
        "Marca e identidade visual",
        "Marketing e tráfego pago",
        "ORIZON Loyalty",
      ],
    },
    footer: {
      description: rich([
        "Presença digital para negócios",
        br(),
        "que querem ir mais longe.",
      ]),
      rights: "Todos os direitos reservados.",
      tagline: "Estratégia para o que vem a seguir.",
      instagram: "Instagram da ORIZON",
      whatsapp: "Falar com a ORIZON pelo WhatsApp",
    },
  },
  en: {
    nav: {
      solutions: "Solutions",
      loyalty: "ORIZON Loyalty",
      process: "Our process",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Talk to ORIZON",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      label: "STRATEGY + DESIGN + TECHNOLOGY",
      title: rich([
        "Good ideas deserve a ",
        emphasis("presence"),
        " to match.",
      ]),
      text: "ORIZON creates brands, websites and digital experiences that make businesses clearer, more desirable and easier to choose.",
      primary: "Start a project",
      secondary: "Explore solutions",
      proof: "Tailored projects for businesses ready to grow",
      visualLabel: "made to be remembered",
      visualHeading: rich([
        "Your next customer",
        br(),
        strong("is already nearby."),
      ]),
      reach: "qualified reach",
      secure: "secure",
      clarity: "clarity that converts",
      region: "Portugal · Europe · Worldwide",
      scroll: "scroll to discover",
    },
    intro: {
      label: "WHY ORIZON",
      title: rich([
        "It is not just about showing up.",
        br(),
        span("It is about making sense."),
      ]),
      text: "In a world full of brands competing for attention, presence without intention becomes noise. ORIZON brings strategy, creativity and technology together to turn what your business does into an experience people understand, remember and choose.",
      link: "Discover how we work",
    },
    services: {
      label: "WHAT WE DO",
      title: rich(["From the first look", br(), span("to the next step.")]),
      text: "A consistent digital foundation to communicate better, attract the right people and grow with intention.",
      items: [
        [
          "Websites that position",
          "Fast, responsive structures designed to turn visits into conversations.",
          "Web design",
        ],
        [
          "Digital menu",
          "A simple experience for customers to order, discover and return to your business.",
          "Restaurants",
        ],
        [
          "A brand with presence",
          "Visual identity, logo and creative direction to make your company recognisable.",
          "Branding",
        ],
        [
          "Performance-driven attraction",
          "Landing pages, paid media and content to put your offer in front of the right people.",
          "Marketing",
        ],
      ],
    },
    loyalty: {
      label: "AN ORIZON PRODUCT",
      title: rich([
        "Your restaurant has customers.",
        br(),
        emphasis("ORIZON helps bring them back."),
      ]),
      text: "ORIZON Loyalty is our loyalty and intelligence platform for restaurants. It turns consumption data into relationships, campaigns and smarter decisions.",
      cta: "Discover the product",
      sample: "illustrative sample",
      metric: "returning customer read",
      tailored: "tailored",
      data: rich(["your operation's data ", span("in one place")]),
      insightLabel: "ORIZON insight / example",
      insight:
        "Find customers taking longer to return and turn that signal into a relationship campaign.",
    },
    process: {
      label: "OUR PROCESS",
      title: rich(["Strategy before", br(), span("aesthetics.")]),
      text: "Every project starts by understanding the business, its moment and the ambition behind it.",
      steps: [
        [
          "Understand",
          "We investigate the context, the people and the real problem to solve.",
        ],
        [
          "Build",
          "We shape the strategy and create the experience that gives the idea form.",
        ],
        ["Evolve", "We launch, measure what matters and keep improving."],
      ],
    },
    faq: {
      label: "STILL HAVE QUESTIONS?",
      title: rich(["Let us make", br(), span("everything clear.")]),
      text: "A good project starts with a simple conversation. No ready-made presentation, no complications.",
      link: "Talk on WhatsApp",
      items: [
        [
          "Do you work with businesses in any industry?",
          "Yes. We work with local businesses, services and growing companies. For restaurants, we also create more specific digital experiences and retention strategies.",
        ],
        [
          "How long does it take to launch a website?",
          "Every project has its own pace, but a landing page can be ready in a few business days. Before we start, we share a clear timeline and approval stages.",
        ],
        [
          "Does ORIZON also handle marketing after launch?",
          "Yes. We can manage website evolution, paid media campaigns, Instagram content and the brand's next communication decisions.",
        ],
      ],
    },
    portfolio: {
      label: "FEATURED PROJECT",
      title: rich(["Design that", br(), span("builds trust.")]),
      text: "A website for lawyer Nathieli de Sousa that turns legal information into a clear, accessible experience ready to start conversations.",
      cta: "View project",
      project: "Institutional website · Nathieli de Sousa",
      resultsLabel: "MEASURABLE RESULT",
      resultsTitle: "Performance you can see.",
      resultsText:
        "Mobile experience optimizations raised the Lighthouse performance score from 47 to 96.",
      before: "Before · Performance",
      after: "After · Performance",
      beforeAlt:
        "Lighthouse report before optimization, with a performance score of 47",
      afterAlt:
        "Lighthouse report after optimization, with a performance score of 96",
    },
    contact: {
      label: "LET'S TALK",
      title: rich(["The next chapter", br(), emphasis("starts here.")]),
      text: "Tell us a little about what you are building. We will reply with ideas, direction and next steps.",
      global: "Worldwide service",
      name: "Your name",
      namePlaceholder: "What should we call you?",
      email: "Your best email",
      emailPlaceholder: "you@company.com",
      help: "How can we help?",
      choose: "Choose an option",
      message: "Tell us more (optional)",
      messagePlaceholder: "A little context already helps a lot.",
      send: "Send message",
      sending: "Sending...",
      sent: "Message sent",
      note: "We received your message and will be in touch soon.",
      configurationError:
        "The form is not configured yet. Add the Web3Forms key to the site environment.",
      error: "We could not send this now. Try again or reach us on WhatsApp.",
      options: [
        "Website or landing page",
        "Brand and visual identity",
        "Marketing and paid media",
        "ORIZON Loyalty",
      ],
    },
    footer: {
      description: rich([
        "Digital presence for businesses",
        br(),
        "ready to go further.",
      ]),
      rights: "All rights reserved.",
      tagline: "Strategy for what comes next.",
      instagram: "ORIZON Instagram",
      whatsapp: "Talk to ORIZON on WhatsApp",
    },
  },
};

const accessibility = {
  "pt-PT": {
    logo: "ORIZON, voltar ao início",
    navigation: "Navegação principal",
    language: "Idioma",
    visual: "Painel conceptual de uma experiência digital ORIZON",
  },
  "pt-BR": {
    logo: "ORIZON, voltar ao início",
    navigation: "Navegação principal",
    language: "Idioma",
    visual: "Painel conceitual de uma experiência digital ORIZON",
  },
  en: {
    logo: "ORIZON, back to home",
    navigation: "Main navigation",
    language: "Language",
    visual: "Conceptual panel of an ORIZON digital experience",
  },
};

Object.entries(accessibility).forEach(([language, labels]) => {
  translations[language].accessibility = labels;
});
