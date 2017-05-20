<template>
  <footer class="sticky">
    <div class="container">

      <router-link
         v-if="$route.name == 'Order' "
         tag="button"
         :disabled="$root.cart.length == 0"
         to="order"
         class="btn btn-success btn-lg"
         >
         Nu kopen
      </router-link>

      <router-link
         v-else
         tag="button"
         :disabled="$root.cart.itemTotal == 0"
         to="order"
         class="btn btn-primary btn-lg"
         >
         Bestellen
         <span class="badge">{{$root.cart.itemTotal}}</span>
      </router-link>


    </div>
  </footer>
</template>

<script>
    export default {
        mounted() {
            console.log('Header mounted.')
        }
    }
</script>
