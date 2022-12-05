<template>
  <nav class="flex w-full justify-between py-5">
    <NuxtLink to="/" class="text-3xl font-bold"> Brik </NuxtLink>

    <Search inputClass="w-96" @submit="performSearch" />

    <div class="flex items-center space-x-4">
      <div class="dropdown-end dropdown">
        <label tabindex="0" class="cursor-pointer">
          <div class="flex space-x-1">
            <ShoppingCartIcon />
            <span>Carrito</span>
          </div>
        </label>
        <ul
          v-if="cart.length"
          tabindex="0"
          class="dropdown-content menu rounded-box w-[30rem] bg-base-100 p-2 shadow"
        >
          <li v-for="product in cart" :key="product.id">
            <NuxtLink
              :to="`/marketplace/productos/${product.slug}`"
              class="flex items-center justify-between"
            >
              <div class="flex items-center">
                <div class="relative h-20 w-20">
                  <img
                    class="h-full w-full rounded object-cover"
                    :src="`${$config.apiUrl}/uploads/${product.image}`"
                    :alt="product.name"
                  />
                </div>

                <div class="flex flex-col pl-3">
                  <p class="text font-semibold">
                    {{ product.name }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ product.quantity }} unidades
                  </p>
                </div>
              </div>

              <div class="flex flex-col items-end">
                <p class="text font-semibold">
                  $ {{ getRangePrice(product, product?.quantity) }}
                </p>
                <p class="text-sm text-gray-500">
                  $
                  {{
                    getRangePrice(product, product?.quantity) *
                    product?.quantity
                  }}
                </p>
              </div>
            </NuxtLink>
          </li>

          <li class="mt-2">
            <NuxtLink to="/marketplace/checkout" class="btn-primary text-white">
              Ir a pagar
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div v-if="user" class="dropdown-end dropdown">
        <label tabindex="0" class="cursor-pointer">
          <div class="flex space-x-1">
            <UserIcon />
            <span> Mi Perfil </span>
          </div>
        </label>
        <ul
          tabindex="0"
          class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <NuxtLink to="/marketplace/mi-perfil/pedidos">Pedidos</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/auth/logout">Cerrar Sesión</NuxtLink>
          </li>
        </ul>
      </div>
      <NuxtLink
        v-else
        to="/auth/login"
        class="flex space-x-1 transition duration-300 hover:text-primary-500"
      >
        <UserIcon />
        <span> Iniciar Sesión </span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { getRangePrice } from '@/utils/products'
export default Vue.extend({
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    cart() {
      return this.$store.state.cart.cart
    },
  },
  methods: {
    performSearch(search: string) {
      document.location.href = `/marketplace?search=${search}`
      // this.$router.push(`/marketplace?search=${search}`)
    },
    getRangePrice,
  },
})
</script>
