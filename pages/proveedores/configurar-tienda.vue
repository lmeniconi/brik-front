<template>
  <section class="h-screen w-full bg-primary-300">
    <div class="container mx-auto flex h-full items-center">
      <div class="flex w-full justify-center px-6">
        <div class="flex w-full lg:w-11/12 xl:w-3/4">
          <div
            class="hidden h-auto w-full rounded-l-lg bg-gray-400 bg-cover lg:block lg:w-5/12"
            style="
              background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
            "
          />

          <div
            class="w-full rounded-lg bg-white p-5 lg:w-7/12 lg:rounded-l-none"
          >
            <h3 class="pt-4 text-center text-2xl">Configura tu tienda</h3>
            <form
              class="space-y-4 rounded bg-white px-8 pt-6 pb-8"
              @submit.prevent="submit"
            >
              <div class="space-y-1">
                <Input
                  v-model="form.name"
                  required
                  label="Nombre"
                  placeholder="Nombre de la tienda"
                />
                <Textarea
                  v-model="form.description"
                  label="Descripción"
                  placeholder="Descripción de la tienda"
                />
                <Input
                  v-model="form.phone"
                  required
                  label="Teléfono"
                  placeholder="Teléfono de la tienda"
                />
                <Input
                  v-model="form.address"
                  required
                  label="Dirección"
                  placeholder="Dirección de la tienda"
                />
                <Input
                  v-model="form.whatsappLink"
                  label="Whatsapp"
                  placeholder="Link de whatsapp"
                >
                  <template #info>
                    <a href="https://walink.co/" target="_blank"
                      >¿Cómo obtener el link?</a
                    >
                  </template>
                </Input>
              </div>

              <button class="btn btn-primary w-full">Guardar</button>

              <hr class="border-t" />
              <div class="text-center">
                <NuxtLink
                  to="/"
                  class="inline-block align-baseline text-sm text-primary-200 hover:text-primary-300"
                >
                  Volver
                </NuxtLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'home',
  middleware: ['auth'],
  data() {
    return {
      form: {
        name: '',
        description: '',
        phone: '',
        address: '',
        whatsappLink: '',
      } as any,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  mounted() {
    if (this.user.store) this.$router.push('/dashboard')
  },
  methods: {
    async submit() {
      this.$store.commit('loader/setLoading', true)

      const data = { ...this.form }
      data.userId = this.user.id

      if (this.user.role === 'customer')
        await this.$axios.put(`/users/${this.user.id}`, {
          role: 'provider',
        })

      await this.$axios.post('/stores', data)
      await this.$store.dispatch('auth/fetchUser', {
        refresh: true,
      })

      this.$store.commit('loader/setLoading', false)
      this.$router.push('/dashboard')
    },
  },
})
</script>
