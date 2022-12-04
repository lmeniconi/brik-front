<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text"
        >Franja de precios
        <span class="text-red-500">*</span>
      </span>
    </label>
    <div class="space-y-3">
      <div
        v-for="(priceRange, index) in priceRanges"
        :key="index"
        class="flex items-end gap-4"
      >
        <div class="flex w-11/12 justify-between gap-4">
          <Input
            v-model="priceRange.price"
            label="Precio"
            class="w-full"
            placeholder="Precio del producto"
            type="number"
          />
          <Input
            v-model="priceRange.minUnits"
            label="Unidades minimas"
            :disabled="true"
            class="w-full"
            placeholder="Desde"
            type="number"
          />
          <Input
            v-model="priceRange.maxUnits"
            label="Unidades maximas (opcional)"
            class="w-full"
            placeholder="Hasta"
            type="number"
            @input="(value) => handleMaxInput(index, value)"
          />
        </div>
        <div class="h-full w-1/12">
          <Button
            v-if="index === priceRanges.length - 1 && index !== 0"
            type="delete"
            @click="remove(index)"
          />
        </div>
      </div>

      <button
        type="button"
        :disabled="addDisabled"
        class="btn btn-primary w-fit px-3 py-1 text-xs"
        @click="add"
      >
        Nueva franja de precio
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { toNumber } from 'lodash'
import Vue from 'vue'

type PriceRange = {
  price: string | null
  minUnits: string | null
  maxUnits: string | null
}

export default Vue.extend({
  props: {
    value: {
      type: Array,
      default: () => [] as PriceRange[],
    },
  },
  data() {
    return {
      priceRanges: this.value as PriceRange[],
    }
  },
  computed: {
    addDisabled() {
      // @ts-ignore
      const lastPriceRange = this.priceRanges[this.priceRanges.length - 1]
      return (
        !lastPriceRange ||
        !lastPriceRange.price ||
        !lastPriceRange.minUnits ||
        !lastPriceRange.maxUnits
      )
    },
  },
  watch: {
    priceRanges: {
      handler() {
        this.$emit('input', this.priceRanges)
      },
      deep: true,
    },
    value() {
      // @ts-ignore
      this.priceRanges = this.value
    },
  },
  methods: {
    add() {
      const lastPriceRange = this.priceRanges[this.priceRanges.length - 1]

      if (
        lastPriceRange.price &&
        lastPriceRange.maxUnits &&
        lastPriceRange.minUnits
      ) {
        this.priceRanges.push({
          price: (toNumber(lastPriceRange.price) - 1).toString(),
          minUnits: (toNumber(lastPriceRange.maxUnits) + 1).toString(),
          maxUnits: null,
        })
      }
    },
    remove(index: number) {
      this.priceRanges.splice(index, 1)
    },

    handleMaxInput(index: number, value: string) {
      const nextPriceRange = this.priceRanges[index + 1]
      if (nextPriceRange)
        nextPriceRange.minUnits = (toNumber(value) + 1).toString()
    },

    getNumberValue(value: string) {
      return value ? toNumber(value) : null
    },
  },
})
</script>
