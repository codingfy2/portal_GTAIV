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
  guia?: string;
  guiaTitulo?: string;
};

// Acrescente uma matéria com slug único e data ISO (AAAA-MM-DD ou com horário e fuso).
export const materias: Materia[] = [
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
