<template>
  <Loader />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'blank',
  mounted() {
    const redirect = localStorage.getItem('redirect')
    this.$router.push(redirect || '/dashboard')
  },
})
</script>
