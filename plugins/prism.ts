import Prism from 'prismjs'
import "prismjs/plugins/autoloader/prism-autoloader.min";
import "prismjs/plugins/line-numbers/prism-line-numbers.min";
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import 'prismjs/plugins/line-numbers/prism-line-numbers.min.css'
import 'prismjs/plugins/toolbar/prism-toolbar.min.css'
import 'prismjs/themes/prism-tomorrow.min.css'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('Prism', Prism);
});