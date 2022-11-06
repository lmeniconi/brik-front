<template>
  <Loader />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'blank',
  mounted() {
    window.location.href = `${this.$config.apiUrl}/login/auth0`
  },
})
</script>
