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

    <div v-if="withPagination" class="flex justify-end">
      <div class="btn-group">
        <button class="btn btn-primary">1</button>
        <button class="btn btn-active">2</button>
        <button class="btn btn-primary">3</button>
        <button class="btn btn-primary">4</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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
    withPagination: {
      type: Boolean,
      default: false,
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
