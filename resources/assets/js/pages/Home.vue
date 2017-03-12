<template>
    <main>  
      <h1>{{ test }} </h1>
      <div><router-link to="order" class="btn btn-primary btn-lg">Bestellen</router-link></div>
    </main>
</template>

<script>
  //import hyperlink from '../components/hyperlink.vue'

  export default {
    data() {
      return {
        test: "hoi"
      }
    },
    components: {
      //hyperlink,
    },

    methods: {

    }
  }
</script>