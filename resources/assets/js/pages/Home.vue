<template>
    <main>
      <h1></h1>
      <li v-for="product in products">
      {{ product.name }}
      </li>
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
