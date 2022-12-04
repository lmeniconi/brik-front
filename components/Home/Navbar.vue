<template>
  <nav class="absolute top-0 z-40 flex w-full justify-between py-5 px-5">
    <NuxtLink
      to="/"
      class="text-3xl font-bold"
      :class="{ 'text-white': isDark }"
    >
      Brik
    </NuxtLink>

    <div v-if="showButton">
      <NuxtLink
        v-if="showProviders"
        :to="providersLink.to"
        class="btn-primary btn"
      >
        {{ providersLink.label }}
      </NuxtLink>
      <NuxtLink v-else to="/proveedores" class="btn-primary btn">
        Soy Proveedor
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
    showButton() {
      return ['/', '/proveedores'].includes(this.$route.path)
    },
    showProviders() {
      return ['/proveedores'].includes(this.$route.path)
    },
    providersLink() {
      if (!this.user)
        return {
          label: 'Empezar',
          to: '/auth/login',
        }

      // @ts-ignore
      return this.user.role === 'provider'
        ? {
            label: 'Ir a Dashboard',
            to: '/dashboard',
          }
        : {
            label: 'Crear Tienda',
            to: '/proveedores/configurar-tienda',
          }
    },
    isDark() {
      return ['/', '/proveedores', '/proveedores/configurar-tienda'].includes(
        this.$route.path
      )
    },
    isAbsolute() {
      return ['/', '/proveedores'].includes(this.$route.path)
    },
  },
})
</script>
