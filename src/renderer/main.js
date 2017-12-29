import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import Tabs from 'vue-tabs-component'
import VModal from 'vue-js-modal'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(Tabs);
Vue.use(VModal, {dialog: true});

/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    store,
    template: '<App/>'
}).$mount('#app');
