import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home'
import Wifi from './pages/Wifi'
import Signal from './pages/Signal'
import Services from './pages/Services'
import Infos from './pages/Infos'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { name:"Home",        path: '/home',     component: Home },
    { name:"Wifi",        path: '/wifi',     component: Wifi },
    { name:"Signal",      path: '/signal',   component: Signal },
    { name:"Services",    path: '/services', component: Services },
    { name:"Infos",       path: '/infos', component: Infos },

    // otherwise redirect to home
    { path: '*', redirect: '/home' }
  ]
});