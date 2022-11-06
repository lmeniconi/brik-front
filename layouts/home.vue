<template>
  <section>
    <Navbar />
    <main>
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

<style lang="postcss">
/* Components */
.title-landing {
  @apply text-4xl font-bold;
}

.title-description-landing {
  @apply text-lg text-neutral;
}

.subtitle-landing {
  @apply text-2xl font-bold;
}
</style>
