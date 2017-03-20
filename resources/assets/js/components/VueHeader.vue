<template>
    <header>
       <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                  <router-link to="/" id="logo" class="bnavbar-brand">BIERKOERIER</router-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        mounted() {
            console.log('Header mounted.')
        }
    }
</script>
