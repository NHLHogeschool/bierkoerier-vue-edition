<template>
  <footer class="sticky">
    <div class="container">
      <router-link v-if="$root.cart.length !== 0" to="order" class="btn btn-primary btn-lg"><span class="badge">{{$root.cart.length}}</span> Bestellen</router-link>
      <button v-else type="button" disabled class="btn btn-primary btn-lg"><span class="badge">0</span> Bestellen</button>

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
