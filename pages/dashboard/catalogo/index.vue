<template>
  <Loader />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$router.push('/dashboard')
  },
})
</script>
