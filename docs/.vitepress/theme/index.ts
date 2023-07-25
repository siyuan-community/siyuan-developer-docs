// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-bottom': h('script', {
        'defer': '',
        'src': '/_vercel/insights/script.js',
      } )
    })
  },
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx);
    // ...
  }
}
