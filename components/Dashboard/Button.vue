<template>
  <button @click="$emit('click')">
    <component :is="icon" :class="classes" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

enum ButtonType {
  edit = 'edit',
  delete = 'delete',
}

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: true,
      validator: (value: ButtonType) => {
        return Object.values(ButtonType).includes(value)
      },
    },
  },
  computed: {
    icon() {
      if (this.type === ButtonType.edit) return 'EditIcon'
      if (this.type === ButtonType.delete) return 'TrashIcon'

      return ''
    },
    classes() {
      let classes = 'transition duration-200'

      if (this.type === ButtonType.edit) classes += ' hover:text-warning'
      if (this.type === ButtonType.delete) classes += ' hover:text-error'

      return classes
    },
  },
})
</script>
