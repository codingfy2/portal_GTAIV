export type Materia = {
  slug: string;
  titulo: string;
  categoria: string;
  autor: string;
  data: string;
  imagem: string;
  resumo: string;
  texto: string[];
  fonte: string;
  fontes?: { titulo: string; url: string }[];
  guia?: string;
  guiaTitulo?: string;
};

// Acrescente uma matéria com slug único e data ISO (AAAA-MM-DD ou com horário e fuso).
export const materias: Materia[] = [
  {
    "slug": "primeiras-gameplays-gta-6-18-19-novembro",
    "titulo": "Primeiras gameplays de GTA 6: o que saiu em 18 e 19 de novembro",
    "categoria": "Notícia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "As análises internacionais apareceram na quarta-feira. O jogo foi liberado à meia-noite local em cada mercado, e a cobertura brasileira começou na virada.",
    "texto": [
      "GTA VI saiu da fase de trailers. Em 18 de novembro, veículos como a VGC e o canal Digital Foundry publicaram análises com imagens do jogo. Na edição da VGC, o destaque é como Jason e Lucia dividem as missões. A Digital Foundry colocou a exploração de Leonida e o desempenho nos consoles no centro da própria cobertura.",
      "A liberação para o público seguiu outro relógio. Segundo o suporte da Rockstar, a estreia aconteceu à meia-noite local de 19 de novembro no PS5 e no Xbox Series X|S. A RFI, republicada pelo UOL, apontou Nova Zelândia, Austrália e parte da Ásia entre os primeiros mercados com acesso. Por causa dos fusos, o conteúdo publicado no dia 18 e a estreia local no dia 19 não são informações incompatíveis.",
      "No Brasil, o Metrópoles publicou às 23h30 do dia 18 o anúncio de uma transmissão prevista para a virada. Para acompanhar sem entrar na história de cara, prefira capítulos de exploração e comparativos técnicos. Vídeos de campanha podem mostrar acontecimentos sem aviso."
    ],
    "fonte": "https://www.take2games.com/ir/news/rockstar-games-announces-grand-theft-auto-vi-now-available",
    "fontes": [
      {
        "titulo": "Rockstar / Take-Two · comunicado de lançamento (19/11)",
        "url": "https://www.take2games.com/ir/news/rockstar-games-announces-grand-theft-auto-vi-now-available"
      },
      {
        "titulo": "Rockstar Support · horário de liberação por território",
        "url": "https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s"
      },
      {
        "titulo": "RFI / UOL · primeiros mercados com acesso (19/11)",
        "url": "https://noticias.uol.com.br/ultimas-noticias/rfi/2026/11/19/gta-vi-chega-ao-mercado-apos-13-anos-de-espera-e-recebe-elogios-nas-primeiras-avaliacoes.amp.htm"
      },
      {
        "titulo": "VGC · review de Jordan Middler, com vídeo (18/11)",
        "url": "https://www.videogameschronicle.com/review/grand-theft-auto-6/"
      },
      {
        "titulo": "Digital Foundry · teste original em vídeo, PS5 e PS5 Pro",
        "url": "https://www.youtube.com/watch?v=qsBU0bcpONA"
      },
      {
        "titulo": "Metrópoles · anúncio da transmissão (18/11, 23h30)",
        "url": "https://www.metropoles.com/colunas/metropoles-games/a-espera-acabou-assista-a-gameplay-de-gta-6-ao-vivo-no-metropoles"
      }
    ]
  },
  {
    "slug": "gta-6-gameplay-portugues-metropoles",
    "titulo": "Onde ver gameplay de GTA 6 em português na cobertura de lançamento",
    "categoria": "Notícia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "O Metrópoles anunciou uma transmissão com Ananda Leonel. O anúncio saiu antes da meia-noite do dia 19.",
    "texto": [
      "Quem procura gameplay brasileira de GTA VI pode começar pela cobertura anunciada pelo Metrópoles. A matéria publicada às 23h30 de 18 de novembro indicava uma transmissão no YouTube a partir da meia-noite do dia 19, com Ananda Leonel. A proposta anunciada era mostrar a primeira hora do lançamento, incluindo exploração de Vice City e contato com os personagens.",
      "O anúncio oferece um link direto para a live. Para quem pretende jogar sem saber nada da história, vale um aviso antes de abrir: mesmo uma transmissão de início de jogo pode revelar diálogos, locais e trechos de missões. A cobertura é do veículo, não uma transmissão oficial da Rockstar.",
      "O anúncio do Metrópoles reúne os detalhes da transmissão. A disponibilidade da gravação pode variar."
    ],
    "fonte": "https://www.metropoles.com/colunas/metropoles-games/a-espera-acabou-assista-a-gameplay-de-gta-6-ao-vivo-no-metropoles",
    "fontes": [
      {
        "titulo": "Metrópoles · anúncio da transmissão (18/11, 23h30)",
        "url": "https://www.metropoles.com/colunas/metropoles-games/a-espera-acabou-assista-a-gameplay-de-gta-6-ao-vivo-no-metropoles"
      }
    ]
  },
  {
    "slug": "gta-6-troca-jason-lucia-missoes",
    "titulo": "GTA 6 muda a troca de protagonistas: o que Jason e Lucia fazem juntos",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "As primeiras análises mostram que a dupla não é só uma mudança de elenco. Em certas missões, escolher quem você controla muda a forma de jogar.",
    "texto": [
      "GTA V já usava múltiplos protagonistas, mas GTA VI coloca a parceria no centro da experiência. No review de 18 de novembro, a VGC relata que é possível alternar entre Jason e Lucia durante várias missões. Em algumas situações, escolher um deles muda a abordagem da mesma sequência. O veículo também descreve incursões no mundo aberto com os dois personagens juntos e situações em que só um deles pode participar.",
      "A VGC relata ainda que ações feitas em dupla alimentam um sistema de relacionamento ligado à narrativa. Já a crítica do The Guardian destacou como pequenos momentos e a personalidade dos dois criam vínculo fora dos grandes acontecimentos da campanha. São leituras complementares: uma descreve o sistema observado e a outra, seu efeito na experiência de quem jogou."
    ],
    "fonte": "https://www.videogameschronicle.com/review/grand-theft-auto-6/",
    "fontes": [
      {
        "titulo": "VGC · review de Jordan Middler, com vídeo (18/11)",
        "url": "https://www.videogameschronicle.com/review/grand-theft-auto-6/"
      },
      {
        "titulo": "The Guardian · review de Keza MacDonald (18/11)",
        "url": "https://www.theguardian.com/games/2026/nov/18/grand-theft-auto-vi-gta-6-review-playstation-rockstar"
      },
      {
        "titulo": "Rockstar / Take-Two · comunicado de lançamento (19/11)",
        "url": "https://www.take2games.com/ir/news/rockstar-games-announces-grand-theft-auto-vi-now-available"
      }
    ]
  },
  {
    "slug": "gta-6-leonida-npcs-interiores",
    "titulo": "O que dá para fazer fora das missões em GTA 6?",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "Os primeiros relatos de gameplay ajudam a entender por que Leonida parece movimentada mesmo quando você não está seguindo a campanha.",
    "texto": [
      "Quem joga GTA VI não precisa estar em uma missão para esbarrar em uma situação nova. A VGC relata que conversas com personagens do mundo podem levar a interações curtas ou até atividades paralelas. O The Guardian descreve encontros ocasionais e opções de lazer como pesca e caiaque, além de espaços como academias e casas noturnas. São exemplos vistos pelos críticos em suas partidas, não uma lista completa do jogo.",
      "Os interiores também apareceram nas análises. A VGC elogiou a variedade de locais em que é possível entrar, mas faz uma distinção importante: entrar em um prédio não significa que há uma missão lá dentro. A Digital Foundry dedicou capítulos separados a interiores, interações com pedestres e à vida urbana. Esse recorte permite mostrar como o mundo reage sem revelar o enredo."
    ],
    "fonte": "https://www.videogameschronicle.com/review/grand-theft-auto-6/",
    "fontes": [
      {
        "titulo": "VGC · review de Jordan Middler, com vídeo (18/11)",
        "url": "https://www.videogameschronicle.com/review/grand-theft-auto-6/"
      },
      {
        "titulo": "The Guardian · review de Keza MacDonald (18/11)",
        "url": "https://www.theguardian.com/games/2026/nov/18/grand-theft-auto-vi-gta-6-review-playstation-rockstar"
      },
      {
        "titulo": "Digital Foundry · teste original em vídeo, PS5 e PS5 Pro",
        "url": "https://www.youtube.com/watch?v=qsBU0bcpONA"
      }
    ]
  },
  {
    "slug": "gta-6-perfil-criminal-focus-mode",
    "titulo": "Perfil Criminal e Focus Mode: dois sistemas que apareceram nos primeiros reviews",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "O primeiro está ligado ao comportamento no mundo aberto. O segundo é descrito como um recurso de combate. Não são a mesma coisa.",
    "texto": [
      "No review publicado em 18 de novembro, a VGC descreve um sistema chamado Criminal Profile. Segundo o veículo, o nível de letalidade do jogador pode alterar esse perfil. A resenha atribui à Rockstar a explicação de que o comportamento no mundo aberto tem mais peso que ações que acontecem dentro das missões. O veículo relata efeitos na história, mas isso não confirma todos os gatilhos, níveis ou consequências possíveis.",
      "Em outro trecho, a VGC descreve o Focus Mode como uma forma de desacelerar a ação e fazer ajustes de mira com mais precisão. O modo de foco e o Perfil Criminal podem ser abordados juntos em uma matéria porque mostram como a campanha se conecta à forma de jogar, não porque sejam partes comprovadas do mesmo sistema."
    ],
    "fonte": "https://www.videogameschronicle.com/review/grand-theft-auto-6/",
    "fontes": [
      {
        "titulo": "VGC · review de Jordan Middler, com vídeo (18/11)",
        "url": "https://www.videogameschronicle.com/review/grand-theft-auto-6/"
      }
    ]
  },
  {
    "slug": "gta-6-perseguicoes-carros-direcao",
    "titulo": "Como as primeiras gameplays mostram direção e perseguições em GTA 6",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "Uma pauta sobre o que acontece entre o trânsito, as colisões e a reação da polícia no jogo, sem entrar em missões da campanha.",
    "texto": [
      "Dirigir por Leonida foi um dos recortes da cobertura de lançamento. A Digital Foundry separou capítulos para direção, fuga policial e condução fora do asfalto. O The Guardian descreveu uma sequência em que uma batida acabou envolvendo vários carros, um exemplo de como sistemas do cenário podem produzir situações inesperadas. A crítica também apontou que a complexidade dos controles pode frustrar em alguns momentos.",
      "A VGC relata uma perseguição que passou pela zona rural e terminou quando a dupla conseguiu se esconder. São experiências registradas durante partidas individuais. Elas mostram situações possíveis, mas não bastam para deduzir a regra completa do nível de procurado, o tempo de busca policial ou o resultado de uma fuga."
    ],
    "fonte": "https://www.youtube.com/watch?v=qsBU0bcpONA",
    "fontes": [
      {
        "titulo": "Digital Foundry · teste original em vídeo, PS5 e PS5 Pro",
        "url": "https://www.youtube.com/watch?v=qsBU0bcpONA"
      },
      {
        "titulo": "The Guardian · review de Keza MacDonald (18/11)",
        "url": "https://www.theguardian.com/games/2026/nov/18/grand-theft-auto-vi-gta-6-review-playstation-rockstar"
      },
      {
        "titulo": "VGC · review de Jordan Middler, com vídeo (18/11)",
        "url": "https://www.videogameschronicle.com/review/grand-theft-auto-6/"
      }
    ]
  },
  {
    "slug": "gta-6-ps5-ps5-pro-30-fps-teste",
    "titulo": "GTA 6 a 30 FPS no PS5: em que o Pro se saiu melhor no primeiro teste",
    "categoria": "Análise técnica",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "A Digital Foundry encontrou mais estabilidade no Pro. No PS5 padrão, o jogo pode ficar abaixo da meta em gameplay normal.",
    "texto": [
      "Nos testes de 18 de novembro, a Digital Foundry encontrou desempenho mais consistente no PS5 Pro do que no PS5 padrão. A meta observada era de 30 quadros por segundo. A VGC, ao resumir a análise, informou que o PS5 padrão apresentou pequenas quedas até em deslocamentos pela cidade, enquanto as quedas no Pro foram mais difíceis de provocar nas sessões examinadas.",
      "Isso não significa que o Pro nunca cai abaixo de 30 FPS. O teste de estresse encontrou quedas nele também, embora o relato descreva recuperação mais rápida no Pro. Separar gameplay normal de um cenário montado para forçar a máquina evita transformar a exceção em desempenho médio."
    ],
    "fonte": "https://www.youtube.com/watch?v=qsBU0bcpONA",
    "fontes": [
      {
        "titulo": "Digital Foundry · teste original em vídeo, PS5 e PS5 Pro",
        "url": "https://www.youtube.com/watch?v=qsBU0bcpONA"
      },
      {
        "titulo": "VGC · resumo do comparativo de PS5 (18/11)",
        "url": "https://www.videogameschronicle.com/news/gta-6-base-ps5-performance-analysis-shows-struggle-to-maintain-30-fps-at-all-times/"
      }
    ]
  },
  {
    "slug": "gta-6-xbox-series-s-x-teste-gameplay",
    "titulo": "GTA 6 no Xbox Series S e Series X: o que o primeiro comparativo encontrou",
    "categoria": "Análise técnica",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "O Series X ficou mais perto da meta de 30 FPS. No Series S, a análise registrou quedas mais frequentes em trechos pesados.",
    "texto": [
      "A Digital Foundry publicou uma comparação entre as versões nativas de GTA VI no Xbox Series X e no Series S. Segundo o relato da VGC, o Series X se manteve perto dos 30 FPS em boa parte da sessão analisada, com quedas em momentos mais carregados. Já no Series S, as quedas foram mais perceptíveis em situações de combate ou deslocamento rápido.",
      "O comparativo também apontou diferenças de apresentação, como sombras e reflexos menos definidos no Series S. A análise preserva uma distinção útil: vários elementos visuais ainda estão presentes nos dois consoles, mas foram ajustados de formas diferentes. O cenário testado no Series S instalado não equivale a um teste de streaming no Xbox One."
    ],
    "fonte": "https://www.youtube.com/watch?v=F3lxGD8HX2k",
    "fontes": [
      {
        "titulo": "Digital Foundry · teste original em vídeo, Xbox Series X|S",
        "url": "https://www.youtube.com/watch?v=F3lxGD8HX2k"
      },
      {
        "titulo": "VGC · resumo do comparativo de Xbox (18/11)",
        "url": "https://www.videogameschronicle.com/news/gta-6-xbox-series-s-performance-analysis-admires-the-effort-but-says-significant-frame-drops-are-a-problem/"
      }
    ]
  },
  {
    "slug": "gta-6-minimapa-dinamico-bussola",
    "titulo": "Minimapa de GTA 6: qual opção escolher na primeira vez?",
    "categoria": "Guia de gameplay",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "O jogo oferece diferentes formas de mostrar as informações de navegação. Veja a diferença sem precisar avançar na história.",
    "texto": [
      "Ao começar GTA VI, uma das primeiras escolhas é como exibir a navegação. Segundo o guia da VGC de 18 de novembro, o minimapa dinâmico aparece conforme a situação e também pode ser chamado pelo jogador. A versão dinâmica com bússola adiciona uma faixa com marcadores e pontos de interesse. A exibição permanente mantém a navegação visível.",
      "Se você costuma se perder em jogos de mundo aberto, começar com a exibição permanente é uma escolha simples. Para explorar com menos elementos na tela, a opção dinâmica é mais discreta. A VGC informa que o jogo permite ajustar as opções depois, no menu de configurações, então a escolha inicial não precisa ser definitiva."
    ],
    "fonte": "https://www.videogameschronicle.com/guide/gta-6-navigation-experience-explained-which-navigation-experience-should-i-pick/",
    "fontes": [
      {
        "titulo": "VGC · guia das opções de navegação (18/11)",
        "url": "https://www.videogameschronicle.com/guide/gta-6-navigation-experience-explained-which-navigation-experience-should-i-pick/"
      }
    ]
  },
  {
    "slug": "gta-6-duracao-campanha-primeiras-estimativas",
    "titulo": "Quanto tempo leva para zerar GTA 6? O que dizem as primeiras partidas",
    "categoria": "Guia de gameplay",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "Os testes de lançamento dão uma noção da escala da campanha, mas não existe um tempo único para todo jogador.",
    "texto": [
      "A VGC estima cerca de 60 horas para quem se concentra nas missões principais. O guia do veículo relata uma partida com aproximadamente 100 horas até os créditos após incluir boa parte das atividades paralelas. Em outra experiência, a crítica Keza MacDonald, do The Guardian, disse ter chegado ao fim em 70 horas.",
      "A diferença é normal em um jogo de mundo aberto. Fazer atividades extras, explorar por conta própria ou repetir trechos muda o total. Para quem está começando, o dado mais útil não é o número máximo de horas possível, mas a diferença entre seguir a campanha e jogar no próprio ritmo."
    ],
    "fonte": "https://www.videogameschronicle.com/review/grand-theft-auto-6/",
    "fontes": [
      {
        "titulo": "VGC · review de Jordan Middler, com vídeo (18/11)",
        "url": "https://www.videogameschronicle.com/review/grand-theft-auto-6/"
      },
      {
        "titulo": "VGC · guia e relato de duração da campanha (18/11)",
        "url": "https://www.videogameschronicle.com/guide/how-long-to-beat-grand-theft-auto-6/"
      },
      {
        "titulo": "The Guardian · review de Keza MacDonald (18/11)",
        "url": "https://www.theguardian.com/games/2026/nov/18/grand-theft-auto-vi-gta-6-review-playstation-rockstar"
      }
    ]
  },
  {
    "slug": "gta-6-xbox-one-cloud-gaming",
    "titulo": "GTA 6 no Xbox One? Sim, mas só pela nuvem",
    "categoria": "Notícia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "A Xbox confirmou o streaming no Xbox One e nos Series X|S. No console da geração anterior, isso não significa baixar nem instalar uma versão nativa.",
    "texto": [
      "O Xbox One entrou na conversa sobre GTA VI por um caminho diferente. Segundo a Xbox Brasil, o jogo ficou disponível pelo Xbox Cloud Gaming nesses consoles a partir das 3h, no horário de Brasília, em 19 de novembro. O streaming usa as configurações gráficas do Xbox Series S, mesmo quando o aparelho usado para acessar o serviço é outro.",
      "No Xbox Series X ou Series S, a alternativa é jogar a versão instalada no próprio console. Já no Xbox One, o acesso anunciado é apenas pela nuvem. A Xbox informa que GTA VI precisa ser comprado separadamente e que disponibilidade, elegibilidade e opções do serviço variam por mercado e dispositivo. A empresa também anunciou compra de tempo de streaming em mercados elegíveis para títulos compatíveis, sem exigir necessariamente uma assinatura Game Pass para essa modalidade."
    ],
    "fonte": "https://news.xbox.com/pt-br/2026/11/10/grand-theft-auto-vi-chega-ao-xbox-one-e-xbox-series-xs-por-meio-do-xbox-cloud-gaming/",
    "fontes": [
      {
        "titulo": "Xbox Wire Brasil · GTA VI pelo Xbox Cloud Gaming (10/11)",
        "url": "https://news.xbox.com/pt-br/2026/11/10/grand-theft-auto-vi-chega-ao-xbox-one-e-xbox-series-xs-por-meio-do-xbox-cloud-gaming/"
      },
      {
        "titulo": "Rockstar Support · Plataformas, edições, caixa e restrições de código",
        "url": "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions"
      },
      {
        "titulo": "Rockstar Support · Horários de pré-carregamento e lançamento",
        "url": "https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s"
      }
    ]
  },
  {
    "slug": "gta-6-caixa-fisica-tem-disco",
    "titulo": "A caixa física de GTA 6 vem com código, não com disco",
    "categoria": "Notícia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "O suporte oficial esclarece o que o comprador leva para casa e como a região da conta afeta o resgate no PlayStation.",
    "texto": [
      "A embalagem física de GTA VI não traz um disco de instalação. Segundo o suporte da Rockstar, a caixa da edição Standard contém um código para baixar o jogo. Na prática, comprar a versão vendida em caixa não elimina a etapa de download. A Rockstar também informa que não oferece caixa física da Ultimate Edition. Quem comprar a Standard pode adquirir a melhoria digital depois de resgatar o jogo.",
      "A região é outro detalhe importante. A Rockstar lista o Brasil como uma região própria para códigos de PlayStation. Para uma conta PSN brasileira, confirme se o código da caixa foi vendido para o Brasil. O mesmo artigo informa que códigos de Xbox não têm esse bloqueio regional. Ainda assim, confira se o produto corresponde à sua plataforma antes de pagar."
    ],
    "fonte": "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
    "fontes": [
      {
        "titulo": "Rockstar Support · Plataformas, edições, caixa e restrições de código",
        "url": "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions"
      },
      {
        "titulo": "PlayStation Brasil · GTA VI: edições, PS5 Pro, acessibilidade e idiomas",
        "url": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/"
      }
    ]
  },
  {
    "slug": "gta-6-mapa-oficial-leonida-download",
    "titulo": "Rockstar anunciou mapa imprimível de Leonida e pôster de GTA 6",
    "categoria": "Notícia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "A Rockstar anunciou os materiais digitais gratuitos para o lançamento. Confira o comunicado oficial.",
    "texto": [
      "A Rockstar anunciou que adicionaria ao site oficial um mapa imprimível de Leonida e um pôster com a arte de capa de GTA VI. Os dois foram previstos como downloads digitais gratuitos para o dia do lançamento. O anúncio também cita uma versão física de duas faces para a Rockstar Store após a estreia, mas não estabelece data de chegada ou disponibilidade para entrega no Brasil.",
      "O mapa anunciado é uma referência oficial de Leonida. O comunicado descreve um material imprimível para acompanhar o jogo, sem apresentar um guia de colecionáveis, missões ou segredos."
    ],
    "fonte": "https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10",
    "fontes": [
      {
        "titulo": "Rockstar Newswire · Pré-carregamento e anúncio do mapa impresso (03/11)",
        "url": "https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10"
      },
      {
        "titulo": "Rockstar Games · Only in Leonida: personagens e regiões",
        "url": "https://www.rockstargames.com/VI/only-in-leonida"
      },
      {
        "titulo": "Rockstar Games · Galeria de capturas por região e personagem",
        "url": "https://www.rockstargames.com/VI/media/screenshots"
      }
    ]
  },
  {
    "slug": "gta-6-galeria-oficial-capturas",
    "titulo": "Galeria de lançamento reúne novas imagens oficiais de GTA 6",
    "categoria": "Notícia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "As capturas divulgadas pela Rockstar rendem uma seleção comentada de Vice City e arredores sem depender de vazamentos.",
    "texto": [
      "A Rockstar apresentou em 5 de novembro a Launch Gallery, uma coleção de novas capturas de GTA VI. A seleção pode ser consultada no site oficial. A área de mídia separa imagens por personagens, cenários e outros temas, o que ajuda a encontrar material para quem quer explorar Leonida sem recorrer a vazamentos.",
      "A galeria funciona melhor como um passeio visual do que como uma lista de mecânicas reveladas. Uma imagem pode mostrar um veículo, um local ou um personagem, mas isso não prova como, quando ou onde ele poderá ser usado durante o jogo. Em uma seleção comentada, descreva apenas o que aparece no quadro e mantenha qualquer interpretação identificada como leitura editorial."
    ],
    "fonte": "https://www.rockstargames.com/newswire/article/39ak81277255o9/explore-the-grand-theft-auto-vi-launch-gallery",
    "fontes": [
      {
        "titulo": "Rockstar Newswire · Anúncio da Launch Gallery (05/11)",
        "url": "https://www.rockstargames.com/newswire/article/39ak81277255o9/explore-the-grand-theft-auto-vi-launch-gallery"
      },
      {
        "titulo": "Rockstar Games · Launch Gallery: coleção de lançamento",
        "url": "https://www.rockstargames.com/VI/launch-gallery"
      },
      {
        "titulo": "Rockstar Games · Galeria de capturas por região e personagem",
        "url": "https://www.rockstargames.com/VI/media/screenshots"
      }
    ]
  },
  {
    "slug": "gta-6-bonus-vintage-vice-city-gta-plus",
    "titulo": "Comprou GTA 6 antes de 20 de novembro? Veja como resgatar o GTA+",
    "categoria": "Notícia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "O suporte da Rockstar detalha os prazos de resgate para compras digitais elegíveis no PlayStation e no Xbox.",
    "texto": [
      "Os benefícios divulgados pela Rockstar para compras digitais elegíveis feitas antes de 20 de novembro de 2026 incluíam o Vintage Vice City Pack e um mês de GTA+. O pacote de itens e a assinatura são benefícios separados dos extras da Ultimate.",
      "No PlayStation, o suporte da Rockstar orienta resgatar o mês de GTA+ na página do serviço na PlayStation Store até 31 de março de 2027. No Xbox, o resgate fica na seção Ofertas e créditos da Microsoft Store, em até 180 dias após a compra elegível.",
      "Segundo a Rockstar, depois do mês incluído, a assinatura é renovada pelo preço mensal regular até o cancelamento. Confira na sua conta a elegibilidade e a data da próxima cobrança."
    ],
    "fonte": "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
    "fontes": [
      {
        "titulo": "Rockstar Support · Plataformas, edições, caixa e restrições de código",
        "url": "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions"
      },
      {
        "titulo": "Rockstar Support · Como resgatar o mês de GTA+",
        "url": "https://support.rockstargames.com/articles/3SZF8cy8dG7lHsLf38uWK1/redeeming-the-one-month-gta-membership-included-with-your-grand-theft-auto-vi-pre-order"
      },
      {
        "titulo": "PlayStation Brasil · GTA VI: edições, PS5 Pro, acessibilidade e idiomas",
        "url": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/"
      }
    ]
  },
  {
    "slug": "gta-6-trilha-justice-radios",
    "titulo": "A música de GTA 6 em três partes: rádios, álbum e trilha de Justice",
    "categoria": "Notícia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "O site oficial separa as estações do jogo, a coletânea de artistas e a música composta para a história.",
    "texto": [
      "A seção musical de GTA VI reúne três experiências diferentes. No próprio jogo, as rádios de Leonida incluem estações como Flash FM, Cocoteo e Afro Bank FM, apresentadas em amostras no site oficial. A Rockstar não apresenta essas prévias como uma relação completa das estações ou das faixas disponíveis.",
      "Em paralelo, a coletânea Grand Theft Auto VI: The Album foi anunciada para 19 de novembro com 34 faixas. Já o álbum da trilha original do Justice foi anunciado para 11 de dezembro, com 30 faixas, em serviços de streaming, CD e vinil. A Rockstar descreve a trilha do duo como adaptativa à experiência de Jason e Lucia. «Flower in a Hurricane» aparece no trailer de lançamento e ajuda a ligar a divulgação à música do jogo."
    ],
    "fonte": "https://www.rockstargames.com/VI/music",
    "fontes": [
      {
        "titulo": "Rockstar Games · Rádios, coletânea e trilha original",
        "url": "https://www.rockstargames.com/VI/music"
      },
      {
        "titulo": "Rockstar Newswire · Anúncio do álbum Original Score by Justice (29/10)",
        "url": "https://www.rockstargames.com/newswire/article/39ak8a12395591/grand-theft-auto-vi-original-score-by-justice"
      },
      {
        "titulo": "Rockstar Games · Trailer oficial de lançamento (15/10)",
        "url": "https://www.rockstargames.com/VI/launch-trailer"
      }
    ]
  },
  {
    "slug": "gta-6-standard-ou-ultimate",
    "titulo": "Standard ou Ultimate: qual edição de GTA 6 faz sentido?",
    "categoria": "Guia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "As duas trazem o jogo. A compra muda a coleção de extras, não a existência da campanha.",
    "texto": [
      "A Standard inclui GTA VI e é o ponto de partida para quem quer a campanha. A Ultimate reúne o jogo e a melhoria com uma coleção adicional de veículos, itens, personalizações e outros benefícios. A Rockstar cita o Grotti Cheetah de 1995 e a lancha Shitzu Squalo entre os exemplos. Segundo o suporte oficial, parte do material extra é encontrada ao avançar pelos capítulos, então não é preciso esperar que tudo esteja disponível no primeiro acesso.",
      "Quem começa pela Standard pode comprar a melhoria Ultimate separadamente na loja da plataforma. Isso permite decidir depois se os extras interessam, conferindo o preço do upgrade na própria loja. Na PlayStation Brasil, a consulta de 19/11 mostrou R$ 449,90 para a Standard e R$ 549,90 para a Ultimate, diferença de R$ 100 no preço das edições completas. Isso não é uma cotação do upgrade avulso nem um preço de Xbox."
    ],
    "fonte": "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions",
    "fontes": [
      {
        "titulo": "Rockstar Support · Plataformas, edições, caixa e restrições de código",
        "url": "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions"
      },
      {
        "titulo": "PlayStation Brasil · GTA VI: edições, PS5 Pro, acessibilidade e idiomas",
        "url": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/"
      }
    ]
  },
  {
    "slug": "gta-6-plataformas-pc-ps4-online",
    "titulo": "Onde GTA 6 roda? PS5, Xbox, PC e multiplayer",
    "categoria": "Guia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "O FAQ separa lançamento nativo, streaming em outro aparelho e recursos que não têm data confirmada.",
    "texto": [
      "As plataformas de lançamento listadas pela Rockstar para GTA VI são PlayStation 5 e Xbox Series X|S. O PS5 Pro faz parte da família PS5 e tem melhorias descritas pela Sony. O PS4 não aparece como compatível com GTA VI. No Xbox One existe uma exceção bem específica: a Xbox anunciou acesso via Xbox Cloud Gaming, sem versão nativa para instalar no aparelho.",
      "Até esta apuração, as fontes oficiais consultadas não apresentavam data de lançamento de uma versão nativa para PC. A página brasileira do PlayStation informa que GTA VI é uma experiência para um jogador. Não use a existência do GTA Online de GTA V, nem a oferta de GTA+, como prova de multiplayer de GTA VI. Uma notícia futura sobre online merece apuração própria, com plataformas e data vindas de anúncio verificável."
    ],
    "fonte": "https://www.rockstargames.com/VI",
    "fontes": [
      {
        "titulo": "Rockstar Games · Página oficial de Grand Theft Auto VI",
        "url": "https://www.rockstargames.com/VI"
      },
      {
        "titulo": "Rockstar Support · Plataformas, edições, caixa e restrições de código",
        "url": "https://support.rockstargames.com/articles/4QfG4FmZCf5W1gS8jy4UVT/grand-theft-auto-vi-platform-editions-and-versions"
      },
      {
        "titulo": "Xbox Wire Brasil · GTA VI pelo Xbox Cloud Gaming (10/11)",
        "url": "https://news.xbox.com/pt-br/2026/11/10/grand-theft-auto-vi-chega-ao-xbox-one-e-xbox-series-xs-por-meio-do-xbox-cloud-gaming/"
      },
      {
        "titulo": "PlayStation Brasil · GTA VI: edições, PS5 Pro, acessibilidade e idiomas",
        "url": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/"
      }
    ]
  },
  {
    "slug": "gta-6-dublado-portugues-brasil",
    "titulo": "GTA 6 é dublado em português? O que o PS5 informa",
    "categoria": "Guia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "A ficha brasileira do PlayStation diferencia o idioma das vozes dos idiomas disponíveis nos textos da tela.",
    "texto": [
      "Para quem joga no PS5, a ficha brasileira da PlayStation informa voz em inglês e lista Português (Brasil) entre os idiomas da tela. Em outras palavras, a ficha confirma PT-BR para a parte textual da versão consultada, mas não lista dublagem brasileira. A mesma página descreve recursos de legendas, como opções de melhor legibilidade e tamanho maior.",
      "Vale separar três perguntas no guia: «tem vozes em PT-BR?», «há Português (Brasil) nos idiomas da tela?» e «quais ajustes de legenda estão disponíveis?». Essa separação é mais precisa do que escrever apenas «o jogo está traduzido», que pode soar como confirmação de dublagem."
    ],
    "fonte": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/",
    "fontes": [
      {
        "titulo": "PlayStation Brasil · GTA VI: edições, PS5 Pro, acessibilidade e idiomas",
        "url": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/"
      }
    ]
  },
  {
    "slug": "gta-6-acessibilidade-ps5",
    "titulo": "Acessibilidade de GTA 6 no PS5: ajustes para testar antes de jogar",
    "categoria": "Guia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "A Sony descreve recursos para texto, áudio, controles e dificuldade. O guia organiza por necessidade prática.",
    "texto": [
      "Se os textos estiverem difíceis de ler, comece pelas opções de legenda e contraste. A ficha brasileira do PlayStation lista legendas de diálogos e de sons, versões com texto maior e alternativas de alto contraste. No áudio, a plataforma cita controle separado de volumes, áudio mono e leitor de tela básico. Esses recursos não são equivalentes a uma narração integral de todos os menus.",
      "Para os controles, a PlayStation informa layouts alternativos predefinidos ou opções básicas de remapeamento, além de ajustes de sensibilidade, inversão dos analógicos e possibilidade de jogar sem vibração ou gatilhos adaptáveis. A ficha ainda lista ajustes de desafio, simplificação de eventos rápidos e pausas durante partidas offline."
    ],
    "fonte": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/",
    "fontes": [
      {
        "titulo": "PlayStation Brasil · GTA VI: edições, PS5 Pro, acessibilidade e idiomas",
        "url": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/"
      }
    ]
  },
  {
    "slug": "gta-6-ps5-vs-ps5-pro",
    "titulo": "GTA 6 no PS5 e no PS5 Pro: os recursos confirmados",
    "categoria": "Guia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "A ficha oficial descreve melhorias visuais do Pro e recursos do DualSense, sem sustentar todo número que circula em redes sociais.",
    "texto": [
      "GTA VI está listado para a família PS5. A página brasileira do PlayStation destaca áudio Tempest 3D, uso do SSD e recursos do DualSense, como vibração responsiva, gatilhos adaptáveis e efeitos no alto-falante do controle. São funções descritas pela Sony, não medições feitas pela redação.",
      "O PS5 Pro aparece com selo de aprimoramento. A Sony associa o console à tecnologia PSSR para maior clareza e a sombras com ray tracing, com ressalva sobre tela compatível. Para o leitor que já tem PS5, o ponto principal é que o Pro não é requisito para jogar. As melhorias de apresentação não devem ser confundidas com diferenças no conteúdo da campanha."
    ],
    "fonte": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/",
    "fontes": [
      {
        "titulo": "PlayStation Brasil · GTA VI: edições, PS5 Pro, acessibilidade e idiomas",
        "url": "https://www.playstation.com/pt-br/games/grand-theft-auto-vi/"
      },
      {
        "titulo": "Rockstar Games · Página oficial de Grand Theft Auto VI",
        "url": "https://www.rockstargames.com/VI"
      }
    ]
  },
  {
    "slug": "gta-6-download-problemas-console",
    "titulo": "GTA 6 não baixa, não abre ou pede mais espaço? Por onde começar",
    "categoria": "Guia",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/instalacao.webp",
    "resumo": "Em vez de repetir o guia de instalação, organize um diagnóstico simples a partir do sintoma que aparece no console.",
    "texto": [
      "Se a instalação travou por espaço, confira no console quanto o download pede agora. A referência de até 212 GB divulgada pela Rockstar era para o pré-carregamento e variava por aparelho. Ela não é um tamanho fixo para todas as instalações ou atualizações futuras.",
      "Se o jogo não aparece na biblioteca, confira a conta que comprou ou resgatou o código e abra o histórico de transações. Se aparece um cadeado no PS5 e a compra está na conta certa, consulte a página oficial de restauração de licenças da PlayStation. Se o Xbox One não oferece instalação, isso é esperado: o caminho anunciado para esse aparelho é o streaming, quando disponível para o mercado, conta e dispositivo.",
      "Antes de desinstalar, anote o código do erro, verifique a fila de downloads e confirme o espaço necessário. No suporte, informe console, edição, tipo de compra, horário e código do erro. Não publique prints com dados de conta ou códigos de resgate."
    ],
    "fonte": "https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10",
    "fontes": [
      {
        "titulo": "Rockstar Newswire · Pré-carregamento e anúncio do mapa impresso (03/11)",
        "url": "https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10"
      },
      {
        "titulo": "Rockstar Support · Horários de pré-carregamento e lançamento",
        "url": "https://support.rockstargames.com/articles/29jV3Cv2cCgvwM1XgtMO5o/grand-theft-auto-vi-regional-pre-load-and-release-times-on-playstation-5-and-xbox-series-x-or-s"
      },
      {
        "titulo": "Suporte PlayStation · Como restaurar licenças no console",
        "url": "https://www.playstation.com/pt-br/support/games/restore-licences-playstation/"
      },
      {
        "titulo": "Suporte Xbox · Gerenciar armazenamento do console",
        "url": "https://support.xbox.com/pt-BR/help/hardware-network/storage/manage-storage"
      }
    ]
  },
  {
    "slug": "gta-6-mapa-regioes-de-leonida",
    "titulo": "Leonida além de Vice City: seis regiões que a Rockstar já mostrou",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "Um guia introdutório do território oficial, sem inventar tamanho de mapa, limites ou localização de segredos.",
    "texto": [
      "Vice City é o rosto urbano de Leonida, mas não é a única paisagem apresentada pela Rockstar. A área oficial «Only in Leonida» destaca seis nomes, que também aparecem organizados nos materiais de mídia. A melhor forma de apresentar o estado agora é como um guia de regiões reveladas, sem fingir que o material representa todas as áreas visitáveis.",
      "Vice City: o centro urbano e neon do material de divulgação.",
      "Leonida Keys: o arquipélago que também aparece na apresentação de Jason e Brian.",
      "Grassrivers: o recorte de áreas alagadas na apresentação visual.",
      "Port Gellhorn: região com material próprio na galeria oficial.",
      "Ambrosia: outra área destacada separadamente no material de mídia.",
      "Mount Kalaga National Park: o parque que compõe o recorte de paisagens naturais."
    ],
    "fonte": "https://www.rockstargames.com/VI/only-in-leonida",
    "fontes": [
      {
        "titulo": "Rockstar Games · Only in Leonida: personagens e regiões",
        "url": "https://www.rockstargames.com/VI/only-in-leonida"
      },
      {
        "titulo": "Rockstar Games · Galeria de capturas por região e personagem",
        "url": "https://www.rockstargames.com/VI/media/screenshots"
      },
      {
        "titulo": "Rockstar Games · Launch Gallery: coleção de lançamento",
        "url": "https://www.rockstargames.com/VI/launch-gallery"
      }
    ]
  },
  {
    "slug": "jason-lucia-gta-6-sem-spoilers",
    "titulo": "Jason e Lucia: o que sabemos sobre a dupla antes de jogar",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "Perfis oficiais e sinopse bastam para explicar o conflito inicial sem contar o que acontece nas missões.",
    "texto": [
      "Jason Duval e Lucia Caminos estão no centro de GTA VI. O material oficial apresenta Jason como alguém que passou pelo Exército e acabou trabalhando para contrabandistas na região das Keys. Lucia saiu da prisão de Leonida e quer construir uma vida diferente. Os dois carregam objetivos próprios, mas a sinopse os coloca do mesmo lado quando um golpe dá errado.",
      "O ponto mais interessante para ler na apresentação é a tensão entre ambição e confiança. A Rockstar descreve um casal obrigado a depender um do outro em um cenário muito maior que o plano inicial. Isso é um recorte da divulgação, não uma afirmação de que sabemos como a relação vai evoluir ou de como o controle dos protagonistas funciona em todas as situações."
    ],
    "fonte": "https://www.rockstargames.com/VI",
    "fontes": [
      {
        "titulo": "Rockstar Games · Página oficial de Grand Theft Auto VI",
        "url": "https://www.rockstargames.com/VI"
      },
      {
        "titulo": "Rockstar Games · Only in Leonida: personagens e regiões",
        "url": "https://www.rockstargames.com/VI/only-in-leonida"
      },
      {
        "titulo": "Rockstar Games · YouTube · Trailer 2 e nota sobre a captura",
        "url": "https://www.youtube.com/watch?v=VQRLujxTm3c"
      }
    ]
  },
  {
    "slug": "gta-6-elenco-secundario-conheca",
    "titulo": "Quem é quem em GTA 6 além de Jason e Lucia?",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "A apresentação oficial revela personagens conectados às Keys, à cena musical e a outros núcleos de Leonida.",
    "texto": [
      "Cal Hampton é amigo de Jason e trabalha no mesmo círculo que Brian Heder. Brian tem histórico no contrabando nas Keys e convive com Jason antes dos eventos narrados no jogo. Os dois ajudam a situar de onde o protagonista vem, sem que seja preciso antecipar o que cada um fará na campanha.",
      "Vice City aparece por outro ângulo com Boobie Ike, empresário ligado ao estúdio e à gravadora Only Raw Records. Dre’Quan Priest tem ambições na indústria musical e trabalha com Real Dimez, a dupla de Bae-Luxe e Roxy. Já Raul Bautista é apresentado como um assaltante experiente em busca de novos talentos. São recortes de apresentação, não uma previsão da importância de cada personagem ou da ordem em que aparecem."
    ],
    "fonte": "https://www.rockstargames.com/VI/only-in-leonida",
    "fontes": [
      {
        "titulo": "Rockstar Games · Only in Leonida: personagens e regiões",
        "url": "https://www.rockstargames.com/VI/only-in-leonida"
      },
      {
        "titulo": "Rockstar Games · Galeria de capturas por região e personagem",
        "url": "https://www.rockstargames.com/VI/media/screenshots"
      }
    ]
  },
  {
    "slug": "gta-v-vs-gta-vi-los-santos-vice-city",
    "titulo": "GTA V x GTA VI: de Los Santos e Blaine County a Vice City e Leonida",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "Dois mapas podem cumprir papéis diferentes na história sem que a comparação dependa de quilômetros quadrados.",
    "texto": [
      "GTA V usa Los Santos e Blaine County como contraste entre a cidade e as áreas ao redor. Em GTA VI, o material oficial expande a figura de Vice City em direção a localidades como Leonida Keys, Grassrivers e Mount Kalaga. A troca de cenário muda o tipo de contraste que a divulgação oferece: do recorte de Los Santos para a combinação de cidade litorânea, ilhas e áreas alagadas de Leonida.",
      "A segunda comparação é de elenco. GTA V apresenta Michael, Franklin e Trevor como protagonistas. Já a divulgação de GTA VI concentra a história em Jason e Lucia. É possível comparar o foco narrativo dos dois jogos, mas não dá para deduzir, só pelo número de nomes, como o jogo distribui missões e alternância de personagens."
    ],
    "fonte": "https://www.playstation.com/pt-br/games/grand-theft-auto-v/",
    "fontes": [
      {
        "titulo": "PlayStation Brasil · GTA V: apresentação oficial e protagonistas",
        "url": "https://www.playstation.com/pt-br/games/grand-theft-auto-v/"
      },
      {
        "titulo": "Rockstar Games · Página oficial de Grand Theft Auto VI",
        "url": "https://www.rockstargames.com/VI"
      },
      {
        "titulo": "Rockstar Games · Only in Leonida: personagens e regiões",
        "url": "https://www.rockstargames.com/VI/only-in-leonida"
      },
      {
        "titulo": "Rockstar Games · Galeria de capturas por região e personagem",
        "url": "https://www.rockstargames.com/VI/media/screenshots"
      }
    ]
  },
  {
    "slug": "gta-6-trailers-o-que-mostram",
    "titulo": "Como ler os trailers de GTA 6 sem confundir cena e mecânica",
    "categoria": "Análise",
    "autor": "Redação GTA VI Brasil",
    "data": "2026-11-20",
    "imagem": "/capa.webp",
    "resumo": "Trailer 2, An Extended Look e trailer de lançamento ajudam a entender a proposta, mas não são testes de desempenho.",
    "texto": [
      "No Trailer 2, a própria Rockstar informa que a captura foi feita no PS5 e reúne tanto gameplay quanto cenas cinematográficas. Isso importa porque «capturado no jogo» não significa que cada tomada seja jogável ou mostre a interface que aparece para o jogador.",
      "An Extended Look, divulgado em agosto, também é descrito como material capturado no PS5. Já o trailer de lançamento, de outubro, dá destaque musical a «Flower in a Hurricane». Assistidos lado a lado, os materiais oferecem ângulos diferentes sobre a história, os cenários e a identidade sonora. Nenhum substitui um teste identificado por console e modo gráfico."
    ],
    "fonte": "https://www.rockstargames.com/VI/launch-trailer",
    "fontes": [
      {
        "titulo": "Rockstar Games · Trailer oficial de lançamento (15/10)",
        "url": "https://www.rockstargames.com/VI/launch-trailer"
      },
      {
        "titulo": "Rockstar Games · YouTube · Trailer 2 e nota sobre a captura",
        "url": "https://www.youtube.com/watch?v=VQRLujxTm3c"
      },
      {
        "titulo": "Rockstar Newswire · An Extended Look e nota sobre a captura (27/08)",
        "url": "https://www.rockstargames.com/newswire/article/4k138k8okkk483/grand-theft-auto-vi-an-extended-look-now-playing"
      },
      {
        "titulo": "Rockstar Games · Launch Gallery: coleção de lançamento",
        "url": "https://www.rockstargames.com/VI/launch-gallery"
      }
    ]
  },
  {
    slug: 'gta-vi-estreia-nos-consoles',
    titulo: 'GTA VI chega ao PS5 e ao Xbox Series X|S',
    categoria: 'Lançamento',
    autor: 'Redação GTA VI Brasil',
    data: '2026-11-19',
    imagem: '/capa.webp',
    resumo: 'Confira as plataformas do lançamento e o que vale revisar no console antes de iniciar o jogo.',
    texto: [
      'A data oficial de lançamento de Grand Theft Auto VI é 19 de novembro de 2026, no PlayStation 5 e no Xbox Series X|S.',
      'Antes de jogar, verifique se o sistema do console está atualizado e confirme, na tela da instalação, quanto espaço livre será necessário. O tamanho pode variar conforme o dispositivo.',
      'Se estiver comparando ofertas, confira a plataforma, a edição e se a caixa contém mídia física ou um código digital.'
    ],
    fonte: 'https://www.rockstargames.com/VI',
    guia: './#checklist',
    guiaTitulo: 'Abrir checklist de lançamento'
  },
  {
    slug: 'espaco-para-o-pre-carregamento',
    titulo: 'Rockstar detalha o espaço necessário para o pré-carregamento',
    categoria: 'Instalação',
    autor: 'Redação GTA VI Brasil',
    data: '2026-11-10',
    imagem: '/instalacao.webp',
    resumo: 'O pré-carregamento pode ocupar até 212 GB, segundo a Rockstar. Veja onde conferir o espaço disponível.',
    texto: [
      'A Rockstar anunciou que o pré-carregamento de GTA VI pode exigir até 212 GB, dependendo do aparelho. Essa estimativa se refere ao pré-carregamento. Confira no console o tamanho exibido para o seu download.',
      'No PS5, abra Configurações e selecione Armazenamento. No Xbox Series X|S, abra Configurações, Sistema e Dispositivos de armazenamento.',
      'Se precisar liberar espaço, revise os jogos e aplicativos que ocupam mais espaço e confirme o que selecionou antes de mover ou remover.'
    ],
    fonte: 'https://www.rockstargames.com/newswire/article/k4ak9okk485712/grand-theft-auto-vi-pre-load-begins-on-november-10',
    guia: './#guias',
    guiaTitulo: 'Ver guias de instalação'
  }
];
