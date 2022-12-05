<template>
  <section>
    <DashboardTable
      :headers="['Nombre', 'Stock', 'Publicado']"
      :pagination="products.meta"
      noDataPlaceholder="No hay productos"
      withActions
      @changePage="fetchProducts"
    >
      <template #actions>
        <div class="flex justify-end">
          <NuxtLink to="productos/crear" class="btn btn-primary"
            >Añadir producto</NuxtLink
          >
        </div>
      </template>

      <tr v-for="product in products.data" :key="product.id">
        <td>{{ product.name }}</td>
        <td>
          <div class="badge badge-warning text-white">
            {{ product.stock }} unidades
          </div>
        </td>
        <td>
          <div class="indicator pl-8">
            <span
              class="badge indicator-item"
              :class="product.published ? 'badge-success' : 'badge-error'"
            />
          </div>
        </td>
        <td>
          <div class="flex items-center">
            <Button
              type="edit"
              @click="
                $router.push(`/dashboard/catalogo/productos/${product.slug}`)
              "
            />
            <Button type="delete" @click="openDeleteModal(product)" />
          </div>
        </td>
      </tr>
    </DashboardTable>

    <DashboardModalDelete
      v-model="deleteModal"
      :endpoint="`/products/${selected?.slug}`"
      model="Producto"
      @refresh="fetchProducts"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Products, Product } from '@/types/Product'
export default Vue.extend({
  data() {
    return {
      deleteModal: false,
      selected: null as any,

      products: {} as Products,
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts(page = 1) {
      this.$store.commit('loader/setLoading', true)
      this.products = await this.$axios.$get(
        `/products?published=true&published=false&page=${page}`
      )
      this.$store.commit('loader/setLoading', false)
    },

    openDeleteModal(product: Product) {
      this.selected = product
      this.deleteModal = true
    },
  },
})
</script>
