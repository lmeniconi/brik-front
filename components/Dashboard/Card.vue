<template>
  <div class="space-y-xs rounded-box h-full p-6" :class="classes">
    <div v-if="title" class="flex h-fit items-center justify-between">
      <h4 class="subtitle">{{ title }}</h4>
      <slot name="action" />
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

enum CardVariant {
  fill = 'fill',
  outline = 'outline',
}

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      validator: (value: CardVariant) =>
        Object.values(CardVariant).includes(value),
      default: CardVariant.fill,
    },
  },
  computed: {
    classes() {
      let classes = ''

      if (this.variant === CardVariant.fill) classes += 'bg-white shadow-lg'
      else if (this.variant === CardVariant.outline)
        classes += 'border-2 border-gray-200'

      return classes
    },
  },
})
</script>
