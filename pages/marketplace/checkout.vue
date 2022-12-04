<template>
  <section class="container mx-auto">
    <MarketplaceHero title="Pagar" />

    <section v-if="keys(filteredCart).length">
      <section v-for="storeSlug in keys(filteredCart)" :key="storeSlug">
        <div class="space-y-10">
          <NuxtLink
            :to="`/marketplace/proveedores/${storeSlug}`"
            class="text-xl font-medium transition duration-300 hover:text-primary-500"
          >
            {{ filteredCart[storeSlug][0].store.name }}
          </NuxtLink>
          <ul class="space-y-5">
            <li v-for="product in cart" :key="product.id">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="relative h-20 w-20">
                    <img
                      class="h-full w-full rounded object-cover"
                      :src="`${$config.apiUrl}/uploads/${product.image}`"
                      :alt="product.name"
                    />
                  </div>

                  <div class="flex flex-col pl-3">
                    <NuxtLink
                      :to="`/marketplace/productos/${product.slug}`"
                      class="text font-semibold transition duration-300 hover:text-primary-500"
                    >
                      {{ product.name }}
                    </NuxtLink>
                    <p class="text-sm text-gray-500">
                      {{ product.quantity }} unidades
                    </p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="flex flex-col items-end">
                    <p class="text font-semibold">
                      $ {{ getRangePrice(product, product.quantity) }}
                    </p>
                    <p class="text-sm text-gray-500">
                      $
                      {{
                        getRangePrice(product, product.quantity) *
                        product.quantity
                      }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="w-full border-b border-gray-100" />
            </li>
          </ul>

          <div class="flex items-center justify-between">
            <p class="text font-semibold">Total</p>
            <p class="text font-semibold">$ {{ getTotal(storeSlug) }}</p>
          </div>

          <div class="flex justify-end">
            <button class="btn btn-primary" @click="generateOrder(storeSlug)">
              Generar pedido
            </button>
          </div>
        </div>
      </section>
    </section>
    <section v-else>
      <p class="text-center">No hay productos en el carrito</p>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { groupBy } from 'lodash'
import { Product } from '@/types'
import { getRangePrice } from '@/utils/products'
export default Vue.extend({
  layout: 'marketplace',
  computed: {
    cart() {
      return this.$store.state.cart.cart
    },
    filteredCart() {
      // @ts-ignore
      return groupBy(this.cart, (product: Product) => {
        return product.store?.slug
      })
    },
  },
  methods: {
    async generateOrder(storeSlug: string) {
      this.$store.commit('loader/setLoading', true)

      const products = this.filteredCart[storeSlug].map((product) => ({
        id: product.id,
        quantity: product.quantity,
        price: getRangePrice(product, product.quantity),
      }))

      const store = this.filteredCart[storeSlug][0].store

      try {
        await this.$axios.$post('/orders', {
          total: this.getTotal(storeSlug),
          storeId: store.id,
          products,
        })
        this.$store.commit('cart/clearStore', storeSlug)
      } catch {
        this.$store.commit('cart/setCart', [])
      }

      this.$store.commit('loader/setLoading', false)
    },

    getTotal(storeSlug: string) {
      const products = this.filteredCart[storeSlug]
      return products.reduce((acc, product) => {
        return acc + getRangePrice(product, product.quantity) * product.quantity
      }, 0)
    },
    keys(data: object) {
      return Object.keys(data)
    },
    getRangePrice,
  },
})
</script>
