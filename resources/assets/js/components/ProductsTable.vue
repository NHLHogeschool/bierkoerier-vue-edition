<template>
   <div class="panel panel-default">
      <table class="table">
         <thead>
          <tr>
            <th>Bier</th>
            <th>Aantal</th>
            <th>Prijs</th>
          </tr>
         </thead>
         <tbody>
          <tr v-for="product in products">
            <td>{{product.name}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.price}}</td>
          </tr>
         </tbody>
         <tfoot>
            <tr>
               <td></td>
               <td align="right">Totaal:</td>
               <td>0</td>
           </tr>
        </tfoot>
      </table>
   </div>
</template>

<script>
    import cart from '../cart';
    export default {
      data() {
         return {
            products:cart.state.products
         }
      },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
