<template>
  <section>
    <section>
      <h1 class="title is-3">Mis pedidos</h1>
      <MarketplaceOrdersTable :orders="orders" />
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'marketplace',
  middleware: 'auth',
  data() {
    return {
      orders: [],
    }
  },
  mounted() {
    this.fetchOrders()
  },
  methods: {
    async fetchOrders() {
      this.$store.commit('loader/setLoading', true)
      this.orders = await this.$axios.$get('/orders')
      this.$store.commit('loader/setLoading', false)
    },
  },
})
</script>
