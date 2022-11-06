<template>
  <section class="space-y-sm">
    <DashboardTitle title="Mi Tienda" />
    <DashboardTabs v-model="activeTab" :tabs="tabs" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      activeTab: '',
      tabs: ['Mis Detalles', 'Perfil', 'Equipo y permisos'],
    }
  },
  created() {
    this.activeTab = this.tabs[0]
  },
})
</script>
