
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
import routes from './routes'

// const routes = {
// 	'/': 'Home',
// 	'/list': 'List'
	
// }

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname,
    },
    computed: {
        ViewComponent () {
            const matchingView = routes[this.currentRoute]
            return matchingView
            ? require('./pages/' + matchingView + '.vue')
            : require('./pages/404.vue');
        }
  	},
  	created() {
        console.log('vue loaded');
    },
    methods: {

    },
    render (h) { 
        return h(this.ViewComponent) 
    }
});