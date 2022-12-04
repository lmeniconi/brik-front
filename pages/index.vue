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
        <div class="space-y-16 text-center text-white">
          <div class="space-y-5">
            <h1 class="text-6xl font-semibold">
              Busca y encuentra tu producto
            </h1>
            <p class="mx-auto w-8/12 text-xl">
              Busca en nuestra plataforma el producto que necesitas, encuentra
              el mejor precio y compra en línea.
            </p>
          </div>

          <form
            class="flex items-center justify-center"
            @submit.prevent="search"
          >
            <input
              v-model="query"
              required
              type="text"
              placeholder="Buscar..."
              class="input w-full max-w-2xl rounded-r-none text-black placeholder-gray-400 focus:placeholder-opacity-50"
            />
            <button type="submit" class="btn btn-primary rounded-l-none">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'home',
  data() {
    return {
      query: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  methods: {
    search() {
      if (this.query)
        this.$router.push({
          path: '/marketplace?search=' + this.query,
          query: { search: this.query },
        })
    },
  },
})
</script>
