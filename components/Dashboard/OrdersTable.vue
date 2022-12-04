<template>
  <section>
    <DashboardTable
      v-if="orders.length"
      :headers="['Cliente', 'Fecha', 'Total']"
    >
      <tr v-for="order in orders" :key="order.id">
        <td>
          <div class="flex items-center space-x-3">
            <Avatar :src="order.user.picture" />
            <div>
              <div class="font-bold">
                {{ order.user.firstName }} {{ order.user.lastName }}
              </div>
              <div class="text-sm opacity-50">{{ order.user.email }}</div>
            </div>
          </div>
        </td>
        <td>{{ formatDate(order.created_at) }}</td>
        <td>$ {{ order.total }}</td>
      </tr>
    </DashboardTable>

    <div v-else class="no-orders">
      <span>Aún no tienes pedidos</span>
    </div>
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
