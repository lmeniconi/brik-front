<template>
  <form class="space-y-sm" @submit.prevent="submit">
    <DashboardTitle title="Añadir Producto" withGoBack />

    <DashboardCard title="Información del producto">
      <DashboardToggle v-model="product.published" label="Publicado" />
      <hr />
      <InputFile label="Imagen" :required="!slug" @input="inputImage" />
      <hr />
      <MultipleSelect
        v-model="product.categories"
        required
        label="Categorías"
        placeholder="Seleccionar categoría"
        :options="categories"
      />
      <hr />
      <Input
        v-model="product.name"
        required
        label="Nombre"
        placeholder="Nombre del producto"
        :error="getErrorMessage('name')"
        @input="clearError('name')"
      />
      <hr />
      <DashboardCatalogProductPriceInput v-model="product.prices" />
      <hr />
      <Textarea
        v-model="product.description"
        required
        label="Descripción"
        placeholder="Descripción del producto"
        :error="getErrorMessage('description')"
        @input="clearError('description')"
      />
      <hr />
      <InputList
        v-model="product.characteristics"
        label="Características"
        placeholder="Característica del producto"
        button="Nueva característica"
      />
    </DashboardCard>

    <DashboardCard title="Almacen">
      <Input
        v-model="product.stock"
        required
        label="Existencias"
        placeholder="Existencias totales del producto"
        type="number"
        :min="1"
        :error="getErrorMessage('stock')"
        @input="clearError('stock')"
      />
      <hr />
      <div class="form-control">
        <label class="label">
          <span class="label-text">Dimensiones (cm)</span>
        </label>

        <div class="flex gap-4">
          <Input
            v-model="product.width"
            required
            type="float"
            class="w-full"
            label="Largo"
            placeholder="Largo del producto"
            :error="getErrorMessage('width')"
            @input="clearError('width')"
          />
          <Input
            v-model="product.depth"
            required
            type="float"
            class="w-full"
            label="Ancho"
            placeholder="Ancho del producto"
            :error="getErrorMessage('depth')"
            @input="clearError('depth')"
          />
          <Input
            v-model="product.height"
            required
            type="float"
            class="w-full"
            label="Alto"
            placeholder="Alto del producto"
            :error="getErrorMessage('height')"
            @input="clearError('height')"
          />
        </div>
      </div>
      <hr />
      <Input
        v-model="product.weight"
        type="float"
        label="Peso (kg)"
        placeholder="Peso del producto"
        :error="getErrorMessage('weight')"
        @input="clearError('weight')"
      />
    </DashboardCard>

    <section class="flex justify-end">
      <button :disabled="saveDisabled" type="submit" class="btn btn-primary">
        Guardar
      </button>
    </section>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { Category } from '@/types'
import { getErrorMessage, clearError } from '@/utils/errors'
import { jsonToFormData } from '@/utils/input'

export default Vue.extend({
  props: {
    slug: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      product: {
        published: true,
        image: '',
        name: '',
        description: '',
        characteristics: [],
        stock: '',
        width: '',
        depth: '',
        height: '',
        weight: '',
        categories: [],
        prices: [
          {
            price: null,
            minUnits: '1',
            maxUnits: null,
          },
        ],
      },
      errors: [] as Error[],
      categories: [] as any[],

      saveDisabled: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
  watch: {
    product: {
      handler() {
        const lastPrice = this.product.prices[this.product.prices.length - 1]
        this.saveDisabled =
          lastPrice.maxUnits !== null && lastPrice.maxUnits !== ''

        if (!this.slug && !this.product.image) this.saveDisabled = true
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async submit() {
      this.$store.commit('loader/setLoading', true)
      try {
        const data: any = { ...this.product }
        data.characteristics = data.characteristics.join(',')
        data.storeId = this.user.store.id

        let form = data
        if (data.image) form = jsonToFormData(data)

        if (this.slug) await this.$axios.put(`/products/${this.slug}`, form)
        else await this.$axios.post('/products', form)

        this.$router.push('/dashboard/catalogo/productos')
      } catch (error: any) {
        const { errors } = error.response.data
        this.errors = errors
      } finally {
        this.$store.commit('loader/setLoading', false)
      }
    },

    async fetchData() {
      this.$store.commit('loader/setLoading', true)

      if (this.slug) await this.fetchProduct()

      await this.fetchCategories()
      this.$store.commit('loader/setLoading', false)
    },

    async fetchProduct() {
      try {
        const { data } = await this.$axios.get(`/products/${this.slug}`)

        data.prices = data.productPrices.map(
          (price: { price: number; minUnits: number; maxUnits: number }) => ({
            price: price.price,
            minUnits: price.minUnits,
            maxUnits: price.maxUnits,
          })
        )
        delete data.productPrices

        data.categories = data.categories.map(
          (category: Category) => category.id
        )

        data.characteristics = data.characteristics
          ? data.characteristics.split(',')
          : []

        this.product = data
      } catch (error: any) {
        this.$router.push('/dashboard/catalogo/productos')
      }
    },
    async fetchCategories() {
      const categories: Category[] = await this.$axios.$get('/categories')
      this.categories = categories.map(({ id, name }) => ({
        label: name,
        value: id,
      }))
    },

    inputImage(file: any) {
      this.product.image = file
    },

    getErrorMessage(field: string) {
      return getErrorMessage(field, this.errors)
    },
    clearError(field: string) {
      this.errors = clearError(field, this.errors)
    },
  },
})
</script>
