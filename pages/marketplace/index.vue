<template>
  <section class="space-y-xs">
    <MarketplaceHero :title="querySearch" />

    <section class="space-y-8">
      <section class="grid grid-cols-12">
        <div class="col-span-2">
          <Search v-model="search" class="mx-auto w-10/12" />
        </div>

        <div class="col-span-10 flex justify-end space-x-6 px-10 text-sm">
          <div>Filtrar por</div>
          <div>Ordenar por</div>
        </div>
      </section>

      <section class="grid grid-cols-12 gap-5">
        <div class="relative col-span-2 h-full">
          <div class="sticky top-10 h-fit space-y-2">
            <p class="text-xl font-semibold">Categorías</p>
            <hr />
            <ul class="space-y-1 pl-5">
              <li v-for="category in categories" :key="category">
                <button
                  class="w-full transform rounded-md border border-gray-100 p-2 text-left text-sm transition duration-300 hover:text-primary-500 hover:shadow"
                  :class="{
                    'scale-105 text-primary-500 shadow':
                      activeCategories.includes(category),
                  }"
                  @click="filterByCategory(category)"
                >
                  {{ category }}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-span-10 px-5">
          <div class="grid grid-cols-3 gap-5 xl:grid-cols-4">
            <NuxtLink
              v-for="item in [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
              ]"
              :key="item"
              :to="`/marketplace/productos/${item}`"
            >
              <article
                class="h-96 w-full rounded border border-gray-100 transition duration-300 hover:scale-105"
              >
                <div class="h-[60%] rounded bg-gray-500" />
                <div class="flex h-[40%] flex-col justify-between p-4">
                  <div class="space-y-1">
                    <span class="text-xs text-gray-500">Categoria</span>
                    <div>
                      <p class="font-medium">Papitas Fritas</p>
                      <MarketplaceRating />
                    </div>
                  </div>

                  <div class="flex justify-between">
                    <p class="font-medium">
                      $ 1.000
                      <span class="text-sm text-gray-500 line-through">
                        $1.500
                      </span>
                    </p>
                    <button class="btn-outline btn-primary btn-xs btn border-0">
                      <ShoppingCartPlusIcon />
                      Agregar
                    </button>
                  </div>
                </div>
              </article>
            </NuxtLink>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'marketplace',
  data() {
    return {
      search: '',

      categories: ['Frutas', 'Verduras', 'Legumbres', 'Cereales'],
      activeCategories: [] as string[],
    }
  },
  computed: {
    querySearch() {
      return this.$route.query.search
    },
  },
  methods: {
    filterByCategory(category: string) {
      if (this.activeCategories.includes(category))
        this.activeCategories = this.activeCategories.filter(
          (activeCategory) => activeCategory !== category
        )
      else this.activeCategories.push(category)
    },
  },
})
</script>
