import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {  faArrowLeft, faArrowRight, faMoneyCheckAlt, faFileInvoice, faMale, faUsers, faCalendarAlt, 
    faUserCircle, faBriefcase, faChalkboardTeacher, faBookOpen, faNewspaper, 
    faBook, faIdCardAlt, faTable, faArchive, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faArrowLeft, faArrowRight, faMoneyCheckAlt, faFileInvoice, faMale, faUsers , faCalendarAlt, faUserCircle, faBriefcase, 
    faChalkboardTeacher, faBookOpen, faNewspaper, faBook, faIdCardAlt , faTable, faArchive, faCheckDouble);

Vue.component(FontAwesomeIcon.name, FontAwesomeIcon);