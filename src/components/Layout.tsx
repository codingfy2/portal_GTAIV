function Brand() {
  return <a className="brand" href="/" aria-label="GTA VI Brasil, início">
    <strong>GTA<span>VI</span></strong><small>BRASIL</small>
  </a>;
}

export function Header({ newsPage }: { newsPage: boolean }) {
  const prefix = newsPage ? '/' : '';
  return <>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header className="top">
      <div className="wrap bar">
        <Brand />
        <nav aria-label="Principal">
          <a href={prefix + '#central'}>Central GTA VI</a>
          <a href={prefix + '#guias'}>Guias</a>
          <a href="/noticias.html" aria-current={newsPage ? 'page' : undefined}>Notícias</a>
          <a href={prefix + '#serie'}>GTA V × GTA VI</a>
          <a href={prefix + '#edicoes'}>Onde comprar</a>
          <a href={prefix + '#checklist'}>Checklists</a>
        </nav>
        <a className="search-link" href={prefix + '#busca'} aria-label="Buscar guias">⌕</a>
      </div>
    </header>
  </>;
}

export function Footer({ newsPage }: { newsPage: boolean }) {
  return <footer>
    <div className="wrap footer">
      <div><Brand /><p>Projeto editorial independente, sem vínculo com a Rockstar Games.</p></div>
      {!newsPage && <div>
        <details><summary>Sobre e contato</summary><p>Portal em português para quem joga em consoles. O canal editorial de contato ainda será divulgado.</p></details>
        <details><summary>Privacidade</summary><p>O checklist guarda seu progresso no armazenamento local. Você pode removê-lo nas configurações do navegador.</p></details>
        <details><summary>Links de compra</summary><p>As páginas de compra desta versão apontam para a loja oficial. Links que gerem comissão serão identificados.</p></details>
      </div>}
    </div>
  </footer>;
}
