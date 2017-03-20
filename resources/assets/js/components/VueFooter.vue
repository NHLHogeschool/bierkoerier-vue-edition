<template>
  <footer class="sticky">
    <div class="container">
    <router-link to="order" class="btn btn-primary btn-lg">Bestellen</router-link>
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
