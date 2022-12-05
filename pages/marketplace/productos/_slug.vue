<template>
  <section class="space-y-xs container mx-auto">
    <section v-if="product" class="flex gap-5">
      <div class="relative h-full w-4/12">
        <div class="h-96 rounded border-2 border-gray-100">
          <img
            class="h-full w-full rounded object-cover"
            :src="`${$config.apiUrl}/uploads/${product.image}`"
            :alt="product.name"
          />
        </div>
      </div>
      <div class="w-8/12">
        <div class="w-full space-y-6 xl:w-7/12">
          <div>
            <div
              v-if="product?.categories"
              class="flex space-x-1 text-sm font-medium text-primary-500"
            >
              <div
                v-for="(category, index) in product.categories"
                :key="category.slug"
                class="flex space-x-1"
              >
                <p>
                  {{ category.name }}
                </p>
                <span v-if="index !== product.categories.length - 1">-</span>
              </div>
            </div>
            <h1 class="text-3xl font-semibold">{{ product?.name }}</h1>
            <span class="text-xs">vendido por</span>
            <NuxtLink
              :to="`/marketplace/proveedores/${product.store.slug}`"
              class="text-xs text-primary-500 transition duration-300 hover:underline"
            >
              {{ product.store.name }}
            </NuxtLink>
          </div>

          <ul v-if="product?.productPrices" class="space-y-2">
            <li
              v-for="productPrice in product.productPrices"
              :key="productPrice.id"
              class="w-fit text-center"
            >
              <div class="flex space-x-1 font-medium">
                <p>
                  Precio de {{ productPrice.minUnits }} -
                  {{ productPrice?.maxUnits || '∞' }}
                  unidades
                </p>
              </div>
              <h2 class="text-2xl font-semibold">$ {{ productPrice.price }}</h2>
            </li>
          </ul>

          <div class="space-y-2 text-sm text-gray-500">
            <p>
              {{ product?.description }}
            </p>
            <ul
              v-if="product?.characteristics"
              class="characteristics ml-auto pl-6"
            >
              <li
                v-for="characteristic in product.characteristics.split(',')"
                :key="characteristic"
              >
                {{ characteristic }}
              </li>
            </ul>
          </div>

          <div class="space-y-2">
            <a
              v-if="product.store.whatsappLink"
              :href="product.store.whatsappLink"
              target="_blank"
              class="btn-success btn flex w-fit space-x-1 text-xs text-white"
            >
              <BrandWhatsappIcon />
              <span> Contactar con proveedor </span>
            </a>

            <div class="flex space-x-2">
              <input
                v-model="quantity"
                type="number"
                placeholder="Cantidad"
                :max="product.stock"
                min="1"
                class="input-bordered input w-32 focus:outline-none"
              />
              <button
                class="btn-primary btn text-xs"
                @click="
                  addToCart({
                    buyNow: true,
                  })
                "
              >
                Comprar ahora
              </button>
              <button
                class="btn-outline btn-primary btn space-x-1 text-xs"
                @click="() => addToCart()"
              >
                <ShoppingCartPlusIcon />
                <span> Agregar al carrito </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Product } from '@/types'
export default Vue.extend({
  layout: 'marketplace',
  data() {
    return {
      product: null as Product | null,
      quantity: '',
    }
  },
  computed: {
    productSlug() {
      return this.$route.params.slug
    },
  },
  mounted() {
    this.fetchProduct()
  },
  methods: {
    async fetchProduct() {
      this.$store.commit('loader/setLoading', true)

      this.product = await this.$axios.$get(
        `/products/${this.productSlug}?store=true`
      )
      if (!this.product) this.$router.push('/marketplace')

      this.$store.commit('loader/setLoading', false)
    },

    addToCart({
      buyNow = false,
    }: {
      buyNow?: boolean
    } = {}) {
      const data = {
        ...this.product,
        quantity: Number(this.quantity) || 1,
      }

      this.$store.commit('cart/addProduct', data)
      if (buyNow) this.$router.push('/marketplace/checkout')

      this.quantity = ''
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
