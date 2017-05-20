<template>
    <main>
      <section id="search-engine" class="jumbotron" :class="{ filled: searchString.length !== 0 }">
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
          <div class="product col-md-3 col-sm-6" v-for="product in filteredData">

            <div class="product-body thumbnail">
               <div class="product-name caption">{{ product.name }}</div>
               <div class="product-price">&euro;{{ product.price }}</div>
               <button class="btn btn-primary product-button" type="button" @click="addToCart(product)">In winkelwagen</button>
            </div>

          </div>
        </div>
      </section>

    </main>
</template>

<script>
   import cart from '../cart.js';
  export default {
    data() {
      return {
        products: [],
        searchString:"",
        searchResults:[]

      }
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
            console.log(this);
            var   products = cart.state.products;
            var    foundProduct = false;
            //Doorzoek alle producten in winkelwagen
            for (var i = 0; i < products.length; i++) {
               // als product ID gelijk is aan toegevoegde product ID, voeg nieuwe toe.
               if(products[i].id === product.id) {
                  var newProduct = products[i];
                  // totaal aantal van dat product +1
                  newProduct.quantity++;
                  cart.state.itemTotal++;
                  // werk de winkelwagen bij
                  cart.setProduct([i], newProduct);
                  foundProduct = true;
                  break;
               }
            }
            if(!foundProduct) {
              product.quantity = 1;
              cart.state.itemTotal++;
              cart.addProduct(product);
            }
         }
      }
  }
</script>
