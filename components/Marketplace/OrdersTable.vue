<template>
  <section>
    <DashboardTable
      :headers="['Tienda', 'Fecha', 'Total']"
      :data="orders"
      noDataPlaceholder="Aún no tienes pedidos"
    >
      <tr v-for="order in orders" :key="order.id">
        <td>
          <div class="flex items-center space-x-3">
            <div>
              <NuxtLink
                :to="`/marketplace/proveedores/${order.store.slug}`"
                class="font-bold transition duration-300 hover:text-primary-500"
                >{{ order.store.name }}
              </NuxtLink>
              <div class="text-sm opacity-50">{{ order.store.phone }}</div>
            </div>
          </div>
        </td>
        <td>{{ formatDate(order.created_at) }}</td>
        <td>$ {{ order.total }}</td>
      </tr>
    </DashboardTable>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
export default Vue.extend({
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(date: string) {
      return dayjs(date).format('DD/MM/YYYY')
    },
  },
})
</script>
