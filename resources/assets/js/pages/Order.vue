<template>
    <main>  
      <h1>{{ test }} </h1>
    </main>
</template>

<script>
  import hyperlink from '../components/hyperlink.vue'

  export default {
    data() {
      return {
        test: "asldkhflksdlfasldkfhl"
      }
    },
    components: {
      hyperlink,
    },

    methods: {

    }
  }
</script>