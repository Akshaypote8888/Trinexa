
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://akshaypote8888.github.io/Trinexa/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Trinexa/home",
    "route": "/Trinexa"
  },
  {
    "renderMode": 2,
    "route": "/Trinexa/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24640, hash: '1d75cf63323adcbad92085dd64afbb87a4808a2d4171603bc84c07d3a31c5738', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17093, hash: '3462aa6b4df66148f0c5f6e2e2d30545383140b3b04a5c171f1fd87106b1586f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 43807, hash: 'daaac8eccec43f2a435733473a48f9729723508cb33e588fc7270fdab5f41a87', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-TC33KFDC.css': {size: 8146, hash: 'lTPvQpwocPo', text: () => import('./assets-chunks/styles-TC33KFDC_css.mjs').then(m => m.default)}
  },
};
