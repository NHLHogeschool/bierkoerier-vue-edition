<template>
   <main>
      <section id="cart">
         <div class="container">
            <h1>Winkelbierkrat</h1>

            <products-table></products-table>
         </div>
      </section>
   </main>
</template>

<script>

  export default {
    data() {
      return {

      }
   },
    components: {
     'products-table': require("../components/ProductsTable")
   }
  }
</script>
