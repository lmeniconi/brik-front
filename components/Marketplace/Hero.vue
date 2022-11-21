<template>
  <section class="flex h-72 flex-col justify-center space-y-5">
    <h1 class="text-5xl font-semibold">{{ title }}</h1>
    <MarketplaceBreadcrumb />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
