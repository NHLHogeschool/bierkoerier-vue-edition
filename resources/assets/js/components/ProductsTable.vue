<template>
   <div class="panel panel-default">
      <table class="table">
         <thead>
          <tr>
            <th>Naam</th>
            <th>Aantak</th>
            <th>Header</th>
          </tr>
         </thead>
         <tbody>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
         </tbody>
         <tfoot>
            <tr>
               <td></td>
               <td align="right">Totaal:</td>
               <td>Cell</td>
           </tr>
        </tfoot>
      </table>
   </div>
</template>

<script>
    export default {
      data() {
         products:[]
      },
      computed: {
         // QuantityCounter: function () {
         //    var cart = $root.cart;
         //
         //
         // }
      },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
