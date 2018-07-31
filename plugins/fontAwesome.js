import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMoneyCheckAlt);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);