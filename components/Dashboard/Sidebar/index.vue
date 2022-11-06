<template>
  <nav class="fixed top-[10vh] left-0 z-30 h-[90vh] bg-white p-5">
    <ol>
      <li v-for="(links, index) in menu" :key="index">
        <ol class="space-y-2">
          <li v-for="link in links" :key="link.label">
            <DashboardSidebarButton :data="link" />
          </li>
        </ol>

        <hr class="my-2" />
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import menu from '@/resources/menu'

export default Vue.extend({
  data() {
    return {
      menu,
    }
  },
})
</script>
