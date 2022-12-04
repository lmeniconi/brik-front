<template>
  <section>
    <HomeNavbar />
    <main>
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
