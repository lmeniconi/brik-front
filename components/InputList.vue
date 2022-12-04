<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <div class="space-y-3">
      <ul class="space-y-3">
        <li v-for="(item, index) in items" :key="index" class="flex">
          <Input
            v-model="item.data"
            class="w-11/12"
            :placeholder="placeholder"
          />

          <div class="flex w-1/12 justify-center">
            <button @click="remove(index)">
              <TrashIcon />
            </button>
          </div>
        </li>
      </ul>
      <button
        type="button"
        class="btn btn-primary w-fit px-3 py-1 text-xs"
        @click="add"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    button: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      items: this.value,
    }
  },
  watch: {
    items: {
      handler() {
        this.$emit(
          'input',
          this.items.map((item: any) => item.data)
        )
      },
      deep: true,
    },
  },
  methods: {
    add() {
      this.items.push({
        data: '',
      })
    },
    remove(index: number) {
      this.items.splice(index, 1)
    },
  },
})
</script>
