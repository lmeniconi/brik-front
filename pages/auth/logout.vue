<template>
  <Loader />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'blank',
  mounted() {
    this.$store.commit('auth/setUser', null)
    window.location.href = `${this.$config.apiUrl}/logout/auth0`
  },
})
</script>
