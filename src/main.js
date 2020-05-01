import DefaultLayout from '~/layouts/Default.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/hamburgers.min.css';

import VTooltip from 'v-tooltip';

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
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

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
  faArrowAltCircleRight
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Ownhead', Header);
  Vue.component('Ownfoot', Footer);
  Vue.component('font-awesome', FontAwesomeIcon);
  Vue.use(VTooltip);
}
