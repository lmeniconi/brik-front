<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text"
        >{{ label }}
        <span v-if="required" class="text-red-500">*</span>
      </span>
      <span class="label-text-alt text-primary-500">
        <slot name="info" />
      </span>
    </label>
    <div class="space-y-3">
      <div class="flex items-center space-x-2">
        <div
          v-for="(selected, index) in items"
          :key="selected"
          class="badge-primary badge badge-lg space-x-1"
        >
          <span>
            {{ getLabel(selected) }}
          </span>
          <button @click="remove(index)">
            <TrashIcon size="16" />
          </button>
        </div>
      </div>

      <Select
        class="w-full"
        :placeholder="placeholder"
        :options="notSelectedOptions"
        :required="required"
        @input="add"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { find } from 'lodash'
import { Option } from '@/types/inputs'

export default Vue.extend({
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array as () => Option[],
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
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
      items: this.value as string[],
      notSelectedOptions: this.options as Option[],
    }
  },
  watch: {
    items: {
      handler() {
        this.$emit('input', this.items)
        this.notSelectedOptions = this.options.filter(
          (option) => !this.items.includes(option.value)
        )
      },
      deep: true,
    },
    value: {
      handler() {
        this.items = this.value as string[]
      },
      deep: true,
    },
    options() {
      this.notSelectedOptions = this.options.filter(
        (option) => !this.items.includes(option.value)
      )
    },
  },
  methods: {
    add(value: string | null) {
      if (value) this.items.push(value)
    },
    remove(index: number) {
      this.items.splice(index, 1)
    },

    getLabel(value: string) {
      const option = find(this.options, (option) => option.value === value)
      return option ? option.label : ''
    },
  },
})
</script>
