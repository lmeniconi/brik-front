<template>
  <div>
    <DashboardTable
      :headers="['Cliente', 'Estado', 'Notas']"
      selectable
      withActions
      withPagination
    >
      <template #actions>
        <div class="flex justify-end">
          <NuxtLink to="pedidos/agregar" class="btn btn-primary"
            >Añadir pedido</NuxtLink
          >
        </div>
      </template>
      <tr v-for="i in 5" :key="i">
        <td>
          <label>
            <input type="checkbox" class="checkbox" />
          </label>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span class="badge badge-ghost badge-sm"
            >Desktop Support Technician</span
          >
        </td>
        <td>
          <div class="badge badge-warning text-white">Pago pendiente</div>
        </td>
        <td>Nota</td>
        <td class="flex items-center">
          <DashboardButton type="edit" />
          <DashboardButton type="delete" @click="deleteModal = true" />
        </td>
      </tr>
    </DashboardTable>

    <DashboardModalDelete v-model="deleteModal" model="Pedido" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      deleteModal: false,
    }
  },
})
</script>
