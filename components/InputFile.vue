<template>
  <div class="form-control">
    <label v-if="label" class="label">
      <span class="label-text"
        >{{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </span>
      <span class="label-text-alt text-primary-500">
        <slot name="info" />
      </span>
    </label>
    <input
      type="file"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      class="file-input-primary file-input w-full max-w-xs"
      :class="{ 'file-input-error': error }"
      @input="input"
    />
    <label v-if="error" class="label">
      <span class="label-text-alt text-error">{{ error }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(e: Event) {
      const target = e.target as HTMLInputElement
      // @ts-ignore
      this.$emit('input', target.files[0])
    },
  },
})
</script>
