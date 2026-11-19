# GTA VI Brasil

Portal estático em React, TypeScript e Vite.

## Editar notícias

Adicione um objeto ao array `materias` em `src/data/materias.ts`. Use um
`slug` único e estável, uma data no formato `AAAA-MM-DD` ou uma data ISO com
horário e fuso, e um parágrafo por item de `texto`. Para incluir uma imagem
local, coloque o arquivo em `public/` e informe o caminho a partir da raiz,
como `/minha-capa.webp`.

O portal ordena as matérias por data, exibe a mais recente na home e cria
automaticamente o link de leitura a partir do slug.

## Rodar e publicar

- `npm ci` instala as dependências.
- `npm run dev` abre a prévia local com atualização ao salvar os arquivos.
- `npm run build` valida o TypeScript e gera a versão estática em `dist/`.

Para refletir alterações no endereço hospedado, publique o novo build no Sites.
