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
      v-model="input"
      :disabled="disabled"
      :type="computedType"
      :step="computedStep"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      class="input-bordered input"
      :class="{ 'input-error': error }"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
    <label v-if="error" class="label">
      <span class="label-text-alt text-error">{{ error }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

enum InputType {
  text = 'text',
  number = 'number',
  float = 'float',
}

export default Vue.extend({
  props: {
    value: {
      type: [String, Number],
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
    type: {
      type: String,
      default: InputType.text,
      validator: (value: InputType) => {
        return Object.values(InputType).includes(value)
      },
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: null,
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
  data() {
    return {
      input: this.value,
    }
  },
  computed: {
    computedType(): string {
      if (this.type === InputType.float) return InputType.number
      return this.type
    },
    computedStep(): number | null {
      if (this.type === InputType.float) return 0.01
      else if (this.type === InputType.number) return 1
      return null
    },
  },
  watch: {
    input(value: string) {
      this.$emit('input', value)
    },
    value(value: string) {
      this.input = value
    },
  },
})
</script>
