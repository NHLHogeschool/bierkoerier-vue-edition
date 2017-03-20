<template>
    <main>
      <section id="search-engine" class="jumbotron">
        <div class="container">
          <h1 class="">Producten</h1>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Bier!!...">
            <span class="input-group-btn">
              <button class="btn btn-primary" type="button">Geef!</button>
            </span>
          </div><!-- /input-group -->
        </div>

      </section>

      <section id="results">
        <div class="container">
          <div class="products" v-for="product in products">
            <div class="product_name">{{ product.name }}</div>
            <div class="product_price">{{ product.price }}</div>
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
                var results_array = this.all,
                    searchString = this.searchString;


                if(!searchString){
                    return this.data[this.visibility];
                }

                searchString = searchString.trim().toLowerCase();

                if (searchString) {
                    results_array = this.all.filter(function (row) {
                      return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(searchString) > -1
                      })
                    })
                  }
                // Return an array with the filtered data.
                return results_array;
            },

        },
    methods: {
      getProducts() {
        axios.get('/api/products').then(response => this.products = response.data);
      }
    }
  }
</script>
