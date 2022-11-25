<template>
  <section class="container mx-auto px-5">
    <MarketplaceNavbar />
    <main class="mt-20">
      <Nuxt />
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created() {
    this.$store.dispatch('auth/fetchUser')
  },
})
</script>
