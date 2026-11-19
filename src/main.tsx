import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Buying } from './components/Buying';
import { Checklist } from './components/Checklist';
import { Guides } from './components/Guides';
import { Launch } from './components/Launch';
import { Footer, Header } from './components/Layout';
import { getNews, LatestNews, NewsPage } from './components/News';
import { Reading } from './components/Reading';
import { Series } from './components/Series';
import './style.css';

function Home() {
  useEffect(() => {
    function followHash() {
      const target = document.getElementById(location.hash.slice(1));
      if (target instanceof HTMLDetailsElement) target.open = true;
      if (target instanceof HTMLInputElement) target.focus({ preventScroll: true });
      target?.scrollIntoView();
    }

    followHash();
    window.addEventListener('hashchange', followHash);
    return () => window.removeEventListener('hashchange', followHash);
  }, []);

  return <main className="wrap" id="conteudo">
    <Launch />
    <LatestNews />
    <Guides />
    <div className="split"><Checklist /><Series /></div>
    <Reading />
    <Buying />
  </main>;
}

const newsPage = /^\/noticias(?:\.html)?\/?$/.test(location.pathname);
const slug = new URLSearchParams(location.search).get('materia');

if (newsPage) {
  document.body.classList.add('news-page');
  const current = getNews(slug);
  document.title = (current?.titulo ?? 'Notícias') + ' | GTA VI Brasil';
}

createRoot(document.getElementById('root')!).render(<>
  <Header newsPage={newsPage} />
  {newsPage ? <NewsPage slug={slug} /> : <Home />}
  <Footer newsPage={newsPage} />
</>);
