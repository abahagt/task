
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

window.Vue = require('vue');
import VueRouter from 'vue-router';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Internal
import App from './app/views/App';

// Routing
import {routes} from './routes';
Vue.use(VueRouter);
const router = new VueRouter(routes);

const app = new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router
});
