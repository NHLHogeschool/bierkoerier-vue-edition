module.exports = {
    routes: [
    {
      	path: '/',
      	name: 'Home',
        meta: {
          title: "Home - Bierkoerier"
        },
      	component: require('./pages/Home.vue'),
    },
    {
      	path: '/cart',
      	name: 'Cart',
        meta: {
          title: "Winkelbierkrat - Bierkoerier"
        },
      	component: require('./pages/Cart.vue'),
    },
    {
      	path: '/order',
      	name: 'Order',
        meta: {
          title: "Bier Bestellen - Bierkoerier"
        },
      	component: require('./pages/Order.vue'),
    },
    {
    	path: '*',
    	name: 'Error 404',
      meta: {
        title: "Page not Found - Bierkoerier"
      },
    	component: require('./pages/404.vue')
    }
  ]
};
