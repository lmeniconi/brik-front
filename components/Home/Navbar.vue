<template>
  <nav class="absolute top-0 z-40 flex w-full justify-between py-5 px-5">
    <NuxtLink
      to="/"
      class="text-3xl font-bold"
      :class="{ 'text-white': isDark }"
    >
      Brik
    </NuxtLink>

    <NuxtLink
      v-if="showProviders"
      :to="user ? '/dashboard' : '/auth/login'"
      class="btn-primary btn"
    >
      {{ user ? 'Ir a Dashboard' : 'Iniciar Sesión' }}
    </NuxtLink>
    <NuxtLink v-else to="/proveedores" class="btn-primary btn">
      Soy Proveedor
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
    showProviders() {
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
