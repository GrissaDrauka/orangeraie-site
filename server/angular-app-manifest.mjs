
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/orangeraie-site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-WH4JJK6R.js"
    ],
    "route": "/orangeraie-site"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 39122, hash: '2361ebf8877142a3e567b85c64b5d3e8697540eb4f2abf056b6f49a810b559b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31289, hash: '3b24768028850a5aeacd387bb3e7dd97ced6707b2f1a5a4a63680417d21eed31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 65821, hash: 'd3895985ff7f289fa4deaf348e9f7f6cf8f9e9a19a8854cef400bc29c9c2675a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SM3JPI6F.css': {size: 22906, hash: 'y7Huw+NuDFo', text: () => import('./assets-chunks/styles-SM3JPI6F_css.mjs').then(m => m.default)}
  },
};
