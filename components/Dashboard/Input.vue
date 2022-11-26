<template>
  <div class="form-control">
    <label v-if="label" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :min="min"
      class="input-bordered input"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

enum InputType {
  text = 'text',
  number = 'number',
}

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
  },
})
</script>
