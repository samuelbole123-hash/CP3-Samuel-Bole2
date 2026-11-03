# CP1 — Site pessoal / portfólio

Site pessoal de 5 páginas construído apenas com **HTML5 semântico** e
**CSS externo**, sem frameworks e sem JavaScript além do necessário para o
canvas da página de gráficos.

## Como abrir

Abra `index.html` diretamente no navegador, ou sirva a pasta com qualquer
servidor estático (ex.: extensão "Live Server" do VS Code). Todos os links
e caminhos de imagem/CSS são relativos, então funciona a partir de
qualquer local em disco.

## Estrutura

```
CP1_Bole_Samuel_DEV01/
├── index.html         → página inicial (quem eu sou)
├── curriculo.html      → formação, experiência e habilidades
├── formulario.html     → formulário de contato
├── multimidia.html     → vídeo, áudio e mapa (iframe)
├── graficos.html        → canvas desenhado via JS + SVG estilizado
├── css/
│   └── estilos.css     → folha de estilo única, usada por todas as páginas
├── img/                → avatar e thumbnails de projeto (PNG)
├── media/               → vídeo e áudio de demonstração (MP4/MP3)
└── README.md
```

## Observações

- **Conteúdo de exemplo**: os textos, formação e experiência usam o perfil
  fictício "Samuel Bole" como placeholder. Troque pelo seu nome e
  histórico real antes de entregar — é essa a exigência do checkpoint.
- **Vídeo e áudio**: os arquivos em `media/` são clipes gerados
  automaticamente (um padrão de cor animado e dois tons), só para provar
  que os elementos `<video>`/`<audio>` funcionam com `controls`. Substitua
  por gravações reais suas.
- **Imagens**: `img/avatar.png`, `img/projeto1.png` e `img/projeto2.png`
  são ilustrações simples geradas por script para preencher o layout.
  Troque pela sua própria foto e capturas de tela reais.
- **Mapa**: o `<iframe>` em `multimidia.html` usa o embed público do
  OpenStreetMap (não exige chave de API); ajuste as coordenadas (`bbox`)
  para a sua cidade.
- **Validação**: antes de entregar, rode cada página pelo
  [W3C Markup Validator](https://validator.w3.org/) e confira o console do
  navegador (nenhum 404 de CSS/imagem/mídia).

## Checklist antes de compactar

- [ ] Nome, fotos e textos substituídos pelos seus dados reais.
- [ ] `.zip` extraído em outra pasta e `index.html` aberto para conferir.
- [ ] Nenhum caminho absoluto (`C:\...`, `file:///...`) restante.
- [ ] Pasta renomeada para `CP1_SeuNome_Sobrenome_Turma`.
