<template>
  <nav class="absolute top-0 z-40 flex w-full justify-between py-5 px-5">
    <NuxtLink
      to="/"
      class="text-3xl font-bold"
      :class="{ 'text-white': isDark }"
    >
      Brik
    </NuxtLink>

    <div class="flex items-center space-x-4">
      <NuxtLink :to="user ? '/dashboard' : '/auth/login'">
        <button class="btn btn-primary">
          {{ user ? 'Ir a Dashboard' : 'Iniciar Sesión' }}
        </button>
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isDark() {
      return ['/'].includes(this.$route.path)
    },
    isAbsolute() {
      return ['/'].includes(this.$route.path)
    },
  },
})
</script>
