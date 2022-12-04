<template>
  <section class="space-y-8">
    <section class="grid grid-cols-12">
      <div class="col-span-2">
        <!-- <Search class="mx-auto w-10/12" /> -->
      </div>

      <div class="col-span-10 flex justify-end space-x-6 px-10 text-sm">
        <!-- <div>Ordenar por <button>precio</button></div> -->
      </div>
    </section>

    <section class="grid grid-cols-12 gap-5">
      <section class="relative col-span-2 h-full">
        <div class="sticky top-10 h-fit space-y-2">
          <p class="text-xl font-semibold">Categorías</p>
          <hr />
          <ul class="space-y-1 pl-5">
            <li v-for="category in categories" :key="category.name">
              <button
                class="w-full transform rounded-md border border-gray-100 p-2 text-left text-sm transition duration-300 hover:text-primary-500 hover:shadow"
                :class="{
                  'scale-105 text-primary-500 shadow':
                    activeCategory?.slug === category.slug,
                }"
                @click="filterByCategory(category)"
              >
                {{ category.name }}
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section class="col-span-10 px-5">
        <section
          v-if="products?.data?.length"
          class="grid grid-cols-3 gap-5 xl:grid-cols-4"
        >
          <NuxtLink
            v-for="product in products.data"
            :key="product.id"
            :to="`/marketplace/productos/${product.slug}`"
          >
            <article
              class="h-96 w-full rounded border border-gray-100 transition duration-300 hover:scale-105"
            >
              <div class="h-[60%] rounded">
                <img
                  class="h-full w-full rounded object-cover"
                  :src="`${$config.apiUrl}/uploads/${product.image}`"
                  :alt="product.name"
                />
              </div>
              <div class="flex h-[40%] flex-col justify-between p-4">
                <div class="space-y-1">
                  <div class="grid grid-cols-2 gap-x-1">
                    <div
                      v-for="category in product.categories"
                      :key="category.slug"
                    >
                      <span class="text-xs text-gray-500"
                        >{{ category.name }}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p class="font-medium">{{ product.name }}</p>
                    <!-- <MarketplaceRating /> -->
                  </div>
                </div>

                <div class="flex justify-between">
                  <p class="font-medium">$ {{ getMinPrice(product) }}</p>
                </div>
              </div>
            </article>
          </NuxtLink>
        </section>
        <section v-else>
          <p class="text-center">No hay productos</p>
        </section>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { find } from 'lodash'
import { Category } from '@/types'
import { Product, Products } from '@/types/Product'
import { getMinPrice } from '@/utils/products'
export default Vue.extend({
  props: {
    products: {
      type: Object,
      default: null as Products | null,
    },
  },
  data() {
    return {
      categories: [] as Category[],
      activeCategory: null as Category | null,
    }
  },
  computed: {
    querySearch() {
      return this.$route.query?.search
    },
  },
  watch: {
    products: {
      handler() {
        if (this.products && this.categories.length === 0) this.getCategories()
      },
      immediate: true,
    },
    activeCategory() {
      this.$emit('filterByCategory', this.activeCategory?.slug)
    },
  },
  methods: {
    getCategories() {
      const categories = this.products?.data
        .map((product: Product) => product.categories)
        .flat()

      const filteredCategories: Category[] = []
      categories.forEach((category: Category) => {
        if (!find(filteredCategories, { id: category.id }))
          filteredCategories.push(category)
      })

      this.categories = filteredCategories
    },
    getMinPrice,

    filterByCategory(category: Category) {
      this.activeCategory =
        this.activeCategory?.slug === category.slug ? null : category
    },
  },
})
</script>
