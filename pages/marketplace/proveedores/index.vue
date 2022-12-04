<template>
  <Loader />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  created() {
    this.$router.push('/')
  },
})
</script>
