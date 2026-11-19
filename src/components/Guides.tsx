import { useState } from 'react';

const filters = [
  { value: 'todos', label: 'Todos' },
  { value: 'ps5', label: 'PS5' },
  { value: 'xbox', label: 'Xbox Series X|S' }
];

const guides = [
  { id: 'guia-ps5', platforms: ['ps5'], icon: '↓', color: 'violet', label: 'INSTALAÇÃO · PS5', title: 'Como instalar GTA VI no PS5', summary: 'Confira o espaço disponível, organize o SSD e inicie o download.', action: 'Ler guia' },
  { id: 'guia-xbox', platforms: ['xbox'], icon: '↓', color: 'green', label: 'INSTALAÇÃO · XBOX', title: 'Como instalar no Xbox Series X|S', summary: 'Libere espaço e acompanhe a instalação pelo menu do console.', action: 'Ler guia' },
  { id: 'edicoes', platforms: ['ps5', 'xbox'], icon: '▤', color: 'coral', label: 'COMPRAS · PS5 E XBOX', title: 'Qual edição de GTA VI escolher?', summary: 'Compare a edição base e a Ultimate antes de abrir a loja.', action: 'Comparar edições' },
  { id: 'primeiros-passos', platforms: ['ps5', 'xbox'], icon: '✓', color: 'cyan', label: 'GUIA · PS5 E XBOX', title: 'Primeiros passos em GTA VI', summary: 'Ajuste a experiência antes de começar a história.', action: 'Ler guia' }
];

function normalize(text: string) {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
}

function GuideCard({ guide }: { guide: typeof guides[number] }) {
  return <a className="guide" href={'#' + guide.id} onClick={() => {
    const detail = document.getElementById(guide.id);
    if (detail instanceof HTMLDetailsElement) detail.open = true;
  }}>
    <span className={'icon ' + guide.color} aria-hidden="true">{guide.icon}</span>
    <span className="label">{guide.label}</span>
    <h3>{guide.title}</h3>
    <p>{guide.summary}</p>
    <span className="read">{guide.action}</span>
  </a>;
}

export function Guides() {
  const [query, setQuery] = useState('');
  const [platform, setPlatform] = useState('todos');
  const terms = normalize(query).split(/\s+/);
  const shown = guides.filter(guide => {
    const text = normalize([guide.label, guide.title, guide.summary, guide.action].join(' '));
    return (platform === 'todos' || guide.platforms.includes(platform)) &&
      terms.every(term => text.includes(term));
  });

  return <section id="guias">
    <div className="section-head">
      <div><span className="label">SEM SPOILERS</span><h2>Guias essenciais</h2></div>
      <div className="search">
        <label htmlFor="busca">Buscar guias</label>
        <input id="busca" type="search" placeholder="Instalação, PS5, edições…" value={query} onChange={event => setQuery(event.target.value)} />
      </div>
    </div>
    <div className="filters" aria-label="Filtrar guias">
      {filters.map(filter => <button key={filter.value} type="button" aria-pressed={platform === filter.value} onClick={() => setPlatform(filter.value)}>
        {filter.label}
      </button>)}
    </div>
    <p id="resultados" role="status" className="sr">{shown.length === 1 ? '1 guia encontrado' : shown.length + ' guias encontrados'}</p>
    <div className="guides">{shown.map(guide => <GuideCard key={guide.id} guide={guide} />)}</div>
    {!shown.length && <p>Nenhum guia encontrado. Tente outro termo ou plataforma.</p>}
  </section>;
}
