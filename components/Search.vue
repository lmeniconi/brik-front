<template>
  <div class="relative">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <SearchIcon :size="iconSize.toString()" class="text-gray-700" />
    </span>

    <input
      type="text"
      placeholder="Buscar..."
      class="rounded-lg border py-2 pl-10 pr-4 text-sm text-gray-500 focus:outline-none"
      :class="inputClass"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    inputClass: {
      type: String,
      default: 'w-full',
    },
    iconSize: {
      type: Number,
      default: 16,
    },
  },
})
</script>
