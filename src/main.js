import DefaultLayout from '~/layouts/Default.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

import './assets/css/styles.css';
import './assets/css/themes.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/hamburgers.min.css';

import VTooltip from 'v-tooltip';

// TODO: для деплоя используется пакет gh-pages, в package.json добавлены соответсвующие скрипты, в gridsome.config.js адрес репозитория(npm run deploy нужно запускать из bash)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTelegramPlane,
  faVk,
  faJsSquare,
  faVuejs,
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faWordpress,
  faModx,
  faOpencart,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight, faPalette } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import lang from '~/content/lang.json';

config.autoAddCss = false;
library.add(
  faGithub,
  faTelegramPlane,
  faVk,
  faJsSquare,
  faVuejs,
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faWordpress,
  faModx,
  faOpencart,
  faArrowAltCircleRight,
  faPalette
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Ownhead', Header);
  Vue.component('Ownfoot', Footer);
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.use(VTooltip);
  Vue.prototype.$lang = lang;
  Vue.prototype.$eventBus = new Vue();
}
