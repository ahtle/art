import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoneyCheckAlt, faFileInvoice, faMale, faCalendarAlt, 
    faUserCircle, faBriefcase, faChalkboardTeacher, faBookOpen, faNewspaper, 
    faBook, faIdCardAlt, faTable, faArchive, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMoneyCheckAlt, faFileInvoice, faMale, faCalendarAlt, faUserCircle, faBriefcase, 
    faChalkboardTeacher, faBookOpen, faNewspaper, faBook, faIdCardAlt , faTable, faArchive, faCheckDouble);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);