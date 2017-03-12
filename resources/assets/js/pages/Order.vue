<template>
    <main>
    <div><router-link to="/" class="btn btn-primary btn-lg">Home</router-link></div>  
      <h1>{{ test }} </h1>
    </main>
</template>

<script>

  export default {
    data() {
      return {
        test: "asldkhflksdlfasldkfhl"
      }
    }
  }
</script>