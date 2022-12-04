<template>
  <section v-if="store">
    <MarketplaceHero :title="store.name" />

    <section class="space-y-sm container mx-auto">
      <section class="space-y-3">
        <p v-if="store.description">{{ store.description }}</p>
        <div class="flex items-center space-x-2">
          <p class="flex space-x-1">
            <PhoneIcon /><span> {{ store.phone }}</span>
          </p>
          <p>-</p>
          <p class="flex space-x-1">
            <MapPinIcon /> <span> {{ store.address }}</span>
          </p>
        </div>
        <a
          v-if="store.whatsappLink"
          :href="store.whatsappLink"
          target="_blank"
          class="btn btn-success flex w-fit space-x-1 text-xs text-white"
        >
          <BrandWhatsappIcon />
          <span> Contactar con proveedor </span>
        </a>
      </section>

      <MarketplaceProductList
        :products="products"
        @filterByCategory="
          fetchProducts(1, {
            category: $event,
          })
        "
      />
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Store } from '@/types'
import { Products } from '@/types/Product'
export default Vue.extend({
  layout: 'marketplace',
  data() {
    return {
      store: null as Store | null,
      products: null as Products | null,
    }
  },
  computed: {
    storeSlug() {
      return this.$route.params.slug
    },
  },
  async mounted() {
    this.$store.commit('loader/setLoading', true)
    await this.fetchStore({ loader: false })
    await this.fetchProducts(1, {}, { loader: false })
    this.$store.commit('loader/setLoading', false)
  },
  methods: {
    async fetchStore({ loader = true }: { loader?: boolean } = {}) {
      if (loader) this.$store.commit('loader/setLoading', true)

      this.store = await this.$axios.$get(`/stores/${this.storeSlug}`)
      if (!this.store) this.$router.push('/marketplace')

      if (loader) this.$store.commit('loader/setLoading', false)
    },
    async fetchProducts(
      page = 1,
      { category }: { category?: string } = {},
      { loader = true }: { loader?: boolean } = {}
    ) {
      if (loader) this.$store.commit('loader/setLoading', true)

      let query = `?storeId=${this.store?.id}&page=${page}`
      if (category) query += `&category=${category}`

      this.products = await this.$axios.$get(`/products${query}`)

      if (loader) this.$store.commit('loader/setLoading', false)
    },
  },
})
</script>

<style lang="postcss" scoped>
ul.characteristics li::before {
  @apply -ml-4 inline-block w-4 font-bold text-primary-500;
  content: '\2022';
}
</style>
