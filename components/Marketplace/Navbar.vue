<template>
  <nav class="flex w-full justify-between py-5">
    <NuxtLink to="/" class="text-3xl font-bold"> Brik </NuxtLink>

    <Search inputClass="w-96" />

    <div class="flex items-center space-x-4">
      <button class="flex">
        <ShoppingCartIcon />
        Carrito
      </button>

      <div class="dropdown-end dropdown">
        <label tabindex="0" class="flex cursor-pointer">
          <UserIcon />
          <span>
            {{ user ? 'Cuenta' : 'Iniciar Sesión' }}
          </span>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <NuxtLink to="/mi-cuenta"> Mi Perfil </NuxtLink>
          </li>
        </ul>
      </div>
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
