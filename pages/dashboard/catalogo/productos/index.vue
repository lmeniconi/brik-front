<template>
  <div>
    <DashboardTable
      :headers="['Nombre', 'Precio', 'Stock']"
      selectable
      withActions
      withPagination
    >
      <template #actions>
        <div class="flex justify-end">
          <NuxtLink to="productos/crear" class="btn btn-primary"
            >Añadir producto</NuxtLink
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
          <span class="badge-ghost badge badge-sm"
            >Desktop Support Technician</span
          >
        </td>
        <td>$ 1.000</td>
        <td>
          <div class="badge-warning badge text-white">10 unidades</div>
        </td>
        <td>
          <div class="flex items-center">
            <DashboardButton type="edit" />
            <DashboardButton type="delete" @click="deleteModal = true" />
          </div>
        </td>
      </tr>
    </DashboardTable>

    <DashboardModalDelete v-model="deleteModal" model="Producto" />
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
