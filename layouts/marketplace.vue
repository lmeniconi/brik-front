<template>
  <section class="container mx-auto px-5">
    <MarketplaceNavbar />
    <main class="mt-20">
      <Loader v-show="loading" />
      <Nuxt />
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    loading(): boolean {
      return this.$store.state.loader.loading
    },
  },
  created() {
    this.$store.dispatch('cart/loadCartFromLocalStorage')
    this.$store.dispatch('auth/fetchUser')
  },
})
</script>
