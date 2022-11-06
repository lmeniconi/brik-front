<template>
  <div class="modal" :class="{ 'modal-open': active }" @click.self="close">
    <div class="modal-box" :class="modalBoxClasses">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p v-if="description" class="py-4">{{ description }}</p>
      <slot />
      <div class="modal-action">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

enum ModalSize {
  base = 'base',
  lg = 'lg',
  xl = 'xl',
}

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    size: {
      type: String,
      validator: (value: ModalSize) => Object.values(ModalSize).includes(value),
      default: ModalSize.base,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      active: this.value,
    }
  },
  computed: {
    modalBoxClasses() {
      let classes = ''

      if (this.size === ModalSize.lg) classes += 'w-11/12 max-w-5xl'
      if (this.size === ModalSize.xl) classes += 'w-11/12 max-w-7xl'

      return classes
    },
  },
  watch: {
    value() {
      this.active = this.value
    },
    active() {
      this.$emit('input', this.active)
    },
  },
  methods: {
    close() {
      this.active = false
    },
  },
})
</script>
