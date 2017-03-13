<template>
    <main>
      <h1>Producten</h1>
      <div class="products" v-for="product in products">
        <div class="product_name">{{ product.name }}</div>
        <div class="product_price">{{ product.price }}</div>
      </div>
      <div><router-link to="order" class="btn btn-primary btn-lg">Bestellen</router-link></div>
    </main>
</template>

<script>
  //import hyperlink from '../components/hyperlink.vue'

  export default {
    data() {
      return {
        products: [{
        }]
      }
    },
    components: {
      //hyperlink,
    },
    created () {
    	 this.getProducts()
    },
    methods: {
      getProducts() {
        axios.get('/api/products').then(response => this.products = response.data);
      }
    }
  }
</script>
