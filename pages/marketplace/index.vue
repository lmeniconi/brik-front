<template>
  <section class="space-y-xs">
    <MarketplaceHero :title="querySearch" />

    <MarketplaceProductList
      :products="products"
      @filterByCategory="
        fetchProducts(1, {
          category: $event,
        })
      "
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Products } from '@/types/Product'
export default Vue.extend({
  layout: 'marketplace',
  data() {
    return {
      products: null as Products | null,
    }
  },
  computed: {
    querySearch() {
      return this.$route.query.search
    },
  },
  watch: {
    querySearch: {
      immediate: true,
      handler() {
        this.fetchProducts(1)
      },
    },
  },
  created() {
    if (!this.$route.query.search) this.$router.push('/')
  },
  methods: {
    async fetchProducts(page = 1, { category }: { category?: string } = {}) {
      this.$store.commit('loader/setLoading', true)

      let query = `?search=${this.querySearch}&page=${page}`
      if (category) query += `&category=${category}`

      this.products = await this.$axios.$get(`/products${query}`)

      this.$store.commit('loader/setLoading', false)
    },
  },
})
</script>
