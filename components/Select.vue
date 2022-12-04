<template>
  <div class="form-control">
    <label v-if="label" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <select
      v-model="selected"
      class="select-bordered select"
      :class="{ 'select-error': error }"
    >
      <option value disabled selected>{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <label v-if="error" class="label">
      <span class="label-text-alt text-error">{{ error }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Option } from '@/types/inputs'

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
      validator: (options: Option[]) => {
        return options.every((option) => {
          return typeof option === 'object' && option.value && option.label
        })
      },
    },
  },
  data() {
    return {
      selected: this.value,
    }
  },
  watch: {
    selected(value: string) {
      this.$emit('input', value)
    },
    value(value: string) {
      this.selected = value
    },
  },
})
</script>
