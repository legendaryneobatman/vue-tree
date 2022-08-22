import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import vClickOutside from './directives/v-click-outside';

createApp(App)
  .use(store)
  .directive('click-outside', vClickOutside)
  .mount('#app');
