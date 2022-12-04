<template>
  <div class="space-y-xs">
    <div class="flex items-center">
      <div class="w-9/12">
        <slot name="filters" />
      </div>
      <div class="w-3/12">
        <slot name="actions" />
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th v-if="selectable">
              <label>
                <input
                  type="checkbox"
                  class="checkbox"
                  @change="$emit('selectAll')"
                />
              </label>
            </th>
            <th v-for="header in headers" :key="header">{{ header }}</th>
            <th v-if="withActions" />
          </tr>
        </thead>
        <tbody>
          <slot />
        </tbody>
        <tfoot>
          <tr>
            <th v-if="selectable" />
            <th v-for="header in headers" :key="header">{{ header }}</th>
            <th v-if="withActions" />
          </tr>
        </tfoot>
      </table>
    </div>

    <div v-if="pagination" class="flex justify-end">
      <div class="btn-group">
        <button
          v-for="index in pages"
          :key="index"
          class="btn btn-primary"
          :class="{ 'btn-outline': pagination.current_page !== index }"
          @click="$emit('changePage', index)"
        >
          {{ index }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Pagination } from '@/types'

export default Vue.extend({
  props: {
    headers: {
      type: Array,
      required: true,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    withActions: {
      type: Boolean,
      default: false,
    },
    pagination: {
      type: Object as () => Pagination,
      default: null,
    },
  },
  computed: {
    pages() {
      if (!this.pagination) return 0

      const result = Math.trunc(
        this.pagination.total / this.pagination.per_page
      )

      return result || 1
    },
  },
})
</script>

<style lang="postcss" scoped>
th {
  @apply border-b bg-white px-4 py-3 text-sm font-medium;
}

td {
  @apply p-4;
}

tr:nth-child(odd) {
  @apply bg-gray-50;
}
</style>
