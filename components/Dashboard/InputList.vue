<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <div class="space-y-3">
      <ul class="space-y-3">
        <li v-for="(item, index) in list" :key="index" class="flex">
          <DashboardInput
            class="w-11/12"
            :placeholder="placeholder"
            @input="(value) => input(value, index)"
          />

          <div class="flex w-1/12 justify-center">
            <button @click="remove(index)">
              <TrashIcon />
            </button>
          </div>
        </li>
      </ul>
      <button class="btn btn-primary w-fit px-3 py-1 text-xs" @click="add">
        {{ button }}
      </button>
    </div>
    {{ list }}
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
    button: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      list: [] as string[],
    }
  },
  methods: {
    add() {
      this.list.push('')
    },
    input(value: string, index: number) {
      this.list[index] = value
    },
    remove(index: number) {
      this.list.splice(index, 1)
    },
  },
})
</script>
