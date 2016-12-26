import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

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
