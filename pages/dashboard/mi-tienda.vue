<template>
  <section class="space-y-sm">
    <DashboardTitle title="Mi Tienda" />
    <!-- <DashboardTabs v-model="activeTab" :tabs="tabs" /> -->

    <section>
      <div class="flex h-full items-center">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
    store() {
      // @ts-ignore
      return this.user.store
    },
  },
  mounted() {
    this.form = { ...this.store }
  },
  methods: {
    async submit() {
      this.$store.commit('loader/setLoading', true)

      await this.$axios.put(`/stores/${this.store.slug}`, this.form)
      await this.$store.dispatch('auth/fetchUser', {
        refresh: true,
      })

      this.$store.commit('loader/setLoading', false)
    },
  },
})
</script>
