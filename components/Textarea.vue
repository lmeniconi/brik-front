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
    <textarea
      v-model="text"
      :required="required"
      :placeholder="placeholder"
      class="textarea-bordered textarea"
      :class="{ 'textarea-error': error }"
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
      default: '',
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
  data() {
    return {
      text: this.value,
    }
  },
  watch: {
    text() {
      this.$emit('input', this.text)
    },
    value() {
      this.text = this.value
    },
  },
})
</script>
