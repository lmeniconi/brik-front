<template>
  <DashboardCatalogProductCreateEdit :slug="slug" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      slug: this.$route.params.slug,
    }
  },
})
</script>
