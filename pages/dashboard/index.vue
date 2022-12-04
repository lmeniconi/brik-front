<template>
  <section class="space-y-10">
    <section class="grid grid-cols-3 gap-4">
      <DashboardCard title="Clientes">
        <div class="flex items-center justify-between">
          <div class="space-y-2">
            <p class="text-4xl font-semibold">
              <ClientOnly>
                <ICountUp :endVal="clients" />
              </ClientOnly>
            </p>
          </div>
        </div>
      </DashboardCard>
      <DashboardCard title="Pedidos">
        <div class="flex items-center justify-between">
          <div class="space-y-2">
            <p class="text-4xl font-semibold">
              <ClientOnly>
                <ICountUp :endVal="orders.length" />
              </ClientOnly>
            </p>
          </div>
        </div>
      </DashboardCard>
    </section>

    <section>
      <DashboardOrdersTable :orders="orders" />
    </section>
  </section>
</template>

<script lang="ts">
import { groupBy } from 'lodash'
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      orders: [],
    }
  },
  computed: {
    store() {
      return this.$store.state.auth.user.store
    },
    clients() {
      let clients = 0
      if (this.orders) {
        // @ts-ignore
        const clientsList = groupBy(this.orders, (order) => order.userId)
        clients = Object.keys(clientsList).length
      }

      return clients
    },
  },
  mounted() {
    this.fetchOrders()
  },
  methods: {
    async fetchOrders() {
      this.$store.commit('loader/setLoading', true)
      this.orders = await this.$axios.$get(`/stores/${this.store.slug}/orders`)
      this.$store.commit('loader/setLoading', false)
    },
  },
})
</script>
