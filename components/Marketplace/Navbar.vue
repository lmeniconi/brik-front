<template>
  <nav class="flex w-full justify-between py-5">
    <NuxtLink to="/" class="text-3xl font-bold"> Brik </NuxtLink>

    <Search inputClass="w-96" />

    <div class="flex items-center space-x-4">
      <button class="flex space-x-1">
        <ShoppingCartIcon />
        <span> Carrito </span>
      </button>

      <div></div>

      <button v-if="user" class="flex space-x-1">
        <UserIcon />
        <span> Mi Perfil </span>
      </button>
      <button v-else class="flex space-x-1">
        <UserIcon />
        <span> Iniciar Sesión </span>
      </button>
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
  },
})
</script>
