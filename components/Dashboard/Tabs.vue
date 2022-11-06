<template>
  <nav>
    <ol class="tabs">
      <li
        v-for="tab in tabs"
        :key="tab"
        class="tab"
        :class="{
          'tab-bordered border-primary-500 text-primary-500': value === tab,
        }"
      >
        <button @click="tabChange(tab)">
          {{ tab }}
        </button>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      active: this.tabs[0],
    }
  },
  methods: {
    tabChange(value: string) {
      this.$emit('input', value)
    },
  },
})
</script>
