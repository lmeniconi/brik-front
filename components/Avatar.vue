<template>
  <div class="avatar">
    <div class="w-10 rounded-full">
      <img :src="src" :alt="alt" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
  },
})
</script>
