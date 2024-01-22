// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Bazaar from '../components/bazaar.vue';
import './style.css'
import { injectSpeedInsights } from '@vercel/speed-insights';

export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout);
    },
    enhanceApp(ctx) {
        ctx.app.component('Bazaar', Bazaar);
        injectSpeedInsights();
        Theme.enhanceApp(ctx);
        // ...
    }
}
