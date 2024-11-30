import './assets/main.css'
import './assets/tailwind.css'; // Tainwind CSS
import 'material-icons/iconfont/material-icons.css'; //Material Icon
import '@fortawesome/fontawesome-free/css/all.css'; // Import Fontawesome Library
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Fontawesome Library
import { library } from '@fortawesome/fontawesome-svg-core'; // Import Fontawesome Library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // Import Fontawesome Library
import { faCogs } from '@fortawesome/free-solid-svg-icons'; // Import Fontawesome Icon Library
library.add(faCogs);
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

export default {
  components: {
    FontAwesomeIcon,
  },
};
