<template>
    <main>
      <section id="search-engine" class="jumbotron" v-bind:class="{ filled: searchString.length !== 0 }">
        <div class="container">
          <h1 class="">Producten</h1>
          <div class="input-group">
            <input type="text" class="form-control" v-model="searchString" placeholder="Zoek bier...">
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button">Geef!</button>
            </span>
          </div><!-- /input-group -->
        </div>

      </section>

      <section id="results">
        <div class="container">
          <div class="product col-md-4" v-for="product in filteredData">
            <div class="product_name">{{ product.name }}</div>
            <div class="product_price">{{ product.price }}</div>
            <button class="btn btn-primary" type="button" @click="addToCart(product)">+</button>
          </div>
        </div>
      </section>

    </main>
</template>

<script>
  //import hyperlink from '../components/hyperlink.vue'

  export default {
    data() {
      return {
        products: [{
        }],
        searchString:"",
        searchResults:[]

      }
    },
    components: {
      //hyperlink,
    },
    created () {
    	 this.getProducts()
    },
    computed: {
      // A computed property that holds only those articles that match the searchString.
      filteredData: function () {
         var results_array = this.searchResults,
             searchString = this.searchString;

         if(!searchString){
             return this.products;
         }

          searchString = searchString.trim().toLowerCase();

          if (searchString) {
             results_array = this.products.filter(function(product){
                 if(product.name.toLowerCase().indexOf(searchString) !== -1){
                     return product;
                 }
             })
            }
          // Return an array with the filtered data.
          return results_array;
      },

        },
    methods: {
      getProducts() {
        axios.get('/api/products').then(response => this.products = response.data);
     },
     addToCart(product) {
         this.$root.cart.push(product);
     }
    }
  }
</script>
