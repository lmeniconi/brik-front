<template>
  <ul class="flex space-x-2">
    <li
      v-for="(route, index) in routes"
      :key="route.href"
      class="flex items-center space-x-2"
    >
      <NuxtLink
        :to="route.href"
        class="flex items-center space-x-1 transition-colors duration-300 hover:text-primary-500"
      >
        <component :is="route.icon" v-if="route.icon" size="20" />
        <span>
          {{ route.name }}
        </span>
      </NuxtLink>

      <ChevronRightIcon v-if="index < routes.length - 1" size="16" />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { capitalize } from 'lodash'

type Route = {
  name: string
  href: string
  icon?: string
}

export default Vue.extend({
  data() {
    return {
      routes: [] as Route[],
    }
  },

  created() {
    const path = this.$route.path.split('/')
    const routes: Route[] = path.map((route, index) => ({
      name: capitalize(route),
      href: path.slice(0, index + 1).join('/'),
    }))

    routes[0] = {
      name: 'Inicio',
      href: '/',
    }

    this.routes = routes
  },
})
</script>
