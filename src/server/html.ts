// @ts-ignore
const indexHtml: string = require('../index.html');

const html = (body: string, chunks: any) => {
  const { javascript, styles } = chunks;

  const cssTags = styles ? Object.keys(styles).map(key => `<link rel="stylesheet" href="${styles[key]}">`) : [];
  const scriptTags = javascript ? Object.keys(javascript).map(key => `<script src="${javascript[key]}"></script>`) : [];

  return indexHtml
    .replace('</head>', `${cssTags.join()}</head>`)
    .replace('<div id="app-wrapper"></div>', `<div id="app-wrapper">${body}</div>`)
    .replace('</body>', `${scriptTags.join()}</body>`);
};

export default html;
