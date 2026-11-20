import { materias, type Materia } from '../data/materias';

const orderedNews = [...materias].sort((a, b) => dateValue(b.data) - dateValue(a.data));
const formatDate = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeZone: 'America/Sao_Paulo'
});

function dateValue(date: string) {
  return Date.parse(date.length === 10 ? date + 'T00:00:00-03:00' : date);
}

function NewsMetadata({ news }: { news: Materia }) {
  return <p className="news-meta">
    {news.autor} · <time dateTime={news.data}>{formatDate.format(dateValue(news.data))}</time>
  </p>;
}

function NewsImage({ news, lazy = false }: { news: Materia; lazy?: boolean }) {
  return <img src={news.imagem} alt="" loading={lazy ? 'lazy' : undefined} width={960} height={640} />;
}

function NewsCard({ news, lazy = false }: { news: Materia; lazy?: boolean }) {
  return <article className="news-card">
    <a className="news-card-link" href={'/noticias.html?materia=' + encodeURIComponent(news.slug)}>
      <NewsImage news={news} lazy={lazy} />
      <div className="news-card-copy">
        <span className="label">{news.categoria}</span>
        <h2>{news.titulo}</h2>
        <p className="news-summary">{news.resumo}</p>
        <NewsMetadata news={news} />
      </div>
    </a>
  </article>;
}

export function LatestNews() {
  const latest = orderedNews[0];
  if (!latest) return null;
  return <section className="news-home" aria-labelledby="noticia-recente">
    <div className="section-head">
      <h2 id="noticia-recente">Notícia mais recente</h2>
      <a href="/noticias.html">Ver todas as notícias</a>
    </div>
    <div id="noticia-destaque"><NewsCard news={latest} /></div>
  </section>;
}

function NewsArticle({ news }: { news: Materia }) {
  return <article className="news-article">
    <a className="news-back" href="/noticias.html">Todas as notícias</a>
    <p className="label">{news.categoria}</p>
    <h1>{news.titulo}</h1>
    <p className="news-intro">{news.resumo}</p>
    <NewsMetadata news={news} />
    <NewsImage news={news} />
    {news.texto.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    <div className="news-article-links">
      {news.fontes?.length ? <section aria-labelledby="fontes-da-materia">
        <h2 id="fontes-da-materia">Fontes</h2>
        <ul>{news.fontes.map(source => <li key={source.url}>
          <a href={source.url}>{source.titulo}</a>
        </li>)}</ul>
      </section> : <a href={news.fonte}>Consultar a fonte</a>}
      {news.guia && news.guiaTitulo && <a href={news.guia}>{news.guiaTitulo}</a>}
    </div>
  </article>;
}

export function getNews(slug: string | null) {
  return orderedNews.find(news => news.slug === slug);
}

export function NewsPage({ slug }: { slug: string | null }) {
  const current = getNews(slug);
  return <main className="wrap news-main" id="conteudo">
    {current ? <NewsArticle news={current} /> : <>
      <h1 className="news-heading">Últimas notícias</h1>
      <div className="news-list" id="lista-noticias">
        {slug && <p>Matéria não encontrada. Veja as notícias disponíveis.</p>}
        {orderedNews.length === 0 && <p>Nenhuma notícia publicada.</p>}
        {orderedNews.map(news => <NewsCard key={news.slug} news={news} lazy />)}
      </div>
    </>}
  </main>;
}
