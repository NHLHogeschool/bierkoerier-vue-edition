<template>
    <header>
       <nav class="navbar navbar-default navbar-static-top">
               <div class="navbar-header">
                  <div class="container">
                     <router-link to="/" class="navbar-brand">BIERKOERIER</router-link>
                     <router-link to="/cart" class="navbar-right navbar-text">Winkelbierkrat<span class="badge">{{$root.cart.itemTotal}}</span></router-link>
                  </div>
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
