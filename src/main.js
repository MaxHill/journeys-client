import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    mode: 'history',
    routes
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router
});
