<template>
  <section class="space-y">
    <!-- Section 1 -->
    <section class="relative h-screen">
      <video
        autoplay
        muted
        loop
        class="absolute top-0 left-0 z-10 h-screen w-full object-cover"
      >
        <source src="/assets/video/marketplace.mp4" />
      </video>
      <div
        class="absolute top-0 left-0 z-20 h-screen w-full bg-black bg-opacity-60"
      />

      <div
        class="absolute top-0 left-0 right-0 z-30 flex h-screen items-center justify-center"
      >
        <div class="space-y-10 text-center text-white">
          <h1 class="text-6xl font-semibold">
            Digitaliza tu negocio al por mayor
          </h1>
          <p class="mx-auto w-8/12 text-xl">
            Crea tu catalogo online y vende tus productos a todo Chile
          </p>
          <div class="flex items-center justify-center space-x-4">
            {{ user }}
            <NuxtLink v-if="!user" to="/auth/login" class="btn-primary btn">
              Iniciar Sesión
            </NuxtLink>
            <NuxtLink
              v-else-if="!user?.store"
              to="/proveedores/configurar-tienda"
              class="btn-primary btn"
            >
              Crear Tienda
            </NuxtLink>
            <NuxtLink v-else to="/dashboard" class="btn-primary btn">
              Ir a Dashboard
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'home',
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
})
</script>
