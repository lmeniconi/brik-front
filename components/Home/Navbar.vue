<template>
  <nav class="absolute top-0 z-40 flex w-full justify-between py-5 px-5">
    <NuxtLink
      to="/"
      class="text-3xl font-bold"
      :class="{ 'text-white': isDark }"
    >
      Brik
    </NuxtLink>

    <NuxtLink v-if="show" :to="user ? '/dashboard' : '/auth/login'">
      <button class="btn-primary btn">
        {{ user ? 'Ir a Dashboard' : 'Iniciar Sesión' }}
      </button>
    </NuxtLink>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    show() {
      return ['/proveedores'].includes(this.$route.path)
    },
    isDark() {
      return ['/', '/proveedores'].includes(this.$route.path)
    },
    isAbsolute() {
      return ['/', '/proveedores'].includes(this.$route.path)
    },
  },
})
</script>
