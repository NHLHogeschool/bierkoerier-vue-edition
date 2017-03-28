
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

//import vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//External router file
import { routes } from './routes.js';
//Create router object from VueRouter
const router = new VueRouter({ mode: 'history', routes });
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
//Import Header Component
Vue.component('VueHeader', require('./components/VueHeader.vue'));
Vue.component('VueFooter', require('./components/VueFooter.vue'));

// Create Vue object in #app
const app = new Vue({
   el: '#app',
   router,
   data: {
      cart: []
   }
});
