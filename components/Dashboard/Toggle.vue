<template>
  <div class="form-control">
    <label class="label w-fit cursor-pointer space-x-2">
      <span v-if="label" class="label-text">{{ label }}</span>
      <input v-model="data" type="checkbox" class="toggle-primary toggle" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      data: this.value,
    }
  },
  watch: {
    data(value) {
      this.$emit('input', value)
    },
    value(value) {
      this.data = value
    },
  },
})
</script>
