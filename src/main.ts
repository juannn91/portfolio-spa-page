import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import messages from './locale/locale';

const i18n = createI18n({
  legacy: false,
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
});

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .mount('#app');
